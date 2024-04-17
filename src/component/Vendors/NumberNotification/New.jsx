import React, { useState } from 'react'

import {useEffect} from 'react';
import {notificationSer} from '../../../api/api';

const New = ({isNumberOnly,withCirlcle, showAtAvatar}) => {
    const [newNoti, setNewNoti] = useState(0)
    useEffect(() => {
        notificationSer.getNewNumberOfNotiByUser()
        .then(({data}) => {
            setNewNoti(data.content.new)
        })
    },[])
    if(isNumberOnly) {
        return (
            <span>{newNoti}</span>
        )
    } 
    
    if (withCirlcle) {
        if(showAtAvatar) {
            if(newNoti) {
                return <p className='absolute right-[-25%] top-[-25%] h-[20px] w-[20px] leading-[20px] text-[12px] font-semibold text-center rounded-full bg-sf_bg_dark text-white'>{newNoti}</p>
            } else {
                return null
            }
        } else {
            if(newNoti) {
                return <p className='h-[20px] w-[20px] leading-[20px] text-[12px] font-semibold text-center rounded-full bg-white text-black'>{newNoti}</p>
            } else {
                return null
            }
        }
        
    }
    
}

export default New
