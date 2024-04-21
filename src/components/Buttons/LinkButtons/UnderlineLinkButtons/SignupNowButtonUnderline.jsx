import React from 'react'
import {setIsOpenedModalLogin} from '../../../../redux/modalSlice.js';
import { useDispatch } from 'react-redux';

const SignupNowButtonUnderline = () => {
    const dispatch = useDispatch()
  return (
    <p className='font-light flex'>Bạn đã có tài khoản?&nbsp; <span className='link-text font-semibold leading-7 block' onClick={() => dispatch( setIsOpenedModalLogin() )}>Đăng nhập ngay</span></p>
  )
}

export default SignupNowButtonUnderline