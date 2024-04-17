import React from 'react'
import {useState, useEffect} from 'react';
import { sessionSer } from '../../../api/api';

const SelectSession = ({film_id, session_id, changeEpisode }) => {
    const [showSession, setShowSession] = useState(false)
    const [sessions, setSessions] = useState(null)
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        if(film_id) {
            setDisabled(false)
            sessionSer.getSessionByFilm(film_id)
            .then(({data}) => {
                setSessions(data.content)
            })
        } else {
            setDisabled(true)
        }
        
    },[film_id])

    const renderSession = () => {
        return sessions?.map((session, index) => {
            return <p className={`px-[15px] py-[6px] ${session?.session_id === session_id ? 'bg-light_gray_2' : 'bg-white'} hover:bg-light_gray_2 transition-default cursor-pointer`} 
                        key={index} 
                        session_id={session?.session_id}
                        onClick={(e) => changeEpisode('session_id',Number(e.target.getAttribute('session_id')))}
                    >{session?.session_number}</p>
        })
    }

    return (
        <div className='flex-1'>
            <div>
                <label htmlFor="" className='label-text '>Chọn phần (*)</label>
            </div>
            <div>
                {!disabled && <div className='w-full bg-white h-[48px] flex items-center input-default relative cursor-pointer' onClick={()=>setShowSession(!showSession)}>
                    {sessions?.length && <p>{sessions?.find(session => session?.session_id === session_id) ? sessions?.find(session => session?.session_id === session_id).session_number : 'Vui lòng chọn phần phim'}</p>}
                    <div className=' absolute right-[16px]'>
                        {showSession ? <i className="fa fa-chevron-up text-sub_menu_index"></i> : <i className="fa fa-chevron-down text-sub_menu_index"></i>}    
                    </div>
                    {
                        showSession && <div className=' absolute z-10 w-full top-[48px] left-0 bg-white border-t-0 border-[1px] border-gray'>
                        <p className={`px-[15px] py-[6px] ${!session_id ? 'bg-light_gray_2' : 'bg-white'} hover:bg-light_gray_2 transition-default cursor-pointer`}>
                            Vui lòng chọn phần phim
                        </p>
                        {sessions?.length && renderSession()}
                    </div>
                    }
                </div>}

                {disabled && <div className='w-full bg-white h-[48px] flex items-center input-default relative cursor-not-allowed'>
                    <p>Vui lòng chọn phần phim</p>
                    <div className=' absolute right-[16px]'>
                        <i className="fa fa-chevron-down text-sub_menu_index"></i>
                    </div>
                </div>}
            </div>
            
        </div>
    )
}

export default SelectSession