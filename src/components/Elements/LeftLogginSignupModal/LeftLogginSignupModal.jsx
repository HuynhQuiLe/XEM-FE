import React from 'react'
import LogginNowButtonUnderline from '../../Buttons/LinkButtons/UnderlineLinkButtons/LogginNowButtonUnderline';
import SignupNowButtonUnderline from '../../Buttons/LinkButtons/UnderlineLinkButtons/SignupNowButtonUnderline';
import SmallLogo from '../../Logos/SmallLogo';

const LeftLogginSignupModal = ({isLoginForm, isSignupForm}) => {
    return (
        <div className='flex-1 p-[50px] bg-login_bg flex flex-col justify-between' >
            <p className='text-[24px] mb-[36px] font-light'>Xin chào!</p>
            <div className='flex items-center justify-center font-semibold'>
                <SmallLogo width={100}/>
                <div className='ml-[20px] w-[162px] h-[162px] rounded-full bg-[#222222] text-[100px] flex items-center justify-center'>
                    <p>👋</p>
                </div>
            </div>
            { isLoginForm  ? <LogginNowButtonUnderline/> : null}
            { isSignupForm  ? <SignupNowButtonUnderline/> : null}
        </div>
    )
}



export default LeftLogginSignupModal