import React from 'react'


const ShortFilmInformation = ({session_name, episode_name, session_number}) => {
    return (
      <div className='mt-[20px] text-[18px] '>
          <div className=' bg-bg_dark_theme px-[20px] py-[10px] flex gap-[10px] rounded-[4px]'>
          <p className='link-text'>{session_name}</p> {session_number} {episode_name.replace('tap-', 'Tập ')} Việt Sub | XEM.
          
          </div>
      </div>
    )
  }

export default ShortFilmInformation