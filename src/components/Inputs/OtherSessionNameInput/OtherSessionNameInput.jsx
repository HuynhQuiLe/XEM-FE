import React from 'react'

const OtherSessionNameInput = ({session_other_name, changeSession, error}) => {
    return (
      <div className='flex-1'>
        <div>
            <label htmlFor="" className='label-text '>tên phần phim khác (*)</label>
        </div>
        <div>
            <input type="text" spellCheck={false} name= 'session_other_name' 
                  className='input-default'  placeholder='Tên phần phim tiếng anh '
                  value={session_other_name ? session_other_name : ''}
                  onChange={(e) => changeSession(e.target.name, e.target.value)}
            />
        </div>
        <div className='pt-[10px]'>
            {error && <span className=' text-error text-[12px] font-light ml-1'>{error}</span>}
        </div>
        
    </div>
    )
}

export default OtherSessionNameInput