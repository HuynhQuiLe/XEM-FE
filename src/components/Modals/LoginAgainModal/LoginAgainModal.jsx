import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {tokenLocalStorage} from '../../../api/localStorage';
import {setIsLoginAgain, setToken} from '../../../redux/authSlice';
import {setIsOpenedModalLogin} from '../../../redux/modalSlice';

const LoginAgainModal = () => {
    const dispatch = useDispatch()

    const {isLoginAgain} = useSelector(state => state.authSlice)
    useEffect(() => {
        isLoginAgain ? document.querySelector('body').classList.add('no-scroll') : document.querySelector('body').classList.remove('no-scroll')
        
    },[])

    const handleLoginAgain = () => {
        tokenLocalStorage.remove()
        dispatch(setToken(null))
        dispatch(setIsLoginAgain(false))
        dispatch(setIsOpenedModalLogin())
    }

   
    if(!isLoginAgain) {
        return null
    }



    return (
        <section className='fixed top-0 left-0 z-10 w-[100vw] min-h-[100vh] overflow-scroll flex items-center justify-center'>
            <div className='w-[100vw] h-[100vh] fixed top-0 left-0 bg-[rgba(0,0,0,0.7)]  overflow-hidden -z-10'></div>
            <div className=' w-[80%] absolute top-[30px] py-[30px]' >
                <div className='bg-white text-black rounded-[16px] overflow-hidden p-[50px]'>
                    <p className='text-[50px] font-bold text-error text-center mb-5'>Oops!</p>
                    <p className='text-[20px] text-center'>Hết phiên đăng nhập, mời đăng nhập lại.</p>
                    <div className='flex justify-center mt-6'>
                        <button className=' text-center button bg-black text-white text-nowrap  hover:bg-black_hover hover:text-white transition-all ease-in-out duration-300 ' onClick={handleLoginAgain}>Đăng nhập lại</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginAgainModal