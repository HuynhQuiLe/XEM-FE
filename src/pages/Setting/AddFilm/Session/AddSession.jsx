import React, { useState } from 'react'
import URL from './URL'
import SessionName from './SessionName'
import Poster from './Poster'
import Duration from './Duration'
import PublishedDate from './PublishedDate'
import Description from './Description'
import SaveChange from './SaveChange'
import OtherSessionName from './OtherSessionName'
import SelectFilm from './SelectFilm'
import SessionNumber from './SessionNumber'
import NewEpisodePerWeek from './NewEpisodePerWeek'
import NewEpisodeAt from './NewEpisodeAt'
import NewEpisodeDay from './NewEpisodeDay'

const AddSession = () => {
    const [session, setSession] =useState({
        film_id: 0,
        url: '',
        session_number: '',
        session_name:'',
        session_other_name:'',
        published_date: '',
        duration: '',
        description:'',
        poster:null,
        episode_per_week: null,
        new_episode_time: null,
        new_episode_day: null,
    })


    const [error, setError] =useState({
        film_id: 0,
        url: '',
        session_number: '',
        session_name:'',
        session_other_name:'',
        published_date: '',
        duration: '',
        description:'',
        poster:'',
    })


    const changeSession =(key, value) => {
        setSession({...session, [key]: value})
        if(key !== 'poster' && key!=="film_id" && key!== 'episode_per_week' && key!== 'new_episode_time' && key!== 'new_episode_day') {
            if(!value.trim()){
                validation(key, 'Trường này là bắt buộc.')
            } else {
                validation(key, '')
            }
        }
    }

    const validation = (key, errMess) => {
        setError({...error, [key]: errMess})
    }
  return (
    <div className='relative'>
        <div className='flex mt-[10px] mb-[70px]'>
                <div className='w-[20%]'>
                    <h6 className='text-[20px] font-semibold'>Thêm phần phim</h6>
                    <p className='mt-[8px] mb-[16px] font-light text-[15px]'>Thêm các thông tin cơ bản về phim.</p>
                </div>
                <div className='w-[60%] px-[30px] '>
                    <div className='flex gap-[20px]'>
                        <SelectFilm film_id ={session.film_id} changeSession={changeSession}/>
                    </div>

                    <div className='flex gap-[20px] mt-[36px]'>
                        <URL url ={session.url} error={error.url} changeSession={changeSession}/>
                        <SessionNumber session_number ={session.session_number} error={error.session_number} changeSession={changeSession}/>
                    </div>

                    <div className='flex gap-[20px] mt-[36px]'>
                        <SessionName session_name ={session.session_name} error={error.session_name} changeSession={changeSession}/>
                        <OtherSessionName session_other_name ={session.session_other_name} error={error.session_other_name} changeSession={changeSession}/>
                    </div>

                    <div className='flex gap-[20px] mt-[36px]'>
                        <PublishedDate published_date ={session.published_date} error={error.published_date} changeSession={changeSession}/>
                        <Duration duration ={session.duration} error={error.duration} changeSession={changeSession}/>
                    </div>

                    <div className='flex gap-[20px] mt-[36px]'>
                        <NewEpisodePerWeek episode_per_week={session.episode_per_week}  changeSession={changeSession} />
                        <NewEpisodeAt new_episode_time={session.new_episode_time} changeSession={changeSession}/>
                        <NewEpisodeDay new_episode_day={session.new_episode_day} changeSession={changeSession}/>
                    </div>

                    <div className='flex gap-[20px] mt-[36px]'>
                        <Description description ={session.description} error={error.description} changeSession={changeSession}/>
                    </div>
                    <Poster session ={session} error={error.poster} changeSession={changeSession} validation={validation}/>
                </div>
                <SaveChange session={session} error={error} validation={validation}/>
        </div>
    </div>
  )
}

export default AddSession