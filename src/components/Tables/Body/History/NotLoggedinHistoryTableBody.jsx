import React from 'react'
import {convertTime} from '../../../../utils/convert/converTime';
import LatestEpisode from '../../../Vendors/LatestEpisode/LatestEpisode';
import FollowButton from '../../../Buttons/FollowButton';
import { useNavigate } from 'react-router-dom';

const NotLoggedinHistoryTableBody = ({index, history}) => {
    const navigate = useNavigate()
  return (
    <tr className='text-[18px] hover:bg-light_gray_2 transition-default' key={index} >
        <td className='text-start pl-[28px] dot-line-buttom '>
            <img src={history.poster} className='w-[60px] h-[90px] object-cover mr-3 inline-block rounded-[2px]' alt="poster" />
            <div className='py-[28px] inline-block'>
            <p className=' link-text' onClick={() => navigate(`/chi-tiet/${history.url}/tap-${history.episode_name.toLowerCase()}`)}>{history.session_name}</p>
            </div>
        </td>
        <td className='text-start p-[28px] dot-line-buttom '>Tập {history.episode_name}</td>
        <td className='text-start p-[28px] dot-line-buttom '>{convertTime(history.last_view)}</td>
        <td className='text-start p-[28px] dot-line-buttom '><LatestEpisode session_id={history.session_id} getTextOnly={true} /></td>
        <td className='text-right p-[28px] dot-line-buttom'>
            <FollowButton session_id={history.session_id}/>
        </td>
    </tr>
  )
}

export default NotLoggedinHistoryTableBody