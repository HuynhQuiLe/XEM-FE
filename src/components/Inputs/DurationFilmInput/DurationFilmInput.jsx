import React from 'react'

const DurationFilmInput = ({duration, changeSession, error}) => {
    return (
      <div className='flex-1'>
          <div>
              <label htmlFor="" className='label-text '>thời lượng phim (*)</label>
          </div>
          <div>
              <input type="text" spellCheck={false}  className='input-default' name='duration'
                      placeholder='124 tập ' value={duration ? duration : ''}
                      onChange={(e) => changeSession(e.target.name, e.target.value)}
              />
          </div>
          <div className='pt-[10px]'>
              {error && <span className=' text-error text-[12px] font-light ml-1'>{error}</span>}
          </div>
          
      </div>
    )
  }

export default DurationFilmInput