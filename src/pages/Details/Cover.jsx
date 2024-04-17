import React from 'react'

const Cover = ({cover, session_name}) => {
  return (
    <div className='h-[100vh] flex items-start justify-center'>
      <div className='absolute top-0 left-0 z-[-1] cover-overlay'>
        <img src={cover} className='w-[100vw] h-[100vh] object-cover grayscale-[100%] ' alt="cover master photo" />
      </div>
      <div className='mt-[100px] px-[50px]'>
        <h4 className=' uppercase font-bold text-[6vw] text-shadow-black text-center'>{session_name}</h4>
      </div>
    </div>
  )
}

export default Cover