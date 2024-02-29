import React, {useState } from 'react'
import MainMenu from './MainMenu'
import SmallLogo from '../Logo/SmallLogo';
import Avatar from '../Avatar/Avatar';

const ReviewSubHeader = () => {
  const [isShow, setIsShow] = useState(false)
  
  return (
    <section className={`fixed z-[1] left-[50%] bottom-[30px] -translate-x-[50%]  p-[6px] bg-sub_header_bg rounded-[14px] text-[14px] flex w-fit font-light show-on-begin ${isShow ? 'h-[393px] min-w-[720px]' : 'h-[72px] min-w-0'} transition-default`}>
        <div>
          {isShow && <MainMenu/>}
          <div className='h-[60px] bg-black text-white px-[20px] flex items-center rounded-[8px]'
              onClick={() => setIsShow(!isShow)}
          >
              <div className=' cursor-pointer'><SmallLogo width={15} /> </div>
              <p className='ml-1 mr-3'>danh-gia</p>
              <i className=" cursor-pointer fa fa-bars"></i>
          </div>
        </div>
        {!isShow && <div className='ml-[6px] bg-[#3e3e3e] text-white rounded-[8px] h-[60px] flex items-center px-[6px]'>
            <div className='flex items-center ml-[6px] mr-[12px] gap-[10px] '>
              <p>Được viết bởi</p>
              <Avatar size={32} />
              <p className='link-text leading-[200%] before:bg-white '>Lê Huỳnh Quí</p>
            </div>
        </div>}
        {!isShow && <div className='ml-[6px] bg-primary text-black rounded-[8px] h-[60px] flex items-center px-[6px] cursor-pointer'>
            <p className='flex items-center px-[20px] font-semibold text-[17px] '>
              Lưu
              <i className="fa fa-heart ml-2"></i>
            </p>
        </div>}
    </section>
  )
}

export default ReviewSubHeader