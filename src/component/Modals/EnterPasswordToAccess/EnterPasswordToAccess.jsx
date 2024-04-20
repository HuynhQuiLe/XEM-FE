import React from 'react'
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import BlackOverlayBackground from '../../Photos/Background/BlackOverlayBackground';
import EnterPasswordToAccessForm from '../../Forms/EnterPasswordToAccessForm/EnterPasswordToAccessForm';

const EnterPasswordToAccess = () => {

    const {isConfirm} = useSelector(state => state.authSlice)


    const [pass_word, setPass_word] = useState('')
    const [err, setErr] = useState('')

    useEffect(() => {
        document.querySelector('body').classList.add('no-scroll')
        return () => {
            document.querySelector('body').classList.remove('no-scroll')
        }
    },[])

    const handleChange = (e) => {
        setPass_word(e.target.value)
        if(!e.target.value.trim()) {
            setErr('Trường này không được để trống.')
        } else {
            setErr('')
        }
    }

    if(isConfirm) {
        return null
    }

   

  return (
    <section className='fixed top-0 left-0 z-10 w-[100vw] min-h-[100vh] overflow-scroll flex items-center justify-center'>
    <BlackOverlayBackground/>
    <div className=' w-[80%] absolute top-[30px]  py-[30px]' >
        <div className='bg-white text-black rounded-[16px] overflow-hidden w-full h-full p-[50px] flex items-center justify-center '>
            <div className='h-full'>
                <div className='flex justify-center'>
                    <i className="fa fa-exclamation-triangle text-error text-[40px] mb-[10px]"></i>
                </div>
                <p className='text-[24px] mb-[50px] font-semibold text-center'>Vui lòng nhập mật khẩu để tiếp tục</p>

              <EnterPasswordToAccessForm 
                pass_word = {pass_word}
                handleChange = {handleChange}
                err={err} 
                setErr={setErr}
              
              /> 
                <p className='link-text m-auto mt-[50px]' onClick={() => history.back()}>Quay về</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default EnterPasswordToAccess