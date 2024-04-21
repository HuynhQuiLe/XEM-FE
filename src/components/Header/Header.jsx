import React from 'react'
import {useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';
import MainLogo from '../Logos/MainLogo';
import SearchBar from '../Elements/SearchBar/SearchBar'
import LoginAndSignupNavigation from '../Elements/LoginAndSignupNavigation/LoginAndSignupNavigation';
import HistoryButton from '../Buttons/DefaultButtons/HistoryButton';
import FollowingFilmButton from '../Buttons/DefaultButtons/FollowingFilmButton';
import UserLoggin from '../Elements/UserLoggin/UserLoggin';

const Header = () => {
    const {pathname} = useLocation() 
    const {token} = useSelector(state => state.authSlice)
    return (
        <>
            <header className='h-[72px] flex items-center justify-between'>
                <MainLogo/>
                <SearchBar />
                <div className=' flex items-center justify-end ml-[20px]'>
                    <div className='mr-[10px] min-w-[32px]'>
                            {token && <UserLoggin/>}
                            {!token && <LoginAndSignupNavigation/>}
                    </div>

                    <div className='ml-[8px] flex items-center'>
                        <HistoryButton pathname={pathname} />
                        <FollowingFilmButton pathname={pathname}/>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header