import React from 'react'

const Breadcrumbs = () => {
    
  return (
    <div className='inline-block mb-[30px] text-[14px]'>
        <a href="/">Trang chủ</a>
        <p className='mx-[8px] inline-block'> &gt;</p>
        <a href= "/">Đồ gia dụng </a>
        <p className='mx-[8px] inline-block'> &gt;</p>
        <a href="/" className='font-semibold'>[Review] Nồi chiên không dầu Philips HD9643 có tốt không?</a>
    </div>
  )
}

export default Breadcrumbs