import React, {useEffect, useState } from 'react'
import MainMenu from './MainMenu'
import SmallLogo from '../Logo/SmallLogo'
import './subHeader.css'
import Home from './elements/Home'
import { useLocation } from 'react-router-dom'
import Review from './elements/Review'

const SubHeader = () => {
  const [isShow, setIsShow] = useState(false)
  const {pathname} = useLocation()
  
  let pageText = ''
  useEffect(() => {
    if (pathname.replaceAll('/','') === '') {
      pageText =  'home'
    } 
    

    if(pathname.includes('danh-gia')) {
      pageText =  'danh-gia'
    } 
  },[pathname])


  return ( 
    <section className={`fixed z-[1] left-[50%] bottom-[30px] -translate-x-[50%]  p-[6px] bg-sub_header_bg rounded-[14px] text-[14px] flex w-fit font-light show-on-begin ${isShow ? 'h-[393px] min-w-[720px]' : 'h-[72px] min-w-0'} transition-default`}>
        <div>
          {isShow && <MainMenu/>}
          <div className={`h-[60px] bg-black text-white px-[20px] flex items-center rounded-[8px] transition-default `}
              onClick={() => setIsShow(!isShow)}
          >
              <div className=' cursor-pointer'><SmallLogo width={15} /> </div>
              <p className='ml-1 mr-3'>{pageText}</p>
              <i className=" cursor-pointer fa fa-bars"></i>
          </div>
        </div> 
        {!isShow && <div className='ml-[6px] bg-[#3e3e3e] text-white rounded-[8px] h-[60px] flex items-center px-[6px]'>
            {pathname.replaceAll('/','') === '' && <Home/>}
            {pathname.includes('danh-gia') && <Review/>}
        </div>} 
    </section> 
  ) 
} 

export default SubHeader