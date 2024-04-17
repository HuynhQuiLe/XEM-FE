import React from 'react'
import {convertTime} from '../../../../utils/convert/converTime';

const NotificationTableBody = ({index, noti, xem}) => {
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
}

export default NotificationTableBody