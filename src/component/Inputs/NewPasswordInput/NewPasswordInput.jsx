import React from 'react'

const NewPasswordInput = ({pass_word, handleChangePassword, errPass_word}) => {
  return (
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
  )
}

export default NewPasswordInput