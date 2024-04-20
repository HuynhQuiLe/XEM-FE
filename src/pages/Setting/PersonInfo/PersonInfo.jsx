import React, { useEffect } from 'react'
import {useSelector} from 'react-redux';
import ChangePasswordForm from '../../../component/Forms/ChangePasswordForm/ChangePasswordForm'
import ChangeEmailForm from '../../../component/Forms/ChangeEmailForm/ChangeEmailForm';
import DeleteAccount from '../../../component/Elements/DeleteAccount/DeleteAccount';
import EnterPasswordToAccess from '../../../component/Modals/EnterPasswordToAccess/EnterPasswordToAccess';

const PersonInfo = () => {
  const {isConfirm} = useSelector(state => state.authSlice)

  useEffect(() => {
    isConfirm ? document.querySelector('body').classList.remove('no-scroll') : document.querySelector('body').classList.add('no-scroll')
  },[isConfirm])
  return (
    <>
      <div className='relative'>
        <ChangePasswordForm />
        <div className='mt-[100px] mb-[50px] h-[1px] w-full bg-line'></div>
        <ChangeEmailForm />
        <div className='mt-[100px] mb-[50px] h-[1px] w-full bg-line'></div>
        <DeleteAccount/>
      </div>
      <EnterPasswordToAccess/>
    </>
  )
}

export default PersonInfo