import React from 'react'
import Episode_FilmSelect from '../../Selects/FilmSelect/Episode_FilmSelect';
import SessionFilmSelect from '../../Selects/SessionFilmSelect/SessionFilmSelect';
import EpisodeNameInput from '../../Inputs/EpisodeNameInput/EpisodeNameInput';
import StatusFilmSelect from '../../Selects/StatusFilmSelect/StatusFilmSelect';
import VideoFilmInput from '../../Inputs/VideoFilmInput/VideoFilmInput';

const AddEpisodeForm = ({episode, changeEpisode, checked, setChecked, changeFolderName, error}) => {
  return (
    <div className='w-[60%] px-[30px] '>
        <div className='flex gap-[20px]'>
            <Episode_FilmSelect film_id ={episode.film_id} changeEpisode={changeEpisode} changeFolderName={changeFolderName}/>
        </div>

        <div className='flex gap-[20px] mt-[36px]'>
            <SessionFilmSelect session_id ={episode.session_id} film_id ={episode.film_id} changeEpisode={changeEpisode} changeFolderName={changeFolderName}/>
        </div>

        <div className='flex gap-[20px] mt-[36px]'>
            <EpisodeNameInput episode_name={episode.episode_name} changeEpisode={changeEpisode} error={error.episode_name}/>
        </div>

        <div className='flex gap-[20px] mt-[36px]'>
            <StatusFilmSelect status_id ={episode.status_id} changeEpisode={changeEpisode}/>
        </div>

        
        <VideoFilmInput video={episode.video} episode={episode} changeEpisode={changeEpisode}/>

        <div className='mt-[36px]'>
            <div className='pl-[25px] relative flex items-center mb-[30px] w-fit cursor-pointer'
                onClick={()=>{setChecked(!checked)}}                        
            >
                <div className='absolute w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#d3d3d3] top-[50%] -translate-y-[50%] left-0 '
                
                >
                    {checked && <div className='absolute w-[10px] h-[10px] rounded-[2px] bg-black top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] '></div>}
                </div>
                <p className=' font-light'>Gửi thông báo đến người dùng đang theo dõi phim.</p>
            </div>

        </div>

    </div>
  )
}

export default AddEpisodeForm