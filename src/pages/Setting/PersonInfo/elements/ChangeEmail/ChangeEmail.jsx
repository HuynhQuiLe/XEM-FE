import React, { useEffect } from 'react'
import {useState} from 'react';
import SaveBtn from './SaveBtn';
import { userSer } from '../../../../../api/api';
import { validation } from '../../../../../utils/validation/validation';
// import { validation } from '../../../../utils/validation/validation';

const ChangeEmail = () => {
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
            <div className='mb-[50px]'>
                <div>
                    <label htmlFor="" className='label-text '>E-MAIL hiện tại</label>
                </div>
                <div className='px-[16px] border-b-[1px] border-gray h-[48px] flex items-center justify-between'>
                    <p className=''>{currentEmail}</p>
                    <div className='text-[12px] flex items-center text-primary'>
                        <i className="fa fa-check-circle mr-1"></i>
                        <p>Đã xác thực</p>
                    </div>
                </div>
            </div>
            

            <div className='flex gap-[20px]'>
                <div className='flex-1'>
                    <div>
                        <label htmlFor="" className='label-text '> E-MAIL mới (*)</label>
                    </div>
                    <div>
                        <input type="text" value={email} onChange={handleChangeEmail}  className='input-default' placeholder='E-mail mới'/>
                    </div>

                    {errEmail && 
                        <div className='pt-[10px]'>
                            <p className=' text-error text-[12px] font-light'>{errEmail}</p>
                        </div>
                    }
                
                </div>
                <div className='flex-1'>
                    <div>
                        <label htmlFor="" className='label-text '>nhập lại E-MAIL (*)</label>
                    </div>
                    <div>
                        <input type="text" value={reEmail} onChange={handleChangeReEmail}  className='input-default' placeholder='Nhập lại e-mail'/>
                    </div>
                    {errReEmail && 
                        <div className='pt-[10px]'>
                            <p className=' text-error text-[12px] font-light'>{errReEmail}</p>
                        </div>
                    }
                </div>
            </div>          
        </div>
       <SaveBtn email={email} setErrReEmail= {setErrReEmail} setErrEmail={setErrEmail} reEmail={reEmail} errEmail={errEmail} errReEmail={errReEmail}/>
    </div>
  )
}

export default ChangeEmail