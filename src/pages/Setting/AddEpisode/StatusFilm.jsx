import React from 'react'
import {useState, useEffect} from 'react';
import { statusFilmSer } from '../../../api/api';

const StatusFilm = ({status_id, changeEpisode}) => {
    const [showStatus, setShowStatus] = useState(false)
    const [statuses, setstatuses] = useState(null)

    useEffect(() => {
        statusFilmSer.getStatusFilmList()
        .then(({data}) => {
            setstatuses(data.content)
        })
    },[])

    const renderStatus = () => {
        return statuses?.map((status, index) => {
            return <p className={`px-[15px] py-[6px] ${status?.status_id === status_id ? 'bg-light_gray_2' : 'bg-white'} hover:bg-light_gray_2 transition-default cursor-pointer`} 
                        key={index} 
                        status_id={status?.status_id}
                        onClick={(e) => changeEpisode('status_id',Number(e.target.getAttribute('status_id')))}
                    >{status?.status_text}</p>
        })
    }

  return (
    <div className='flex-1'>
            <div>
                <label htmlFor="" className='label-text '>Trạng thái phim (*)</label>
            </div>
            <div>
                <div className='w-full bg-white h-[48px] flex items-center input-default relative cursor-pointer' onClick={()=>setShowStatus(!showStatus)}>
                    {statuses?.length && <p>{statuses?.find(status => status?.status_id === status_id) && statuses?.find(status => status?.status_id === status_id).status_text }</p>}
                    <div className=' absolute right-[16px]'>
                        {showStatus ? <i className="fa fa-chevron-up text-sub_menu_index"></i> : <i className="fa fa-chevron-down text-sub_menu_index"></i>}    
                    </div>
                    {
                        showStatus && <div className=' absolute z-10 w-full top-[48px] left-0 bg-white border-t-0 border-[1px] border-gray'>
                        
                        {statuses?.length && renderStatus()}
                    </div>
                    }
                </div>
            </div>
            
        </div>
  )
}

export default StatusFilm