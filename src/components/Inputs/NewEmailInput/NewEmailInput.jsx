import React from 'react'

const NewEmailInput = ({email, handleChangeEmail, errEmail}) => {
  return (
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
  )
}

export default NewEmailInput