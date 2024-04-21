import React from 'react'
import {useEffect, useState} from 'react';
import {commentSer} from '../../../api/api';
import {heartLocalStorage} from '../../../api/localStorage';

const HeartComment = ({comment_id}) => {
    const [hearts, setHearts] = useState(0)
    const [isPress, setIsPress] = useState(false)
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        if(comment_id) {
            commentSer.getHearts(comment_id)
            .then(({data}) => {
                setHearts(data.content.heart)
            })
        }

        const heartLocal = heartLocalStorage?.get() 
        if(heartLocal && heartLocal.length) {
            const index =  heartLocal.indexOf(comment_id)
            if(index !== -1) {
                setIsPress(true)
            }
        }

    },[hearts])

    const heart = () => {
        let heartLocal = heartLocalStorage.get() ? heartLocalStorage.get() : []

        // xu ly API
        if(!disabled) {
            setDisabled(true)
            commentSer.increaseHeart(comment_id)
            .then(({data}) => {
                setHearts(data.content.heart)
                setDisabled(false)
            })
        }

        // Xu ly render doi mau
        setIsPress(true)
        if(!heartLocal || !heartLocal?.length) {
            heartLocal.push(comment_id)
            heartLocalStorage.set(heartLocal)
        } else {
            const index =  heartLocal.indexOf(comment_id)
            if(index === -1) {
                heartLocal.push(comment_id)
                heartLocalStorage.set(heartLocal)
            }
        }
    }

    return (
        <div className={`flex gap-[5px] items-center cursor-pointer`} onClick={heart}>
            <i className={`fa fa-heart ${isPress ? 'text-error' : 'text-white'}`}></i>
            <p>{hearts}</p>
        </div>
    )
}


export default HeartComment