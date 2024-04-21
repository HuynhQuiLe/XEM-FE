import React from 'react'
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setUserLogin, setUserLoginErr} from '../../../redux/authSlice';

const PasswordLogginInput = () => {
    const dispatch = useDispatch()
    const {userLogin} = useSelector(state => state.authSlice)
    const {userLoginErr} = useSelector(state => state.authSlice)

    useEffect(() => {
        return () => {
            dispatch(setUserLogin({pass_word: ''}))
            dispatch(setUserLoginErr({pass_word: ''}))
        }
    },[])

    const handleChange = (e) => {
        dispatch(setUserLogin({pass_word: e.target.value}))
        // VALIDATION
        let err = ''
        //check empty
        if(e.target.value.trim() === '') {
            err = 'Trường này không được để trống.'

        } else {
            err =  ''
        }
        dispatch(setUserLoginErr({pass_word: err}))
       
    }


    return (
        <div className='mb-[30px]'>
            <label className='block font-thin uppercase text-[12px] text-[#a7a7a7] mb-[8px]' htmlFor="pass_word">Mật khẩu</label>
            <input className='h-[48px] px-[16px] text-black font-light outline-none border-b-[1px] border-gray w-full ' 
                    name='pass_word' 
                    id="pass_word" 
                    placeholder='Mật khẩu' 
                    type="password" 
                    required
                    value={userLogin.pass_word}
                    onChange={handleChange} 
            />
            {userLoginErr.pass_word && 
            <div className='pt-[10px]'>
                <p className=' text-error text-[12px] font-light'>{userLoginErr.pass_word}</p>
            </div>}
        </div>
    )
}

export default PasswordLogginInput