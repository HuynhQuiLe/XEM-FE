import React from 'react'

const RepeatEmailInput = ({reEmail, handleChangeReEmail, errReEmail}) => {
  return (
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
  )
}

export default RepeatEmailInput