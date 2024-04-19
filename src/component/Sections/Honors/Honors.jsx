import React, { useEffect } from 'react'
import HonorsBackground from '../../Photos/Background/HonorsBackground';
import SectionHeading from '../../Headings/SectionHeading/SectionHeading';
import TenNewMembers from '../TenNewMembers/TenNewMembers';

const Honors = () => {


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
            <TenNewMembers />
        </div>
        
        
    </section>
  )
}

export default Honors