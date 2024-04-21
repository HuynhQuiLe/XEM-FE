import React from 'react'

const FollowingFilmsTableHead = () => {
  return (
    <tr className='w-full'>
        <th className='text-start p-[28px] font-normal dot-line-buttom'>Tên phim</th>
        <th className='text-start p-[28px] font-normal dot-line-buttom'>Tập mới nhất</th>
        <th className='text-start p-[28px] font-normal dot-line-buttom'>Tập tiếp theo</th>
        <th className='text-start p-[28px] font-normal dot-line-buttom'>Trạng thái phim</th>
        <th className='text-start p-[28px] font-normal dot-line-buttom'></th>
    </tr>
  )
}

export default FollowingFilmsTableHead