import React, { useEffect } from 'react'

const SectionHeading = ({subHeading, heading1, heading2, description, items_start}) => {
    useEffect(() => {
        if(description) {
            document.querySelector('#section_description').innerHTML = description
        }
    },[])

  return (
    <div className='mb-[60px]'>
       {subHeading ? <p className='  font-light text-[16px] leading-[200%] mb-[16px]'>{subHeading}</p> : null}
        <div className={`flex ${items_start ? 'items-start' : 'items-end'}  justify-between`}>
            <h2 className='leading-[120%] text-[45px] font-semibold'>{heading1}{heading2 ? <><br/>{heading2}</> : null}</h2>
            {description ? <p id="section_description" className='font-light text-[16px] leading-[200%] max-w-[50%]'></p> : null}
        </div>
    </div>
  )
}

export default SectionHeading