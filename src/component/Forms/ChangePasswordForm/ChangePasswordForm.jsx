import React from 'react'
import {useState} from 'react';
import SavePasswordButton from '../../Buttons/SavePasswordButton';
import NewPasswordInput from '../../Inputs/NewPasswordInput/NewPasswordInput';
import RepeatPasswordInput from '../../Inputs/RepeatPasswordInput/RepeatPasswordInput';

const ChangePasswordForm = () => {
    const [pass_word, setPass_word] = useState('')
    const [rePass_word, setRePass_word] = useState('')
    const [errPass_word, seterrPass_word] = useState('')
    const [errRePass_word, setErrRePass_word] = useState('')

    const handleChangePassword = (e) => {
        setPass_word(e.target.value)
        if(!e.target.value.trim()) {
            seterrPass_word('Trường này không được để trống.')
        } else {
            seterrPass_word('')
        }

        if(e.target.value.trim().length < 6) {
            seterrPass_word('Mật khẩu phải chứa ít nhất 6 ký tự.')
        } else {
            seterrPass_word('')
        }
    }

    const handleReChangePassword = (e) => {
        setRePass_word(e.target.value)
        if(e.target.value !== pass_word) {
            setErrRePass_word('Mật khẩu nhập lại không đúng.')
        } else {
            setErrRePass_word('')
        }
    }

  return (
    <div className='flex mt-[10px]'>
        <div className='w-[20%]'>
            <h6 className='text-[20px] font-semibold'>Đổi mật khẩu</h6>
        </div>
        <div className='w-[60%] px-[30px] '>
            <form className='flex gap-[20px]'>
                <NewPasswordInput 
                    pass_word = {pass_word} 
                    handleChangePassword = {handleChangePassword}
                    errPass_word = {errPass_word}
                />
                <RepeatPasswordInput 
                    rePass_word = {rePass_word}
                    handleReChangePassword = {handleReChangePassword}
                    errRePass_word = {errRePass_word}
                />
            </form>          
        </div>
       <SavePasswordButton pass_word={pass_word} setErrRePass_word= {setErrRePass_word} seterrPass_word={seterrPass_word} rePass_word={rePass_word} errPass_word={errPass_word} errRePass_word={errRePass_word}/>
    </div>
  )
}

export default ChangePasswordForm