import React from 'react'
import LoginButtonNoUnderline from '../../Buttons/LinkButtons/NoUnderLineLinkButtons/LoginButtonNoUnderline';
import SignupButtonNoUnderline from '../../Buttons/LinkButtons/NoUnderLineLinkButtons/SignupButtonNoUnderline';
import LoginSignupModal from '../../Modals/LoginSignupModal/LoginSignupModal';

const LoginAndSignupNavigation = () => {
    
    return (
        <>
            <div className='flex items-center'>
                <LoginButtonNoUnderline />
                <SignupButtonNoUnderline/>
                
            </div>
            <LoginSignupModal />
        </>
    )
}

export default LoginAndSignupNavigation