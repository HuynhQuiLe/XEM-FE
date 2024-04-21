import React from 'react'

const SessionNameInput = ({session_name, changeSession, error}) => {
    return (
      <div className='flex-1'>
          <div>
              <label htmlFor="" className='label-text '>tên Phần phim (*)</label>
          </div>
          <div>
              <input type="text" spellCheck={false}  name='session_name'
                      value={session_name ? session_name : ''}  className='input-default'  
                      placeholder='Tên phần phim '
                      onChange={(e) => changeSession(e.target.name, e.target.value)}
              />
          </div>
          <div className='pt-[10px]'>
              {error && <span className=' text-error text-[12px] font-light ml-1'>{error}</span>}
          </div>
          
      </div>
    )
  }
export default SessionNameInput