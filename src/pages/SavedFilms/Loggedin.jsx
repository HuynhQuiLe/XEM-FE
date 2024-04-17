import React, { useEffect, useState } from 'react'
import LatestEpisode from '../../components/LatestEpisode/LatestEpisode';
import FollowBtn from '../../components/FollowBtn/FollowBtn';
import { followFilmSer } from '../../api/api';
import { useNavigate } from 'react-router-dom';

const Loggedin = () => {
    const navigate = useNavigate()
    const[followList, setFollowList] = useState(null)

    const[again, setAgain] =useState(null)

    useEffect(() => {
        followFilmSer.getFollowListByUser()
        .then(({data}) => {
            data.content.length ? setFollowList(data.content) : setFollowList(null)
        })
    }, [again])

    const renderThead = () => {
        if(followList) {
            return (
                <tr className='w-full'>
                    <th className='text-start p-[28px] font-normal dot-line-buttom'>Tên phim</th>
                    <th className='text-start p-[28px] font-normal dot-line-buttom'>Tập mới nhất</th>
                    <th className='text-start p-[28px] font-normal dot-line-buttom'>Tập tiếp theo</th>
                    <th className='text-start p-[28px] font-normal dot-line-buttom'>Trạng thái phim</th>
                    <th className='text-start p-[28px] font-normal dot-line-buttom'></th>
                </tr>
            )
        } else {
            return (
                <tr className='w-full'>
                    <th className='text-start p-[28px] font-normal dot-line-buttom'></th>
                </tr>
            )
        }
    }

    const renderNextEpisodeTime = (time, day, status) => {
      if(status === 'Hết') {
        return <p>Đã chiếu tập cuối</p>
      } else {
        return <p>{time} - {day}</p>

      }
    }


    const renderFollow = () => {
        if(followList) {
          return followList?.map((follow, index) => {
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
                  <FollowBtn session_id={follow.session_id} setAgain={setAgain} again={again}/>
                </td>
              </tr>
            )
          })
        } else {
          return (
            <tr>
              <td className=' p-[28px] dot-line-buttom text-center font-semibold text-[24px] bg-light_gray_2'>
                <i className="fa fa-info-circle text-[40px] mb-[16px]"></i>
                <p>Danh sách phim đang theo dõi trống.</p>
              </td>
            </tr>
          )
        }
      }

    return (
        <div className='pt-[55px]'>
            <div>
            <div className='flex items-start justify-between'>
                <h2 className='flex-1 leading-[120%] text-[45px] font-semibold'>Phim theo dõi</h2>
                <div className='flex-1'>
                    <p className='font-light text-[16px] leading-[200%]'>Bằng việc <b className='font-semibold'>Follow</b> phim, bạn đã đồng ý nhận <b className='font-semibold'>thông báo sớm nhất</b> ngay khi phim được cập nhật tập mới.</p>
                </div> 
            </div>
        
            <div className='mt-[80px] w-full'>
                    <table className='w-full border-separate border-spacing-0' >
                    <thead>
                        {renderThead()}
                    </thead>
                    <tbody>
                       {renderFollow()}
                    </tbody>
                    </table>
            </div>
            </div>
        </div>
    )
}

export default Loggedin