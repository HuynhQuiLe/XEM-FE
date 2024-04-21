import React from 'react'
import {setIsOpenedModalSignup} from '../../../../redux/modalSlice';
import { useDispatch } from 'react-redux';

const LogginNowButtonUnderline = () => {
    const dispatch = useDispatch()
  return (
    <p className='font-light flex'>Chưa có tài khoản? &nbsp; <span className='link-text font-semibold leading-7 block' onClick={()=> dispatch(setIsOpenedModalSignup())}>Đăng ký ngay</span></p>
  )
}

export default LogginNowButtonUnderline