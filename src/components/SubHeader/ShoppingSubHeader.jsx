import React, {useState } from 'react'
import MainMenu from './MainMenu'

const ShoppingSubHeader = () => {
  const [isShow, setIsShow] = useState(false)
  
  return (
    <section className={`fixed z-[1] left-[50%] bottom-[30px] -translate-x-[50%]  p-[6px] bg-bg_sub_header rounded-[14px] text-[14px] flex w-fit font-light show-on-begin ${isShow ? 'h-[393px] min-w-[720px]' : 'h-[72px] min-w-0'} transition-default`}>
        <div>
          {isShow && <MainMenu/>}
          <div className='h-[60px] bg-black text-white px-[20px] flex items-center rounded-[8px]'
              onClick={() => setIsShow(!isShow)}
          >
              <p className=' cursor-pointer'>a.</p>
              <p className='ml-1 mr-3'>home</p>
              <i className=" cursor-pointer fa fa-bars"></i>
          </div>
        </div>
        {!isShow && <div className='ml-[6px] bg-[#3e3e3e] text-white rounded-[8px] h-[60px] flex items-center px-[6px]'>
            <div className='flex items-center ml-[6px] mr-[12px] '><strong>Home</strong></div>
            <div className='h-[48px] flex' >
                <div className='h-full flex items-center px-[12px] ml-[6px] rounded-[8px] border border-[#d3d3d3]'><p>SOTD</p></div>
                <div className='h-full flex items-center px-[12px] ml-[6px] rounded-[8px] border border-[#4e4e4e]'><p>Nominees</p></div>
                <div className='h-full flex items-center px-[12px] ml-[6px] rounded-[8px] border border-[#4e4e4e]'><p>Directory</p></div>
                <div className='h-full flex items-center px-[12px] ml-[6px] rounded-[8px] border border-[#4e4e4e]'><p>Collections Shopping</p></div>
            </div>
        </div>}
    </section>
  )
}

export default ShoppingSubHeader