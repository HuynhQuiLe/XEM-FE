import React from 'react'
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setUserSignup, setUserSignupErr} from '../../../redux/authSlice';
import {validation} from '../../../utils/validation/validation';

const EmailSignupInput = () => {
    const dispatch = useDispatch()

    const [isFocus, setIsFocus] = useState(false)
    const {userSignup} = useSelector(state => state.authSlice)
    const {userSignupErr} = useSelector(state => state.authSlice)
  
    useEffect(() => {
        return () => {
            dispatch(setUserSignup({email: ''}))
            dispatch(setUserSignupErr({email: ''}))
        }
    },[])
  
    const handleChange = (e) => {
        dispatch(setUserSignup({email: e.target.value}))
        // VALIDATION
        let err = ''
        //check email format
        const passed = validation.email(e.target.value)
        if(e.target.value.trim() === '') {
            err = 'Trường này không được để trống.'

        } else if(!passed) {
            err =  'Email không đúng định dạng.'

        } else {
            err =  ''
        }
        dispatch(setUserSignupErr({email: err}))
       
    }
  return (
    <div className='mb-[30px]'>
        <label className='block font-thin uppercase text-[12px] text-[#a7a7a7] mb-[8px]' htmlFor="email">Email (*)</label>
        <input className='h-[48px] px-[16px] text-black font-light outline-none border-b-[1px] border-gray w-full ' 
                name='email' 
                id="email" 
                placeholder='Email' 
                type="email" 
                value={userSignup.email}
                onChange= {handleChange}
                onFocus={() => setIsFocus(true)}
                />

        {!isFocus && <div className='pt-[10px]'>
            <p className=' text-sub_menu_index text-[12px] font-light'>Email sẽ được dùng để xác minh tài khoản.</p>
        </div>}
        {userSignupErr.email && 
            <div className='pt-[10px]'>
                <p className=' text-error text-[12px] font-light'>{userSignupErr.email }</p>
            </div>
        }
    </div>
  )
}

export default EmailSignupInput