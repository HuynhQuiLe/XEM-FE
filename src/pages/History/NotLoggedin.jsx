import React, { useEffect, useState } from 'react'
import {historyLocalStorage, } from '../../api/localStorage';
import { converTime, convertTime } from '../../utils/convert/converTime';
import LatestEpisode from '../../components/LatestEpisode/LatestEpisode';
import FollowBtn from '../../components/FollowBtn/FollowBtn';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {setIsOpenedModalLogin} from '../../redux/modalSlice';

const NotLoggedin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [historyList, setHistoryList]  = useState(null)

    useEffect(() => {
        const historyLocal = historyLocalStorage.get() ? historyLocalStorage.get() : null
        setHistoryList(historyLocal)
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
              <img src={history.poster} className='w-[60px] h-[90px] object-cover mr-3 inline-block rounded-[2px]' alt="poster" />
              <div className='py-[28px] inline-block'>
                <p className=' link-text' onClick={() => navigate(`/chi-tiet/${history.url}/tap-${history.episode_name.toLowerCase()}`)}>{history.session_name}</p>
              </div>
            </td>
            <td className='text-start p-[28px] dot-line-buttom '>Tập {history.episode_name}</td>
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
            <div className='flex-1'>
              <p className='font-light text-[16px] leading-[200%]'>Lịch sử xem phim sẽ bị <b className=' font-semibold'>mất</b> khi xoá lịch sử duyệt web. <br/> Bạn cần <b className=' font-semibold'>đăng nhập</b> tài khoản để có thể lưu lịch sử xem phim vào tài khoản định danh của bạn.</p>
              <p className='link-text mt-[30px]' onClick={() => dispatch(setIsOpenedModalLogin())} >Đăng nhập</p>
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

export default NotLoggedin