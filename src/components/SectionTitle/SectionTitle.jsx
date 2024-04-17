import React, { useEffect } from 'react'

const SectionTitle = ({subTitle, mainTitle, description}) => {
    useEffect(() => {
        document.querySelector("#mainTitle").innerHTML = mainTitle
        document.querySelector("#description").innerHTML = description
    },[])
    return (
        <div>
            <p className='  font-light text-[16px] leading-[200%] mb-[16px]'>{subTitle}</p>
            <div className='flex items-end justify-between'>
                <h2 className='leading-[120%] text-[45px] font-semibold' id='mainTitle'></h2>
                <p className='font-light text-[16px] leading-[200%]' id="description"></p>
            </div>
        </div>
    )
}

export default SectionTitle