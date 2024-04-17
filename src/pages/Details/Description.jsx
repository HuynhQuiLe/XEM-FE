import React from 'react'

const Description = ({description, session_name, published_date}) => {
  return (
    <section id="content" className=' mt-[100px]'>
        <div>
            <p className='  font-light text-[16px] leading-[200%] mb-[16px]'>Content</p>
            <div className='flex items-end justify-between'>
                <h2 className='leading-[120%] text-[45px] font-semibold'>Nội dung phim</h2>
                <p className='font-light text-[16px] leading-[200%]'>Xem phim <span className=' font-semibold'>{session_name} Vietsub {published_date}</span></p>
            </div>
        </div>
        <div className=''>
            <p className='mt-5 leading-[200%] font-thin m-auto'>{description}</p>
        </div>
    </section>
  )
}

export default Description