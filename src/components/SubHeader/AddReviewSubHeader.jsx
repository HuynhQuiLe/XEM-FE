import React, {useState } from 'react'
import MainMenu from './MainMenu'
import SmallLogo from '../Logo/SmallLogo';

const AddReviewSubHeader = () => {
  const [isShow, setIsShow] = useState(false)
  
  return (
    <section className={`fixed z-[1] left-[50%] bottom-[30px] -translate-x-[50%]  p-[6px] bg-sub_header_bg rounded-[14px] text-[14px] flex w-fit font-light show-on-begin ${isShow ? 'h-[393px] min-w-[720px]' : 'h-[72px] min-w-0'} transition-default`}
      onMouseLeave={()=> setIsShow(false)}
    >
        <div>
          {isShow && <MainMenu/>}
          <div className='h-[60px] bg-black text-white px-[20px] flex items-center rounded-[8px] cursor-pointer'
              onClick={() => setIsShow(!isShow)}
          >
               <div className=' cursor-pointer'><SmallLogo width={15} /> </div>
              <p className='ml-1 mr-3'>them-review</p>
              <i className=" cursor-pointer fa fa-bars"></i>
          </div>
          
        </div>

        {!isShow && <div className='ml-[6px] bg-[#3e3e3e] text-white rounded-[8px] h-[60px] flex items-center px-[6px]'>
            <div className='h-[48px] flex' >
                <div className='h-full flex items-center px-[12px] rounded-[8px] border border-[#4e4e4e] hover:border-[#d3d3d3] justify-center cursor-pointer transition-default'>
                  <i className="fa fa-trash mr-2"></i>
                  <p>Xoá tất cả</p>
                </div>
            </div>
        </div>}

        {!isShow && <div className='ml-[6px] bg-primary text-black rounded-[8px] h-[60px] flex items-center px-[6px]  cursor-pointer hover:text-white transition-default'>
            <div className='flex items-center px-[20px] font-semibold'>
              <p>Preview</p>
              <i className="fa fa-arrow-right ml-2 rotate-[-46deg]"></i>
            </div>
           
        </div>}
    </section>
  )
}

export default AddReviewSubHeader