import React, { useEffect, useState } from 'react'
import { commentSer } from '../../api/api'
import { heartLocalStorage, heartResponseLocalStorage } from '../../api/localStorage'

const ResponseHeart = ({response_id}) => {
    const [hearts, setHearts] = useState(0)

    const [isPress, setIsPress] = useState(false)
    
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        if(response_id) {
            commentSer.getHeartsResponse(response_id)
            .then(({data}) => {
                setHearts(data.content.heart)
            })
        }

        const heartResponseLocal = heartResponseLocalStorage?.get() 
        if(heartResponseLocal && heartResponseLocal.length) {
            const index =  heartResponseLocal.indexOf(response_id)
            if(index !== -1) {
                setIsPress(true)
            }
        }

    },[hearts])

    const heart = () => {
        let heartResponseLocal = heartResponseLocalStorage.get() ? heartResponseLocalStorage.get() : []

        // xu ly API
        if(!disabled) {
            setDisabled(true)
            commentSer.increaseHeartResponse(response_id)
            .then(({data}) => {
                setHearts(data.content.heart)
                setDisabled(false)
            })
        }

        // Xu ly render doi mau
        setIsPress(true)
        if(!heartResponseLocal || !heartResponseLocal?.length) {
            heartResponseLocal.push(response_id)
            heartResponseLocalStorage.set(heartResponseLocal)
        } else {
            const index =  heartResponseLocal.indexOf(response_id)
            if(index === -1) {
                heartResponseLocal.push(response_id)
                heartResponseLocalStorage.set(heartResponseLocal)
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

export default ResponseHeart