import React from 'react'
import {useEffect, useState} from 'react';
import {episodeSer} from '../../../api/api';

const LatestEpisode = ({session_id, getTextOnly}) => {
    const [latest, setLatest] = useState(null)
    useEffect(() => {
        if(session_id) {
            episodeSer.getLatestEpisode(session_id)
            .then(({data}) => {
                setLatest(data.content.episode_name)
            })
            .catch(error => {
                setLatest(error?.response?.data.content)
            })
        }
    },[session_id])
  return (
    <div>
        {!getTextOnly &&<p className='capitalize h-[22px] px-[10px] leading-[22px] text-black text-center bg-yellow_lemon rounded-[4px] text-[12px] font-semibold'> {latest ? `TẬP ${latest}` :'SOON'}</p>}
        {getTextOnly && <p>Tập {latest}</p>}
    </div>
  )
}

export default LatestEpisode