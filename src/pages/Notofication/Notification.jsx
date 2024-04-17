import React, { useEffect, useState } from 'react'
import { notificationSer } from '../../api/api'
import { convertTime } from '../../utils/convert/converTime'
import { useNavigate } from 'react-router-dom'
import NumberOfNoti from './NumberOfNoti'

const Notification = () => {
  const navigate = useNavigate()
  const [notoficationList, setNotificationList] = useState(null)


  useEffect(() => {
      notificationSer.getListByUser()
      .then(({data}) => {
        setNotificationList(data.content)
      })
    
  },[])

  const xem = (noti) => {
    notificationSer.readNotification(noti.notification_id)
    .then(() => {
      navigate(`/chi-tiet/${noti.sessions.url}/tap-${noti.episodes.episode_name}`)
    })
    
  }

  const renderNotifications = () => {
    if(notoficationList?.length > 0) {
      return notoficationList.map((noti, index) => {
        return (
          <tr key={index}>
            <td className={`${noti.is_read ? ' bg-transparent' : 'bg-light_gray_2'} relative px-[28px] py-1 dot-line-buttom flex gap-[20px] hover:bg-light_gray_2 transition-default`}>
              <div className=''>
                <img src={noti.sessions.poster} className='w-[80px] h-[120px] object-cover mr-3 inline-block rounded-[2px]' alt="poster" />
              </div>
              <div className='i'>
                <div className='mb-5'>
                  <p 
                    className={`link-text text-[20px] ${noti.is_read ? 'font-normal' : 'font-semibold'}`} 
                    onClick={() => xem(noti)}
                  >
                    {noti.sessions.session_name} - Tập {noti.episodes.episode_name}
                  </p>
                </div>
                <div className={`text-[18px] ${noti.is_read ? 'font-light' : 'font-normal'}`}  >
                  <p className=' leading-[180%]'>Bộ phim <strong className={`${noti.is_read ? 'font-[500]' : 'font-semibold'}`}>{noti.sessions.session_name}</strong> bạn đang theo dõi đã được phát sóng tập mới.</p>
                  <p className=' leading-[180%]'><strong className={`${noti.is_read ? 'font-[500]' : 'font-semibold'}`}>{noti.users.full_name}</strong> ơi, đừng bỏ lỡ phim hay này nhé!</p>
                </div>
              </div>
              <div className=' absolute top-[5px] right-[28px]'>
                <p className={`${noti.is_read ? 'font-light opacity-70' : 'font-semibold'}`}>{convertTime(noti.created_date)}</p>
              </div>
              <div className=' absolute bottom-[15px] right-[28px]'>
                <button 
                  className='px-[20px] font-semibold relative text-center min-w-[107px] h-[40px] leading-[40px] w-fit text-[18px] rounded-[8px] border-[1px] border-black bg-transparent text-black hover:text-white hover:bg-black transition-default cursor-pointer'
                  onClick={() => xem(noti)}
                >
                  XEM.
                </button>
              </div>
            </td>
          </tr>
        )
      })
    } else {
      return (
        <tr>
          <td className=' p-[28px] dot-line-buttom text-center font-semibold text-[24px] bg-light_gray_2'>
              <i className="fa fa-info-circle text-[40px] mb-[16px]"></i>
              <p>Không có thông báo.</p>
          </td>
        </tr>
      )
    }
  }

  return (
    <div className='pt-[55px]'>
    <div>
      <div className='flex items-end justify-between'>
          <h2 className='flex-1 leading-[120%] text-[45px] font-semibold'>Thông báo</h2>
          <NumberOfNoti/>
      </div>

      <div className='mt-[80px] w-full'>
        <table className='w-full border-separate border-spacing-0'>
            <thead>
                <tr className='w-full'>
                    <th className='text-start p-[28px] font-normal dot-line-buttom'></th>
                </tr>
            </thead>
            <tbody>
                {renderNotifications()}
            </tbody>
        </table>
        
      </div>
    </div>
  </div>
  )
}

export default Notification