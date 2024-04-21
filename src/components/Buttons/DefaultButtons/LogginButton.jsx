import React from 'react'
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setErrAPI, setToken, setUserLoginErr} from '../../../redux/authSlice';
import {authSer} from '../../../api/api';
import {notificationLocalStorage, tokenLocalStorage} from '../../../api/localStorage';
import {closeModal} from '../../../redux/modalSlice';
import NormalLoadingCircle from '../../Icons/Loading/NormalLoadingCircle';

const LogginButton = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const {userLogin, userLoginErr} = useSelector(state => state.authSlice)

    const login = (e) => {
        e.preventDefault()
        // VADILATION
        //check lan dAU TIEN KHI CHUA NHAP DU LIEU
        if(!userLogin.email && !userLogin.pass_word) {
            dispatch(setUserLoginErr({
                email: 'Trường này không được để trống.', 
                pass_word: 'Trường này không được để trống.'
            }))
            return
        }
        if(!userLogin.email) {
            dispatch(setUserLoginErr({email: 'Trường này không được để trống.'}))
            return
        }
        if(!userLogin.pass_word) {
            dispatch(setUserLoginErr({pass_word: 'Trường này không được để trống.'}))
            return
        }
        if(userLoginErr.email || userLoginErr.pass_word) {
            return null
        }

        // OK
        authSer.login(userLogin)
        .then(({data}) => {
            dispatch(closeModal())

            dispatch(setToken(data.content))
            tokenLocalStorage.set(data.content)

            // notification
            notificationLocalStorage.set(data.message)

            // reload 
            window.location.reload()
        })
        .catch(error => {
            dispatch(setErrAPI((error.response.data.message)))
        })
    }
    return (
        <div className='relative mt-[10px] mb-[30px]'>
            <button className='w-full h-[72px] bg-black text-white rounded-[8px] text-[20px] font-light hover:bg-black_hover transition-all ease-in-out duration-300 cursor-pointer'
                onClick={login}
            >
                {loading ? <NormalLoadingCircle/> : "Đăng nhập ngay"}
            </button>
        </div>
    )
}

export default LogginButton