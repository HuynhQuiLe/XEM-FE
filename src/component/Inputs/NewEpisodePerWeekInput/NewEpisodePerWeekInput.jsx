import React from 'react'

const NewEpisodePerWeekInput = ({episode_per_week, changeSession}) => {
    return (
      <div className='flex-1'>
          <div>
              <label htmlFor="" className='label-text '>số tập phim mỗi tuần</label>
          </div>
          <div>
              <input type="number" min={1} spellCheck={false} name= 'episode_per_week' 
                  className='input-default'  placeholder='2'
                  value={episode_per_week ? episode_per_week : ''}
                  onChange={(e) => changeSession(e.target.name, Number(e.target.value))}
              />
          </div>
      </div>
    )
  }

export default NewEpisodePerWeekInput