import React from 'react'
import './TableOfContent.css'

const TableOfContent = () => {
  return (
    <div className='mt-[30px] h-[100%] text-[18px]'>
        <div className=' relative'>
            <h6 className='text-[18px] font-semibold mb-7 pb-[10px]'>Nội dung</h6>
            <div className=' absolute bottom-0 left-0 w-full'>
                <div className='dot-line w-full h-[1px]'></div>
            </div>
        </div>
         <ul>
            <li className='mb-4'>
                <span className='w-[20px] h-[20px] bg-primary text-white font-bold rounded-full inline-block text-center leading-[20px] mr-2'>1</span>
                <span className=' font-semibold'>Giới thiệu đôi nét về thương hiệu Philips</span>
            </li>
            <li className='mb-4'>
                <span className='w-[20px] h-[20px] bg-primary text-white font-bold rounded-full inline-block text-center leading-[20px] mr-2'>2</span>
                <span>Nồi chiên không dầu Philips HD9643 liệu có thực sự tốt không?</span>
            </li>
            <li className='mb-4'>
                <span className='w-[20px] h-[20px] bg-primary text-white font-bold rounded-full inline-block text-center leading-[20px] mr-2'>3</span>
                <span>Đánh giá ưu điểm, nhược điểm của nồi chiên không dầu Philips HD9643</span>
            </li>
            <li className='mb-4'>
                <span className='w-[20px] h-[20px] bg-primary text-white font-bold rounded-full inline-block text-center leading-[20px] mr-2'>4</span>
                <span>Nồi chiên không dầu Philips HD9643 được bán với giá bao nhiêu? Mua ở đâu?</span>
            </li>
         </ul>
    </div>
  )
}

export default TableOfContent