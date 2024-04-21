import React from 'react'

const NewEpisodeTimeInput = ({new_episode_time, changeSession}) => {
    return (
      <div className='flex-1'>
          <div>
              <label htmlFor="" className='label-text '>giờ chiếu phim</label>
          </div>
          <div>
              <input type="text" spellCheck={false} name= 'new_episode_time' 
                  className='input-default'  placeholder='12h / Trưa'
                  value={new_episode_time ? new_episode_time : ''}
                  onChange={(e) => changeSession(e.target.name, e.target.value)}
              />
          </div>
      </div>
    )
  }

export default NewEpisodeTimeInput