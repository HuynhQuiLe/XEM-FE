import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom';

const MainLogo = () => {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    let src = ""
    pathname.includes('chi-tiet') ? src = '/img/XEM-white.svg' : src = "/img/XEM.svg"
    return (
        <div onClick={() => navigate('/')}>
            <img src={src} 
            className='w-[80px] h-auto cursor-pointer' alt="logo" />               
        </div>
    )
}

export default MainLogo