import React, { useEffect, useState } from 'react'
import {sessionSer} from '../../api/api';
import { useParams } from 'react-router-dom'
import FilmMasterCover from '../../component/Sections/FilmMasterCover/FilmMasterCover'
import FilmInformation from '../../component/Sections/FilmInformation/FilmInformation'
import FilmVideo from '../../component/Videos/FilmVideo';
import SessionFilm from '../../component/Sections/SessionFilm/SessionFilm';
import EpisodeFilm from '../../component/Sections/EpisodeFilm/EpisodeFilm';
import ScheduleFilm from '../../component/Sections/ScheduleFilm/ScheduleFilm';
import ContentFilm from '../../component/Sections/ContentFilm/ContentFilm';
import Comment from '../../component/Sections/Comment/Comment';
import ShortFilmInformation from '../../component/ShortFilmInformation/ShortFilmInformation';
const Details = () => {
  const {url, episode_name} =useParams()

  const [selectedEpisode, setSelectedEpisode] = useState(episode_name ? true : false)


  const [session, setSesssion] = useState(null)

  useEffect(()=>{
    sessionSer.getDetails(url)
    .then(({data}) => {
      setSesssion(data.content)
    })
    .catch(error => {
      console.log(error)
    })

    document.querySelector('body').classList.add('dark-theme')
    return () => {
        document.querySelector('body').classList.remove('dark-theme')
    }
  },[])

 
  return (
    <div>
      {!selectedEpisode && <FilmMasterCover cover={session?.films.cover} session_name={session?.session_name} />}
      {!selectedEpisode && <FilmInformation session= {session}/>}
      {selectedEpisode && <FilmVideo episode_name={episode_name} url={url}/>}
      
      <SessionFilm film_id={session?.film_id} url ={url} setSelectedEpisode={setSelectedEpisode}/> 
      <EpisodeFilm session_id={session?.session_id} episode_name={episode_name} setSelectedEpisode={setSelectedEpisode} url={session?.url}/>
      {selectedEpisode && <ShortFilmInformation session_number={session?.session_number} session_name={session?.session_name} episode_name={episode_name} />}
      <ScheduleFilm episode_per_week = {session?.episode_per_week} new_episode_time = {session?.new_episode_time} new_episode_day = {session?.new_episode_day}  status_id={session?.status_id} />
      <ContentFilm description={session?.description} session_name={session?.session_name} published_date={session?.published_date}/>
      <Comment session_id={session?.session_id}/>
    </div>
  )
}

export default Details