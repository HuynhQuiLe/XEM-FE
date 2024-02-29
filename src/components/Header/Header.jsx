import React from 'react'
import User from './elements/User'
import {useSelector } from 'react-redux'
import LoginSignupBTN from './elements/LoginSignupBTN'
import SearchBar from './elements/SearchBar'
import { useNavigate } from 'react-router-dom'
import MainLogo from '../Logo/MainLogo'

const Header = () => {
    const navigate = useNavigate()
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
                        <button className='button bg-black text-white text-nowrap' onClick={() => navigate('/shopping')} >Shop Now</button>
                        <button className='button bg-transparent text-black border-[1px] border-black text-nowrap ml-[8px]' onClick={() => navigate('/them-review')}>Thêm Review</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header