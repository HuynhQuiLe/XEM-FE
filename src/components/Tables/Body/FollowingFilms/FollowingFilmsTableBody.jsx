import React from 'react'
import LatestEpisode from '../../../Vendors/LatestEpisode/LatestEpisode';
import FollowButton from '../../../Buttons/FollowButton';
import {useNavigate} from 'react-router-dom';

const FollowingFilmsTableBody = ({index, follow, setAgain, again}) => {
    const navigate = useNavigate()


    const renderNextEpisodeTime = (time, day, status) => {
        if(status === 'Hết') {
          return <p>Đã chiếu tập cuối</p>
        } else {
          return <p>{time} - {day}</p>
  
        }
      }

  return (
    <tr className='text-[18px] hover:bg-light_gray_2 transition-default cursor-pointer relative z-0' key={index} >
        <td className='text-start pl-[28px] dot-line-buttom '>
            <img src={follow.sessions.poster} className='w-[60px] h-[90px] object-cover mr-3 inline-block rounded-[2px]' alt="poster" />
            <div className='py-[28px] inline-block'>
            <p className=' link-text '  onClick={() => navigate(`/chi-tiet/${follow.sessions.url}`)} >{follow.sessions.session_name}</p>
            </div>
        </td>
        <td className='text-start p-[28px] dot-line-buttom '><LatestEpisode session_id={follow.session_id} getTextOnly={true} /></td>
        <td className='text-start p-[28px] dot-line-buttom '>{renderNextEpisodeTime(follow.sessions.new_episode_time,follow.sessions.new_episode_day,follow.sessions.status_film.status_text)}</td>
        <td className='text-start p-[28px] dot-line-buttom '>{follow.sessions.status_film.status_text}</td>
        <td className='text-right p-[28px] dot-line-buttom'>
            <FollowButton session_id={follow.session_id} setAgain={setAgain} again={again}/>
        </td>
    </tr>
  )
}

export default FollowingFilmsTableBody