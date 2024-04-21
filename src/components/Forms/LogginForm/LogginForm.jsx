import React from 'react'
import EmailLogginInput from '../../Inputs/EmailLogginInput/EmailLogginInput';
import PasswordLogginInput from '../../Inputs/PasswordLogginInput/PasswordLogginInput';
import KeepMeLogginRadio from '../../Radios/KeepMeLogginRadio/KeepMeLogginRadio';
import LogginButton from '../../Buttons/DefaultButtons/LogginButton';
import ForgetPasswordButtonUnderline from '../../Buttons/LinkButtons/UnderlineLinkButtons/ForgetPasswordButtonUnderline';
import LogginByOtherMethods from '../../Elements/LogginByOtherMethods/LogginByOtherMethods';
import ErrorTextForLogginAndSignup from '../../Text/ErrorTextForLogginAndSignup/ErrorTextForLogginAndSignup';

const LogginForm = () => {
   
    return (
        <div className='flex-1 p-[50px]'>
            <p className='text-[24px] mb-[36px] font-semibold'>Đăng nhập</p>
            <ErrorTextForLogginAndSignup/>

            <form action="">
                <EmailLogginInput/>
                <PasswordLogginInput />
                <KeepMeLogginRadio />
                <LogginButton />
                <ForgetPasswordButtonUnderline/>
            </form>
            <LogginByOtherMethods/>
        </div>
    )
}

export default LogginForm