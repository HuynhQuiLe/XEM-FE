import React from 'react'
import {setIsOpenedModalLogin} from '../../../../redux/modalSlice';
import {useDispatch} from 'react-redux';

const LoginButtonNoUnderline = () => {
    const dispatch= useDispatch()
  return (
    <p className=' text-nowrap font-semibold text-[14px] cursor-pointer'
        onClick={() => dispatch(setIsOpenedModalLogin())}
    >Đăng nhập</p>
  )
}

export default LoginButtonNoUnderline