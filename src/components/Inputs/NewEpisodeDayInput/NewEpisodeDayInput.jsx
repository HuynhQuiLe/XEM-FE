import React from 'react'

const NewEpisodeDayInput = ({new_episode_day, changeSession}) => {
    return (
      <div className='flex-1'>
          <div>
              <label htmlFor="" className='label-text '>Phim được chiếu vào</label>
          </div>
          <div>
              <input type="text" spellCheck={false} name= 'new_episode_day' 
                  className='input-default'  placeholder='Thứ 2'
                  value={new_episode_day ? new_episode_day : ''}
                  onChange={(e) => changeSession(e.target.name, e.target.value)}
              />
          </div>
      </div>
    )
  }

export default NewEpisodeDayInput