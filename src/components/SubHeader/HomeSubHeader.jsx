import React, {useState } from 'react'
import MainMenu from './MainMenu'
import { useLocation, useParams } from 'react-router-dom'
import SubHeaderLogo from '../Logos/SubHeaderLogo'

const HomeSubHeader = () => {
  const {hash}= useLocation()
  const [isShow, setIsShow] = useState(false)
  return (
    <section className={`fixed z-[2] left-[50%] bottom-[30px] -translate-x-[50%]  p-[6px] bg-sub_header_bg rounded-[14px] text-[14px] flex w-fit font-light show-on-begin ${isShow ? 'h-[393px] min-w-[720px]' : 'h-[72px] min-w-0'} transition-default`}>
        <div>
          {isShow && <MainMenu/>}
          <div className={`h-[60px] bg-black text-white px-[20px] flex items-center rounded-[8px] transition-default `}
              onClick={() => setIsShow(!isShow)}
          >
              <div className=' cursor-pointer'><SubHeaderLogo width={15} /> </div>
              <p className='ml-1 mr-3'>home</p>
              <i className=" cursor-pointer fa fa-bars"></i>
          </div>
        </div>
        {!isShow && <div className='ml-[6px] bg-[#3e3e3e] text-white rounded-[8px] h-[60px] flex items-center px-[6px]'>
            <div className='flex items-center ml-[6px] mr-[12px] '><strong className=' font-semibold'><a href='#'>Home</a></strong></div>
            <div className='h-[48px] flex' >
                <a href='#POTD' className={`h-full flex items-center px-[12px] ml-[6px] rounded-[8px] border transition-default cursor-pointer ${hash === '#POTD' ? 'border-[#d3d3d3]' : 'border-[#4e4e4e] hover:border-[#a7a7a7]'}`}>POTD</a>
                <a href='#latest' className={`h-full flex items-center px-[12px] ml-[6px] rounded-[8px] border transition-default cursor-pointer ${hash === '#latest' ? 'border-[#d3d3d3]' : 'border-[#4e4e4e] hover:border-[#a7a7a7]'}`}>Mới nhất</a>
                <a href='#trending' className={`h-full flex items-center px-[12px] ml-[6px] rounded-[8px] border transition-default cursor-pointer ${hash === '#trending' ? 'border-[#d3d3d3]' : 'border-[#4e4e4e] hover:border-[#a7a7a7]'}`}>Thịnh hành</a>
                <a href='#honor' className={`h-full flex items-center px-[12px] ml-[6px] rounded-[8px] border transition-default cursor-pointer ${hash === '#honor' ? 'border-[#d3d3d3]' : 'border-[#4e4e4e] hover:border-[#a7a7a7]'}`}>Vinh danh</a>
            </div>
        </div>}
    </section>
  )
}

export default HomeSubHeader