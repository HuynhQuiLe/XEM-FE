import React, { useEffect, useState } from 'react'
import Cover from './Cover'
import Info from './Info'
import Session from './Session'
import Episode from './Episode'
import Comment from './Comment'
import { sessionSer } from '../../api/api'
import { useParams } from 'react-router-dom'
import Description from './Description'
import Film from './Film'
import Schedule from './Schedule'
import ShortInfo from './ShortInfo'
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
      {!selectedEpisode && <Cover cover={session?.films.cover} session_name={session?.session_name} />}
      {!selectedEpisode && <Info session= {session}/>}
      {selectedEpisode && <Film url ={url} episode_name={episode_name}/>}
      
      <Session film_id={session?.film_id} url ={url} setSelectedEpisode={setSelectedEpisode}/>
      <Episode session_id={session?.session_id} episode_name={episode_name} setSelectedEpisode={setSelectedEpisode} url={session?.url}/>
      {selectedEpisode && <ShortInfo session_number={session?.session_number} session_name={session?.session_name} episode_name={episode_name} />}
      <Schedule episode_per_week = {session?.episode_per_week} new_episode_time = {session?.new_episode_time} new_episode_day = {session?.new_episode_day}  status_id={session?.status_id} />
      <Description description={session?.description} session_name={session?.session_name} published_date={session?.published_date}/>
      <Comment session_id={session?.session_id}/>
    </div>
  )
}

export default Details