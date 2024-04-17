import React, { useEffect, useState } from 'react'
import { followFilmSer } from '../../../../api/api';
import SectionHeading from '../../../Headings/SectionHeading/SectionHeading';
import FollowingFilmsTableHead from '../../../Tables/Head/FollowingFilms/FollowingFilmsTableHead';
import EmptyHead from '../../../Tables/Head/EmptyHead/EmptyHead';
import EmptyBody from '../../../Tables/Body/EmptyBody/EmptyBody';
import FollowingFilmsTableBody from '../../../Tables/Body/FollowingFilms/FollowingFilmsTableBody';

const Loggedin = () => {
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
            return <FollowingFilmsTableHead/>
        } else {
            return  <EmptyHead/>
        }
    }


    const renderFollow = () => {
        if(followList) {
          return followList?.map((follow, index) => {
            return <FollowingFilmsTableBody index={index} follow={follow} key={index} setAgain={setAgain} again={again} />
          })
        } else {
          return <EmptyBody message='Danh sách phim đang theo dõi trống.' />
        }
      }

    return (
        <div className='pt-[55px]'>
            <div>
                <SectionHeading 
                    heading1='Phim theo dõi'
                    description={`<p class='font-light text-[16px] leading-[200%]'>Bằng việc <b class='font-semibold'>Follow</b> phim, bạn đã đồng ý nhận <b class='font-semibold'>thông báo sớm nhất</b> ngay khi phim được cập nhật tập mới.</p>`}
                    items_start={true}
                />
        
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