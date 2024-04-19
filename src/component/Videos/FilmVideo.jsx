import React from 'react'
import {useState, useEffect} from 'react';
import {history} from '../../utils/history/history';
import {episodeSer, viewSer} from '../../api/api';

const FilmVideo = ({url, episode_name}) => {
  const [episode, setEpisode] = useState(null)


    useEffect(() => {
        //get video
        episodeSer.getEpisodeByUrlAndEpisodeName(url, episode_name)
        .then(({data}) => {
            setEpisode(data.content)
        })
    
        // tang view
        viewSer.increaseTotalView(url)
      },[episode_name])
    


    const [isPlay, setIsPlay] = useState(false)

    const handlePlay = () => {
        setIsPlay(!isPlay)
        isPlay ? document.querySelector('video').pause() :  document.querySelector('video').play() 
    }

  return (
    <div className='group w-full h-[80vh] mb-[50px] relative'>
        {episode?.video && <video className='w-full h-full object-contain' alt="preview video" 
                    onPause={() => setIsPlay(false)} 
                    onPlay={() => {
                        setIsPlay(true)
                        // ADD HISTORY
                        history.add(episode.session_id, episode.episode_id)
                    }}  
                controls >
            <source src={episode?.video} type="video/mp4"/>
            Your browser does not support HTML5 video.
        </video>}
            
        {episode && <p className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-3 cursor-pointer' onClick={handlePlay}><i className={` ${isPlay ? 'fa fa-pause' : 'fa fa-play'} group-hover:opacity-100 text-[50px] opacity-0`}></i></p>}
    </div>
  )
}


export default FilmVideo