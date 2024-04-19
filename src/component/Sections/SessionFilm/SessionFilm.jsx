import React from 'react'
import {useEffect, useState} from 'react';
import {sessionSer} from '../../../api/api';

const SessionFilm = ({film_id, url, setSelectedEpisode}) => {
    const [sessionByFilm, setSessionByFilm] =useState(null)
    useEffect(() => {
      if(film_id) {
        sessionSer.getSessionByFilm(film_id)
        .then(({data}) => {
          setSessionByFilm(data.content)
        })
      }
    },[film_id])
  
    const renderSessionByFilm = () => {
      return sessionByFilm.map((session, index) => {
        if(session.url === url) {
          return <p key={index} className='selected-session rounded-[4px] text-white font-thin py-[2px] px-[10px] btn-shadow text-shadow cursor-not-allowed'>{session.session_number}</p>
        } else {
          return <a href={`/chi-tiet/${session.url}`} onClick={() => setSelectedEpisode(false)} key={index} className='bg-bg_blue_dark rounded-[4px] text-white font-thin py-[2px] px-[10px] btn-shadow text-shadow'>{session.session_number}</a>
        }
      })
    }
  
    return (
      <section className='mt-[20px]'>
          <div className=' bg-bg_dark_theme px-[20px] py-[10px] flex gap-[10px] rounded-[4px]'>
            {sessionByFilm && renderSessionByFilm()}  
          </div>
      </section>
    )
  }
  
  export default SessionFilm