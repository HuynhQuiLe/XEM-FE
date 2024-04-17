import React from 'react'
import {setIsOpenedModalSignup} from '../../../redux/modalSlice';
import { useDispatch } from 'react-redux';
import SmallLogo from '../../Logo/SmallLogo';

const Left = () => {
    const dispatch = useDispatch()
    return (
        <div className='flex-1 p-[50px] bg-login_bg flex flex-col justify-between' >
            <p className='text-[24px] mb-[36px] font-light'>Xin chào!</p>
            <div className='flex items-center justify-center font-semibold'>
                <SmallLogo width={100}/>
                <div className='ml-[20px] w-[162px] h-[162px] rounded-full bg-[#222222] text-[100px] flex items-center justify-center'>
                    <p>👋</p>
                </div>
            </div>
            <p className='font-light flex'>Chưa có tài khoản? &nbsp; <span className='link-text font-semibold leading-7 block' onClick={()=> dispatch(setIsOpenedModalSignup())}>Đăng ký ngay</span></p>

        </div>
    )
}

export default Left