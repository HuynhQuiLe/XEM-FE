import React from 'react'
import User from './elements/User'
import {useSelector } from 'react-redux'
import LoginSignupBTN from './elements/LoginSignupBTN'
import SearchBar from './elements/SearchBar'
import { useLocation, useNavigate } from 'react-router-dom'
import MainLogo from '../Logo/MainLogo'

const Header = () => {
    const navigate = useNavigate()
    const {pathname} = useLocation() 
    const {token} = useSelector(state => state.authSlice)
    return (
        <>
            <header className='h-[72px] flex items-center justify-between'>
                <MainLogo/>
                <SearchBar />
                <div className=' flex items-center justify-end ml-[20px]'>
                    <div className='mr-[10px] min-w-[32px]'>
                            {token && <User/>}
                            {!token && <LoginSignupBTN/>}
                    </div>

                    <div className='ml-[8px] flex items-center'>
                        <button className={`button text-nowrap ${pathname.includes("chi-tiet") ? 'bg-white text-black' : 'bg-black text-white'}`} onClick={() => navigate('/phim-da-luu')} >Phim Đã Lưu</button>
                        <button className={`button bg-transparent border-[1px]  text-nowrap ml-[8px] ${pathname.includes("chi-tiet") ? 'text-white border-white' :'text-black border-black'}`} onClick={() => navigate('/lich-su')}>Lịch Sử</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header