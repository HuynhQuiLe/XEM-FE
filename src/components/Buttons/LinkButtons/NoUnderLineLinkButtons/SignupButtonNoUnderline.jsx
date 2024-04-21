import React from 'react'
import {setIsOpenedModalSignup} from '../../../../redux/modalSlice';
import {useDispatch} from 'react-redux';

const SignupButtonNoUnderline = () => {
    const dispatch= useDispatch()
    return (
        <p className='text-nowrap font-semibold text-[14px] ml-[20px] cursor-pointer'
            onClick={() => dispatch(setIsOpenedModalSignup())}
        >Đăng ký</p>
    )
}

export default SignupButtonNoUnderline