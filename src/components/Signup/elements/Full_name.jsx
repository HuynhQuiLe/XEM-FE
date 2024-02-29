import React from 'react'
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setUserSignup, setUserSignupErr} from '../../../redux/authSlice';

const Full_name = () => {
  const dispatch = useDispatch()
  const {userSignup} = useSelector(state => state.authSlice)
  const {userSignupErr} = useSelector(state => state.authSlice)

  useEffect(() => {
      return () => {
          dispatch(setUserSignup({full_name: ''}))
          dispatch(setUserSignupErr({full_name: ''}))
      }
  },[])

  const handleChange = (e) => {
      dispatch(setUserSignup({full_name: e.target.value}))
      // VALIDATION
      let err = ''
      //check empty
      if(e.target.value.trim() === '') {
          err = 'Trường này không được để trống.'

      } else {
          err =  ''
      }
      dispatch(setUserSignupErr({full_name: err}))
     
  }

  return (
    <div className='mb-[30px]'>
    <label className='block font-thin uppercase text-[12px] text-[#a7a7a7] mb-[8px]' htmlFor="full_name">Họ Tên người dùng (*)</label>
    <input className='h-[48px] px-[16px] text-black font-light outline-none border-b-[1px] border-gray w-full ' 
            name='full_name' 
            id="full_name" 
            placeholder='Tên người dùng' 
            type="text" 
            value={userSignup.full_name}
            onChange= {handleChange}
            />
    {userSignupErr.full_name && 
        <div className='pt-[10px]'>
            <p className=' text-error text-[12px] font-light'>{userSignupErr.full_name}</p>
        </div>
    }
</div>
  )
}

export default Full_name