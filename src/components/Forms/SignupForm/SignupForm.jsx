import React from 'react'
import ErrorTextForLogginAndSignup from '../../Text/ErrorTextForLogginAndSignup/ErrorTextForLogginAndSignup';
import FullNameInput from '../../Inputs/FullNameInput/FullNameInput';
import EmailSignupInput from '../../Inputs/EmailSignupInput/EmailSignupInput';
import PasswordSignupInput from '../../Inputs/PasswordSignupInput/PasswordSignupInput';
import TermRadio from '../../Radios/TermRadio/TermRadio';
import CountinueSignupButton from '../../Buttons/DefaultButtons/CountinueSignupButton';
import SignupByOtherMethods from '../../Elements/SignupByOtherMethods/SignupByOtherMethods';

const SignupForm = () => {

    return (
      <div className='flex-1 p-[50px]'>
          <p className='text-[24px] mb-[36px] font-semibold'>Đăng ký với tài khoản email</p>
          <ErrorTextForLogginAndSignup />
          <form action="">
              <FullNameInput/>
              <EmailSignupInput/>
              <PasswordSignupInput/> 
              <TermRadio />
              <CountinueSignupButton/>
          </form>
          <SignupByOtherMethods/>
      </div>
    )
  }

export default SignupForm