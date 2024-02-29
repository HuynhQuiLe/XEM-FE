import React, { useEffect } from 'react'
import ChangePassword from './elements/ChangePassword/ChangePassword'
import ChangeEmail from './elements/ChangeEmail/ChangeEmail'
import DeleteAccount from './elements/DeleteAccount/DeleteAccount'
import EnterPasswordToAccess from '../../../components/EnterPasswordToAccess/EnterPasswordToAccess'
import {useSelector} from 'react-redux';

const PersonInfo = () => {
  const {isConfirm} = useSelector(state => state.authSlice)

  useEffect(() => {
    isConfirm ? document.querySelector('body').classList.remove('no-scroll') : document.querySelector('body').classList.add('no-scroll')
  },[isConfirm])
  return (
    <>
      <div className='relative'>
        <ChangePassword/>
        <div className='mt-[100px] mb-[50px] h-[1px] w-full bg-line'></div>
        <ChangeEmail/>
        <div className='mt-[100px] mb-[50px] h-[1px] w-full bg-line'></div>
        <DeleteAccount/>
      </div>
      <EnterPasswordToAccess/>
    </>
  )
}

export default PersonInfo