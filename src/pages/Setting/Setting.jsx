import React, { useEffect, useState } from 'react'
import {Outlet, useLocation, useNavigate } from 'react-router-dom';
import { userSer } from '../../api/api';
import { notify } from '../../utils/notify/notify';


const SettingLayout = () => {
    const {pathname} = useLocation()
    const navigate = useNavigate()
    let [isAdmin, setIsAdmin] = useState(false)
    let [message, setMessage] = useState(false)
    let breakcum = ''

  

    useEffect( () => {
        document.querySelector(".selected-tab")?.classList.remove('.selected-tab')
    }, [pathname])

    useEffect(() => {
        userSer.checkAdmin()
        .then(({data}) => {
            setIsAdmin(data.content)
            setMessage(data.message)
        })
        .catch(error => {
            console.log(error)
        })
    },[])

    const showBreakcum = () => {
        if(pathname.includes('ho-so') ) {
            breakcum = 'Hồ sơ'
        }
        if(pathname.includes('thong-tin-ca-nhan') || pathname.replaceAll('/','')==="settingsdelete-account") {
            breakcum= "Thông tin cá nhân"
        }

        if(pathname.includes('them-phim-moi')) {
            breakcum= "Thêm phim mới"
        }

        if(pathname.includes('them-tap-phim')) {
            breakcum= "Thêm tập phim"
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
                    <p className={`tab cursor-pointer ${pathname.includes('thong-tin-ca-nhan') && 'selected-tab'}`} onClick={() => navigate("/settings/thong-tin-ca-nhan")}>Thông tin cá nhân</p>
                    <p  className={`${isAdmin ? 'cursor-pointer' : ' cursor-not-allowed'} tab  ${pathname.includes('them-phim-moi') && 'selected-tab'}`} 
                        onClick={() => {
                            if(isAdmin) {
                                navigate("/settings/them-phim-moi")
                            } else {
                                notify.success(message)
                            }
                        }} >
                            Thêm phim mới 
                            <sup className=' uppercase text-[10px] font-normal text-nav_text ml-1'>admin</sup>
                    </p>
                    <p  className={`${isAdmin ? 'cursor-pointer' : ' cursor-not-allowed'} tab  ${pathname.includes('them-tap-phim') && 'selected-tab'}`} 
                        onClick={() => {
                            if(isAdmin) {
                                navigate("/settings/them-tap-phim")
                            } else {
                                notify.success(message)
                            }
                        }} >
                            Thêm tập phim 
                            <sup className=' uppercase text-[10px] font-normal text-nav_text ml-1'>admin</sup>
                    </p>
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