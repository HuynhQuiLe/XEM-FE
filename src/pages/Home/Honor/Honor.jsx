import React, { useEffect } from 'react'
import Background from './Background';
import UserAvatar from './UserAvatar';

const Honor = () => {

    useEffect(() => {
        document.querySelector('.mousemove-event').addEventListener('mousemove', e=> {
            var x = e.offsetX;
            var y = e.offsetY;
            var newposX = x + 20;
            var newposY = y - 100; 
            document.querySelectorAll(".move").forEach(item => {
                item.style.transform = (`translate3d(${newposX}px,${newposY}px,0px)`)
            })
        })
    })



  return (
    <section id="honor" className=' mt-[100px]'>
    <div className='mb-[60px]'>
        <p className='  font-light text-[16px] leading-[200%] mb-[16px]'>Honor</p>
        <div className='flex items-end justify-between'>
            <h2 className='leading-[120%] text-[45px] font-semibold'>Vinh danh <br/> thành viên mới.</h2>
            <p className='font-light text-[16px] leading-[200%]'>Cùng chào đón <b className=' font-semibold'>10 thành viên mới</b> đã gia nhập đội nhà <b className=' font-semibold'>XEM.</b> nhé.</p>
        </div>
    </div>

    <div className='w-full h-[50vh] mb-[120px] relative'>
        <Background/>
        <UserAvatar />
    </div>
    
    
</section>
  )
}

export default Honor