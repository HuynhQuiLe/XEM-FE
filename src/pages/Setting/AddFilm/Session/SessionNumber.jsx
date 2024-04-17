import React from 'react'

const SessionNumber = ({session_number, error, changeSession}) => {
  return (
    <div className='flex-1'>
        <div>
            <label htmlFor="" className='label-text '>số Phần phim (*)</label>
        </div>
        <div>
            <input type="text" name="session_number" spellCheck={false}  
                  className='input-default'  placeholder='Phần 5'
                  value={session_number ? session_number : ''}
                  onChange={(e) => changeSession(e.target.name, e.target.value)}
            />
        </div>
        <div className='pt-[10px]'>
          {error && <span className=' text-error text-[12px] font-light ml-1'>{error}</span>}
        </div>
        
    </div>
  )
}

export default SessionNumber