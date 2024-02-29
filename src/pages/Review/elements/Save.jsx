import React from 'react'

const Save = () => {
  return (
    <div className='relative w-[40px] h-[40px] bg-black_hover text-white border-black border-[1px] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all ease-in-out duration-300 cursor-pointer'
    >
        <i className="fa fa-heart text-[18px]"></i>

        <div className='absolute top-[-15px] right-[-10px] bg-error text-white w-[25px] h-[25px] text-center rounded-full'>
          <p className='leading-[25px] text-[16px]'>1</p>
      </div>
    </div>
  )
}

export default Save