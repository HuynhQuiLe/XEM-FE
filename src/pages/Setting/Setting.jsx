import React, { useEffect } from 'react'
import {Outlet, useLocation, useNavigate } from 'react-router-dom';
import './setting.css'

const SettingLayout = () => {
    const {pathname} = useLocation()
    const navigate = useNavigate()
    let breakcum = ''

    useEffect( () => {
        document.querySelector(".selected-tab")?.classList.remove('.selected-tab')
    }, [pathname])


    const showBreakcum = () => {
        if(pathname.includes('ho-so') ) {
            breakcum = 'Hồ sơ'
        }
        if(pathname.includes('thong-tin-ca-nhan') || pathname.replaceAll('/','')==="settingsdelete-account") {
            breakcum= "Thông tin cá nhân"
        }
        return breakcum
    }


  return (
    <section className='mt-[50px] mb-[100px]'>
        <div className='flex items-center h-[125px]'>
            <div className='w-[20%] h-[65px]'>
                <h6 className='text-[20px] font-semibold'>Profile & Directory</h6>
                <div className='flex items-center my-[10px]'>
                    <i className="fa fa-sliders-h"></i>
                    <p className='mx-[8px]'> &gt;</p>
                    <p className={`${pathname.replaceAll('/','')==="settingsdelete-account" ? 'font-light' : 'font-semibold'}`}>
                        {showBreakcum()}
                        {pathname.replaceAll('/','')==="settingsdelete-account" &&
                            <span className=' font-semibold'> <span className=' font-light'>&gt;</span> Delete account</span>
                            
                        }
                    </p>
                </div>
            </div>
            <div className='w-[80%] pl-[30px] h-[60px] relative'>
                <div className=' flex justify-start gap-[40px] h-full font-light'>
                   
                    <p className={`tab cursor-pointer ${pathname.includes('ho-so') && 'selected-tab'}`} onClick={() => navigate("/settings/ho-so")}>Hồ sơ công khai</p>
                    <p className={`tab cursor-pointer ${pathname==="" && 'selected-tab'}`} >Directory</p>
                    <p className={`tab cursor-pointer ${pathname==="" && 'selected-tab'}`} >Gallery</p>
                    <p className={`tab cursor-pointer ${pathname.includes('thong-tin-ca-nhan') && 'selected-tab'}`} onClick={() => navigate("/settings/thong-tin-ca-nhan")}>Thông tin cá nhân</p>
                </div> 
                <div className=' absolute bottom-0 left-0 w-full pl-[30px]'>
                    <div className='dot-line w-full h-[1px]'></div>
                </div>
            </div>
        </div>
        <Outlet/>
    </section>
  )
}

export default SettingLayout