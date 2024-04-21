import React from 'react'

const EpisodeNameInput = ({episode_name, changeEpisode, error}) => {
  return (
    <div className='flex-1'>
        <div>
            <label htmlFor="" className='label-text '>tập phim (*)</label>
        </div>
        <div>
            <input type="text" spellCheck={false} 
            name='episode_name'  className='input-default'  
            placeholder='27 hoặc 27-END' value={episode_name ? episode_name : ''} 
            onChange={(e) => changeEpisode(e.target.name, e.target.value)}
            />
        </div>
        <div className='pt-[10px]'>
            {error && <span className=' text-error text-[12px] font-light ml-1'>{error}</span>}   
        </div>
        
    </div>
  )
}

export default EpisodeNameInput