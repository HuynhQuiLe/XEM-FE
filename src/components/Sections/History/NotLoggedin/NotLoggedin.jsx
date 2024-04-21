import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { historyLocalStorage } from '../../../../api/localStorage';
import SectionHeading from '../../../Headings/SectionHeading/SectionHeading';
import EmptyHead from '../../../Tables/Head/EmptyHead/EmptyHead';
import EmptyBody from '../../../Tables/Body/EmptyBody/EmptyBody';
import HistoryTableHead from '../../../Tables/Head/History/HistoryTableHead';
import NotLoggedinHistoryTableBody from '../../../Tables/Body/History/NotLoggedinHistoryTableBody';
import LogginButtonUnderline from '../../../Buttons/LinkButtons/UnderlineLinkButtons/LogginButtonUnderline';

const NotLoggedin = () => {
    const [historyList, setHistoryList]  = useState(null)

    useEffect(() => {
        const historyLocal = historyLocalStorage.get() ? historyLocalStorage.get() : null
        setHistoryList(historyLocal)
    },[])

    const renderThead = () => {
      if(historyList) {
        return <HistoryTableHead/>
      } else {
        return <EmptyHead/>
      }
    }

  const renderHistory = () => {
    if(historyList) {
      return historyList?.map((history, index) => {
        return <NotLoggedinHistoryTableBody index={index} key={index} history={history} />
      })
    } else {
      return <EmptyBody message='Danh sách lịch sử xem phim trống.' />
    }
  }


  return (
    <div className='pt-[55px]'>
      <div>
        <SectionHeading 
          heading1='Lịch sử'
          description={`<p class='font-light text-[16px] leading-[200%]'>Lịch sử xem phim sẽ bị <b class=' font-semibold'>mất</b> khi xoá lịch sử duyệt web. <br/> Bạn cần <b class=' font-semibold'>đăng nhập</b> tài khoản để có thể lưu lịch sử xem phim vào tài khoản định danh của bạn.</p>`}
          items_start={true}
        />

        <div className='flex items-start justify-between'>
            <div  className='flex-1'></div>
            <div className='flex-1'>
              <LogginButtonUnderline isLinkText = {true} />
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