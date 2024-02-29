import React from 'react'

const Introduction = () => {
  return (
    <div className='mb-[36px]'>
        <div>
            <label htmlFor="" className='label-text '>Giới thiệu chung</label>
        </div>
        <div>
            <textarea rows={3}
            className='w-full outline-none border-b-[1px] border-gray  focus:border-black transition-default p-[16px]'
            placeholder='Lời mở đầu'
            />
        </div>
    </div>
  )
}

export default Introduction