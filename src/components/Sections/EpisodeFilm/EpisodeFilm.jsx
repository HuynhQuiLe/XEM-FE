import React from 'react'
import {useEffect, useState} from 'react';
import {episodeSer} from '../../../api/api';

const EpisodeFilm = ({session_id, setSelectedEpisode, url, episode_name}) => {
    const [episodes, setEpisodes] = useState('')

    useEffect(() => {
      if(session_id) {
        episodeSer.getEpisodeBySession(session_id)
        .then(({data}) => {
          setEpisodes(data.content)
        })
      } 
    },[session_id])
  
    const renderEpisode = () => {
      if(episodes.length > 0) {
        return episodes.map((episode,index) => {
  
          if(episode_name && episode.episode_name === episode_name.replace('tap-','').toUpperCase()) {
            return <p key={index} 
              className='w-[8.33%] px-[5px] mb-[10px] cursor-not-allowed'>
              <span className='text-center inline-block w-full bg-white text-black rounded-[4px]  font-normal py-[2px] px-[10px] btn-shadow text-shadow'>
                {episode.episode_name}
              </span>
            </p>
          }
  
          return <a key={index} 
            href= {`/chi-tiet/${url}/tap-${episode.episode_name.toLowerCase()}`}
            onClick={() => {
              setSelectedEpisode(true)
            }}
            className='w-[8.33%] px-[5px] mb-[10px] cursor-pointer group'>
            <span className='text-center inline-block w-full bg-bg_dark_theme rounded-[4px] text-white font-thin py-[2px] px-[10px] btn-shadow text-shadow group-hover:bg-white group-hover:text-black transition-default'>
              {episode.episode_name}
            </span>
          </a>
        })
      } else {
        return <p className='mb-[10px]'>Tập phim đang được cập nhật.</p>
      }
    }
  
    return (
      <div className='mt-[20px]'>
          <div className=' bg-bg_dark_theme px-[20px] py-[10px] rounded-[4px]'>
              <div className='bg-black px-[10px] pt-[10px] flex flex-wrap rounded-[4px]'>
                  {episodes && renderEpisode()}
              </div>
          </div>
      </div>
    )
  }
  
  export default EpisodeFilm