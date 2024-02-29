import React from 'react'

const Tag = () => {
  return (
    <div className='mt-5'>
        <p className='font-semibold text-[18px]'>Từ khoá tìm kiếm:</p>
        <div className='text-[14px] flex flex-wrap gap-[10px] mt-3'>
            <button className=' border-[1px] px-4 rounded-[20px] mb-1 border-black'>Nồi chiên</button>
            <button className=' border-[1px] px-4 rounded-[20px] mb-1 border-black'>Philips HD9643</button>
            <button className=' border-[1px] px-4 rounded-[20px] mb-1 border-black'>Philips HD9643</button>
            <button className=' border-[1px] px-4 rounded-[20px] mb-1 border-black'>Giá HD9643</button>
        </div>
    </div>
  )
}

export default Tag