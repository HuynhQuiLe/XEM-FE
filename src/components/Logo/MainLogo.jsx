import React from 'react'
import {useNavigate} from 'react-router-dom';

const MainLogo = () => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate('/')}>
            <img src="/img/reviewer.svg" className='w-[200px] h-auto cursor-pointer' alt="logo" />               
        </div>
    )
}

export default MainLogo