import React from 'react'
import { useLocation } from 'react-router-dom'

const Navigation = () => {
  const {pathname} = useLocation()


  if(pathname.includes('profile') || pathname.includes('settings')|| pathname.includes('them-review') ) {
    return null
  }

  return (
    <div className='pt-[20px] mb-[70px] text-nav_text font-light text-[14px]'>
        <ul className='flex justify-center gap-[40px] uppercase '>
            <li><a href="/">home</a></li>
            <li><a href="/">Đồ gia dụng</a></li>
            <li><a href="/">Thời trang</a></li>
            <li><a href="/">ẩm thực</a></li>
            <li><a href="/">thể thao</a></li>
            <li><a href="/" className=' font-semibold text-black'>văn phòng phẩm</a></li>
            <li><a href="/">nội dung khác</a></li>
        </ul>
    </div>
  )
}

export default Navigation