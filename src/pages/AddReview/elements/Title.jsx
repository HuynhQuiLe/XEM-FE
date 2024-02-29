import React from 'react'

const Title = () => {
  return (
    <div className='mb-[36px]'>
        <div>
            <label htmlFor="" className='label-text '>Tiêu đề(*)</label>
        </div>
        <div>
            <textarea rows={1}
            className='w-full outline-none border-b-[1px] border-gray  focus:border-black transition-default p-[16px]' 
            placeholder='Tiêu đề bài viết'
            />
        </div>
    </div>
  )
}

export default Title