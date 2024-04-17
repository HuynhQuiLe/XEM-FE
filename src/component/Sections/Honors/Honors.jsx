import React, { useEffect } from 'react'
import HonorsBackground from '../../Photos/Background/HonorsBackground';
import HonorsAvatar from '../../Photos/Avatar/HonorsAvatar';
import SectionHeading from '../../Headings/SectionHeading/SectionHeading';

const Honors = () => {

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
        <SectionHeading 
            subHeading='Honors'
            heading1='Vinh danh' 
            heading2='thành viên mới.' 
            description={`Cùng chào đón <b class=' font-semibold'>10 thành viên mới</b> đã gia nhập đội nhà <b class=' font-semibold'>XEM.</b> nhé.`} 
        />
        <div className='w-full h-[50vh] mb-[120px] relative'>
            <HonorsBackground/>
            <HonorsAvatar />
        </div>
        
        
    </section>
  )
}

export default Honors