import React, { useEffect, useState } from 'react'
import { notificationSer } from '../../api/api'

const NumberOfNoti = () => {
    const [numberNoti, setNumberNoti] = useState(null)
    
    useEffect(() => {
        notificationSer.getNumberOfNotiByUser()
        .then(({data}) => {
            setNumberNoti(data.content)
        })
    },[])
  return (
    <div className='flex-1 text-right '>
        <p className='font-light text-[16px] leading-[200%]'>Bạn đang có <b className='font-semibold text-[20px]'>{numberNoti?.new}</b>/{numberNoti?.total} thông báo mới.</p>
    </div> 
  )
}

export default NumberOfNoti