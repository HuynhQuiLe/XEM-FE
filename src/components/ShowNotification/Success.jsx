import React from 'react'
import { useSelector } from 'react-redux'
import './notification.css'

const Success = () => {
    const {isShow, isHide, message} = useSelector(state => state.notificationSlice)
  return (
    <section className={`fixed bottom-[20px] max-w-[400px] opacity-0 ${isShow && 'notification-show-effect opacity-100'} ${isHide && 'notification-hide-effect'} left-[40px] bg-noti_bg rounded-[8px] p-[20px] text-white flex items-center justify-center text-[16px] z-[100]`}>
        <i className="fa fa-check-circle text-[30px] mr-3"></i>
        <p className=' font-light'>{message}</p>
        {/* <p>You change has been saved.</p> */}
    </section>
  )
}

export default Success


