import React from 'react'

const EnterPasswordToAccessInput = ({pass_word, handleChange, err}) => {
  return (
    <>
        <div className=' w-full  h-[72px]  m-auto'>
            <input type="password"  className='w-full h-full px-[30px] border-[1px]  border-[rgb(233,233,233)] bg-white py-[20px] flex items-center justify-center rounded-[8px] focus:outline-black'
            value={pass_word}
            onChange={handleChange}
            placeholder='Mật khẩu' />
        </div>

        {err && 
            <div className='pt-[10px] mb-[30px]'>
                <p className=' text-error text-[12px] font-light'>{err}</p>
            </div>
        }
    </>
  )
}

export default EnterPasswordToAccessInput