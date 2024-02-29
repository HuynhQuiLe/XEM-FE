import React from 'react'

const View = () => {
  return (
<div className='relative w-[40px] h-[40px] bg-black_hover text-white border-black border-[1px] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all ease-in-out duration-300 cursor-pointer'
>
    <i className="fa fa-eye text-[18px]"></i>

    <div className='absolute top-[-15px] left-[60%] bg-primary px-2 text-white min-w-[20px] text-center rounded-[8px]'>
      <p className='leading-[25px] text-[16px]'>123</p>
  </div>
</div>
  )
}

export default View

