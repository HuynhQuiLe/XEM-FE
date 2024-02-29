import React from 'react'
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLogin, setUserLoginErr } from '../../../redux/authSlice';
import { validation } from '../../../utils/validation/validation';

const Email = () => {
    const dispatch = useDispatch()
    const {userLogin} = useSelector(state => state.authSlice)
    const {userLoginErr} = useSelector(state => state.authSlice)

    useEffect(() => {
        return () => {
            dispatch(setUserLogin({email: ''}))
            dispatch(setUserLoginErr({email: ''}))
        }
    },[])

    const handleChange = (e) => {
        dispatch(setUserLogin({email: e.target.value}))
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
        dispatch(setUserLoginErr({email: err}))
       
    }


    return (
        <div className='mb-[30px]'>
            <label className='block font-thin uppercase text-[12px] text-[#a7a7a7] mb-[8px]' htmlFor="email">Email</label>
            <input className='h-[48px] px-[16px] text-black font-light outline-none border-b-[1px] border-gray w-full' 
                    name='email' 
                    id="email" 
                    placeholder='Email' 
                    type="email" 
                    value={userLogin.email}
                    onChange={handleChange}
            />
            {userLoginErr.email && 
            <div className='pt-[10px]'>
                <p className=' text-error text-[12px] font-light'>{userLoginErr.email}</p>
            </div>}
        </div>
    )
}

export default Email