import React from 'react'
import FilmDetailPoster from '../../Photos/Poster/FilmDetailPoster';
import FilmGeneralInformation from '../../Elements/FilmGeneralInformation/FilmGeneralInformation';

const FilmInformation = ({session}) => {
  return (
    <section className=' bg-bg_dark_theme w-full rounded-[4px]' id="info">
        <div className=' flex px-[20px] py-[30px] gap-[20px] w-full items-stretch justify-start'>
            <FilmDetailPoster poster = {session?.poster} /> 
            <FilmGeneralInformation 
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

export default FilmInformation