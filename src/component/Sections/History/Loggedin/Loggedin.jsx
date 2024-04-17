import React, { useEffect, useState } from 'react'
import { historySer } from '../../../../api/api';
import { convertTime } from '../../../../utils/convert/converTime';
import { useNavigate } from 'react-router-dom';
import LatestEpisode from '../../../../component/Vendors/LatestEpisode/LatestEpisode';
import FollowButton from '../../../Buttons/FollowButton';
import SectionHeading from '../../../Headings/SectionHeading/SectionHeading';
import HistoryTableHead from '../../../Tables/Head/History/HistoryTableHead';
import EmptyHead from '../../../Tables/Head/EmptyHead/EmptyHead';
import EmptyBody from '../../../Tables/Body/EmptyBody/EmptyBody';
import LoggedinHistoryTableBody from '../../../Tables/Body/History/LoggedinHistoryTableBody';

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
      return  <HistoryTableHead/>
    } else {
      return <EmptyHead/>
    }
  }

  const renderHistory = () => {
    if(historyList) {
      return historyList?.map((history, index) => {
        return <LoggedinHistoryTableBody index={index} key={index} history={history} />
      })
    } else {
      return <EmptyBody />
    }
  }


  return (
    <div className='pt-[55px]'>
      <div>
        <SectionHeading 
            heading1='Lịch sử'
            description={`<p class='font-light text-[16px] leading-[200%]'>Nhấn nút <b class=' font-semibold'>Follow</b> để nhận thông báo <b class=' font-semibold'>sớm nhất </b>khi phim yêu thích của bạn được cập nhật - đừng bỏ lỡ những <b class=' font-semibold'>phút giây thư giãn</b> này nhé.</p>
            `}
            items_start={true}
        />
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