import React from 'react'

const RepeatPasswordInput = ({rePass_word, handleReChangePassword, errRePass_word}) => {
  return (
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
  )
}

export default RepeatPasswordInput