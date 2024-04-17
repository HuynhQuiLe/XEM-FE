import React, { useState } from 'react'
import SaveBtn from './SaveBtn'

const ChangePassword = () => {
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
                <div className='flex-1'>
                    <div>
                        <label htmlFor="" className='label-text '>mật khẩu mới (*)</label>
                    </div>
                    <div>
                        <input type="password" autoComplete="false" value={pass_word} onChange={handleChangePassword} className='input-default' placeholder='Mật khẩu mới'/>
                    </div>
                    {errPass_word && 
                        <div className='pt-[10px]'>
                            <p className=' text-error text-[12px] font-light'>{errPass_word}</p>
                        </div>
                    }
                </div>
                <div className='flex-1'>
                    <div>
                        <label htmlFor="" className='label-text '>Nhập lại mật khẩu (*)</label>
                    </div>
                    <div>
                        <input type="password" autoComplete="false" value={rePass_word} onChange={handleReChangePassword}   className='input-default' placeholder='Nhập lại mật khẩu'/>
                    </div>
                    {errRePass_word && 
                        <div className='pt-[10px]'>
                            <p className=' text-error text-[12px] font-light'>{errRePass_word}</p>
                        </div>
                    }
                </div>
            </form>          
        </div>
       <SaveBtn pass_word={pass_word} setErrRePass_word= {setErrRePass_word} seterrPass_word={seterrPass_word} rePass_word={rePass_word} errPass_word={errPass_word} errRePass_word={errRePass_word}/>
    </div>
  )
}

export default ChangePassword