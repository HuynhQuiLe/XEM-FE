import React from 'react'

import {useDispatch, useSelector} from 'react-redux';
import { setIsOpenedModalLogin, setIsOpenedModalSignup } from '../../../redux/modalSlice';
import Login from '../../Login/Login';
import Signup from '../../Signup/Signup';

const LoginSignupBTN = () => {
    const dispatch= useDispatch()
    const {isOpenedModalLogin, isOpenedModalSignup} = useSelector(state => state.modalSlice)
  return (
    <>
        <div className='flex items-center'>
            <p className=' text-nowrap font-semibold text-[14px] cursor-pointer'
                onClick={() => dispatch(setIsOpenedModalLogin())}
            >Đăng nhập</p>
            <p className='text-nowrap font-semibold text-[14px] ml-[20px] cursor-pointer'
                onClick={() => dispatch(setIsOpenedModalSignup())}
            >Đăng ký</p>
        </div>
        {isOpenedModalLogin && <Login/>}
        {isOpenedModalSignup && <Signup/>}
    </>
  )
}

export default LoginSignupBTN