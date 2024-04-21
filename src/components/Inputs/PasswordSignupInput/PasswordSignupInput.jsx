import React from 'react'
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setUserSignup, setUserSignupErr} from '../../../redux/authSlice';

const PasswordSignupInput = () => {
    const dispatch = useDispatch()
    const {userSignup} = useSelector(state => state.authSlice)
    const {userSignupErr} = useSelector(state => state.authSlice)
  

    useEffect(() => {
        return () => {
            dispatch(setUserSignup({pass_word: '', re_pass_word: ''}))
            dispatch(setUserSignupErr({pass_word: '', re_pass_word: ''}))
        }
    },[])
  
    const handleChange = (e) => {
        dispatch(setUserSignup({pass_word: e.target.value}))
        // VALIDATION
        let err = ''
        //check empty
        if(e.target.value.trim() === '') {
            err = 'Trường này không được để trống.'
  
        }else if(e.target.value.trim().length < 6) {
            err =  'Mật khẩu phải chứa ít nhất 6 ký tự.'

        } else {
            err =  ''
        }

        dispatch(setUserSignupErr({pass_word: err}))

        if(e.target.value !== userSignup.re_pass_word && userSignup.re_pass_word) {
            dispatch(setUserSignupErr({re_pass_word: 'Mật khẩu nhập lại không đúng.'}))
        } else {
            dispatch(setUserSignupErr({re_pass_word: ''}))
        }
       
    }

    const  handleChangeRe_pass_word = (e) => {
        dispatch(setUserSignup({re_pass_word: e.target.value}))
        e.target.value !== userSignup.pass_word 
        ? dispatch(setUserSignupErr({re_pass_word: 'Mật khẩu nhập lại không đúng.'})) 
        : dispatch(setUserSignupErr({re_pass_word: ''}))
    }

  return (
    <div className='flex justify-between gap-[20px]'>
        <div className=' flex-1 mb-[30px]'>
            <label className='block font-thin uppercase text-[12px] text-[#a7a7a7] mb-[8px]' htmlFor="pass_word">Mật khẩu (*)</label>
            <input className='h-[48px] px-[16px] text-black font-light outline-none border-b-[1px] border-gray w-full ' 
                name='pass_word' 
                id="pass_word" 
                placeholder='Mật khẩu' 
                type="password" 
                value={userSignup.pass_word}
                onChange= {handleChange}
                />
        {userSignupErr.pass_word && 
            <div className='pt-[10px]'>
                <p className=' text-error text-[12px] font-light'>{userSignupErr.pass_word}</p>
            </div>
        }
        </div>
        <div className='flex-1 mb-[30px]'>
            <label className='block font-thin uppercase text-[12px] text-[#a7a7a7] mb-[8px]' htmlFor="re_pass_word">Nhập lại mật khẩu (*)</label>
            <input className='h-[48px] px-[16px] text-black font-light outline-none border-b-[1px] border-gray w-full ' 
                name='re_pass_word' 
                id="re_pass_word" 
                placeholder='Nhập lại mật khẩu' 
                type="password" 
                value={userSignup.re_pass_word}
                onChange= {handleChangeRe_pass_word}
                />
            {userSignupErr.re_pass_word && 
                <div className='pt-[10px]'>
                    <p className=' text-error text-[12px] font-light'>{userSignupErr.re_pass_word}</p>
                </div>
            }
        </div>
    </div>
  )
}


export default PasswordSignupInput