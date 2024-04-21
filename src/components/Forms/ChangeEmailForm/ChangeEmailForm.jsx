import React from 'react'
import {useEffect, useState} from 'react';
import {userSer} from '../../../api/api';
import {validation} from '../../../utils/validation/validation';
import SaveEmailButton from '../../Buttons/SaveEmailButton';
import NewEmailInput from '../../Inputs/NewEmailInput/NewEmailInput';
import RepeatEmailInput from '../../Inputs/RepeatEmailInput/RepeatEmailInput';
import CurrentEmail from '../../Elements/CurrentEmail/CurrentEmail';

const ChangeEmailForm = () => {
    const [currentEmail, setCurrentEmail] = useState('')
    const [email, setEmail] = useState('')
    const [reEmail, setReEmail] = useState('')
    const [errEmail, setErrEmail] = useState('')
    const [errReEmail, setErrReEmail] = useState('')

    useEffect(() => {
        userSer.getEmail()
        .then(({data}) => {
            setCurrentEmail(data.content.email)
        })
        .catch(error => {
            console.log(error)
        })
    },[])

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
        

        if(!e.target.value.trim()) {
            setErrEmail('Trường này không được để trống.')
            return 
        } else {
            setErrEmail('')
        }

        if(e.target.value === currentEmail) {
            setErrEmail('Email này bạn đang sử dụng.')
            return 
        } 


        if(!validation.email(e.target.value)) {
            setErrEmail('Email không đúng định dạng.')
        } else {
            setErrEmail('')
        }


        

        
    }

    const handleChangeReEmail = (e) => {
        setReEmail(e.target.value)
        if(e.target.value !== email) {
            setErrReEmail('Email nhập lại không đúng.')
        } else {
            setErrReEmail('')
        }
    }



  return (
    <div className='flex mt-[10px]'>
        <div className='w-[20%]'>
            <h6 className='text-[20px] font-semibold'>Đổi e-mail</h6>
        </div>
        <div className='w-[60%] px-[30px] '>
           <CurrentEmail currentEmail = {currentEmail} />

            <div className='flex gap-[20px]'>
                <NewEmailInput 
                    email = {email}
                    handleChangeEmail = {handleChangeEmail}
                    errEmail = {errEmail}
                />
                <RepeatEmailInput 
                    reEmail = {reEmail}
                    handleChangeReEmail = {handleChangeReEmail}
                    errReEmail = {errReEmail}
                />
            </div>          
        </div>
       <SaveEmailButton email={email} setErrReEmail= {setErrReEmail} setErrEmail={setErrEmail} reEmail={reEmail} errEmail={errEmail} errReEmail={errReEmail}/>
    </div>
  )
}

export default ChangeEmailForm