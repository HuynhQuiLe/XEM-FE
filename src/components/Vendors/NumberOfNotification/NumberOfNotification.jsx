import React from 'react'
import New from '../NumberNotification/New';
import Total from '../NumberNotification/Total';

const NumberOfNotification = () => {
    

  return (
    <div className='flex-1 text-right '>
        <p className='font-light text-[16px] leading-[200%]'>Bạn đang có <b className='font-semibold text-[20px]'><New isNumberOnly={true}/></b>/<Total/> thông báo mới.</p>
    </div> 
  )
}

export default NumberOfNotification