import React from 'react'
import Poster from './Poster'
import General from './General'

const Info = ({session}) => {
  return (
    <section className=' bg-bg_dark_theme w-full rounded-[4px]' id="info">
        <div className=' flex px-[20px] py-[30px] gap-[20px] w-full items-stretch justify-start'>
            <Poster poster = {session?.poster}/>
            <General 
              session_id={session?.session_id} 
              session_name={session?.session_name} 
              session_other_name ={session?.session_other_name}
              types ={session?.films.types}
              published_date ={session?.published_date}
              duration ={session?.duration}
            />
        </div>
    </section>
  )
}

export default Info