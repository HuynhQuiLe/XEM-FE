import React, {useState } from 'react'
import MainMenu from './MainMenu'
import SubHeaderLogo from '../Logo/SubHeaderLogo'
import { useLocation, useParams } from 'react-router-dom'

const DetailSubHeader = () => {

  const {hash, pathname}= useLocation()
  const [isShow, setIsShow] = useState(false)
  return (
    <section className={`fixed z-[2] left-[50%] bottom-[30px] -translate-x-[50%]  p-[6px] bg-sub_header_bg_white rounded-[14px] text-[14px] flex w-fit font-light show-on-begin ${isShow ? 'h-[393px] min-w-[720px]' : 'h-[72px] min-w-0'} transition-default`}>
        <div>
          {isShow && <MainMenu/>}
          <div className={`h-[60px] bg-black text-white px-[20px] flex items-center rounded-[8px] transition-default cursor-pointer `}
              onClick={() => setIsShow(!isShow)}
          >
              <div className=''><SubHeaderLogo width={15} /> </div>
              <p className='ml-1 mr-3'>chi-tiet</p>
              <i className="fa fa-bars"></i>
          </div>
        </div>
        {!isShow && <div className='ml-[6px] bg-[#3e3e3e] text-white rounded-[8px] h-[60px] flex items-center px-[6px]'>
            {pathname.includes('tap') ? <div className='flex items-center ml-[6px] mr-[12px] '><strong className=' font-semibold'><a href='#'>Video</a></strong></div> : <div className='flex items-center ml-[6px] mr-[12px] '><strong className=' font-semibold'><a href='#info'>Thông tin phim</a></strong></div> }
            <div className='h-[48px] flex' >
                <a href='#schedule' className={`h-full flex items-center px-[12px] ml-[6px] rounded-[8px] border transition-default cursor-pointer ${hash === '#schedule' ? 'border-[#d3d3d3]' : 'border-[#4e4e4e] hover:border-[#a7a7a7]'}`}>Lịch chiếu</a>
                <a href='#content' className={`h-full flex items-center px-[12px] ml-[6px] rounded-[8px] border transition-default cursor-pointer ${hash === '#content' ? 'border-[#d3d3d3]' : 'border-[#4e4e4e] hover:border-[#a7a7a7]'}`}>Nội dung</a>
                <a href='#comment' className={`h-full flex items-center px-[12px] ml-[6px] rounded-[8px] border transition-default cursor-pointer ${hash === '#comment' ? 'border-[#d3d3d3]' : 'border-[#4e4e4e] hover:border-[#a7a7a7]'}`}>Bình Luận</a>
            </div>
        </div>}
        {!isShow && <div className='ml-[6px] bg-yellow_lemon text-black rounded-[8px] h-[60px] flex items-center justify-center w-[60px]'>
          <p className='font-semibold'>Vote</p>
        </div>}
    </section>
  )
}

export default DetailSubHeader