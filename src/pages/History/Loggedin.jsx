import React, { useEffect, useState } from 'react'
import {tokenLocalStorage} from '../../api/localStorage';
import { historySer } from '../../api/api';
import { converTime, convertTime } from '../../utils/convert/converTime';
import LatestEpisode from '../../components/LatestEpisode/LatestEpisode';
import FollowBtn from '../../components/FollowBtn/FollowBtn';
import { useNavigate } from 'react-router-dom';

const Loggedin = () => {
  const navigate = useNavigate()
  const [historyList, setHistoryList]  = useState(null)

  useEffect(() => {
    historySer.getHistoryList()
    .then(({data}) => {
      data.content.length ? setHistoryList(data.content) : setHistoryList(null)
    })
  },[])

  const renderThead = () => {
    if(historyList) {
      return (
        <tr className='w-full'>
          <th className='text-start p-[28px] font-normal dot-line-buttom'>Tên phim</th>
          <th className='text-start p-[28px] font-normal dot-line-buttom'>Tập đã xem</th>
          <th className='text-start p-[28px] font-normal dot-line-buttom'>Thời gian xem cuối</th>
          <th className='text-start p-[28px] font-normal dot-line-buttom'>Tập mới nhất</th>
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

  const renderHistory = () => {
    if(historyList) {
      return historyList?.map((history, index) => {
        return (
          <tr className='text-[18px] hover:bg-light_gray_2 transition-default' key={index} >
            <td className='text-start pl-[28px] dot-line-buttom '>
              <img src={history.sessions.poster} className='w-[60px] h-[90px] object-cover mr-3 inline-block rounded-[2px]' alt="poster" />
              <div className='py-[28px] inline-block'>
                <p className=' link-text' onClick={() => navigate(`/chi-tiet/${history.sessions.url}/tap-${history.episodes.episode_name.toLowerCase()}`)}>{history.sessions.session_name}</p>
              </div>
            </td>
            <td className='text-start p-[28px] dot-line-buttom '>Tập {history.episodes.episode_name}</td>
            <td className='text-start p-[28px] dot-line-buttom '>{convertTime(history.last_view)}</td>
            <td className='text-start p-[28px] dot-line-buttom '><LatestEpisode session_id={history.session_id} getTextOnly={true} /></td>
            <td className='text-right p-[28px] dot-line-buttom'>
              <FollowBtn session_id={history.session_id}/>
            </td>
          </tr>
        )
      })
    } else {
      return (
        <tr>
          <td className=' p-[28px] dot-line-buttom text-center font-semibold text-[24px] bg-light_gray_2'>
            <i className="fa fa-info-circle text-[40px] mb-[16px]"></i>
            <p>Danh sách lịch sử xem phim trống.</p>
          </td>
        </tr>
      )
    }
  }


  return (
    <div className='pt-[55px]'>
      <div>
        <div className='flex items-start justify-between'>
            <h2 className='flex-1 leading-[120%] text-[45px] font-semibold'>Lịch sử</h2>
            <div className='flex-1 '>
              <p className='font-light text-[16px] leading-[200%]'>Nhấn nút <b className=' font-semibold'>Follow</b> để nhận thông báo <b className=' font-semibold'>sớm nhất </b>khi phim yêu thích của bạn được cập nhật - đừng bỏ lỡ những <b className=' font-semibold'>phút giây thư giãn</b> này nhé.</p>
            </div> 
        </div>

        <div className='mt-[80px] w-full'>
              <table className='w-full border-separate border-spacing-0' >
                <thead>
                 {renderThead()}
                </thead>

                <tbody>
                  {renderHistory()}
                </tbody>
              </table>
        </div>
      </div>
    </div>
  )
}

export default Loggedin