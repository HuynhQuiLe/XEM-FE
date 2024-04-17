import React, { useEffect, useState } from 'react'
import { notificationSer } from '../../api/api'
import { useNavigate } from 'react-router-dom'
import EmptyHead from '../../component/Tables/Head/EmptyHead/EmptyHead'
import EmptyBody from '../../component/Tables/Body/EmptyBody/EmptyBody'
import NotificationTableBody from '../../component/Tables/Body/Notification/NotificationTableBody'
import NumberOfNotification from '../../component/Vendors/NumberOfNotification/NumberOfNotification'

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
        return <NotificationTableBody index={index} noti={noti} key={index} xem={xem}/>
      })
    } else {
      return <EmptyBody message='Danh sách thông báo trống.' />
    }
  }

  return (
    <div className='pt-[55px]'>
    <div>
      <div className='flex items-end justify-between'>
          <h2 className='flex-1 leading-[120%] text-[45px] font-semibold'>Thông báo</h2>
          <NumberOfNotification/>
      </div>

      <div className='mt-[80px] w-full'>
        <table className='w-full border-separate border-spacing-0'>
            <thead>
               <EmptyHead />
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