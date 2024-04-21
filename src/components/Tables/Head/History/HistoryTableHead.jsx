import React from 'react'

const HistoryTableHead = () => {
  return (
    <tr className='w-full'>
        <th className='text-start p-[28px] font-normal dot-line-buttom'>Tên phim</th>
        <th className='text-start p-[28px] font-normal dot-line-buttom'>Tập đã xem</th>
        <th className='text-start p-[28px] font-normal dot-line-buttom'>Thời gian xem cuối</th>
        <th className='text-start p-[28px] font-normal dot-line-buttom'>Tập mới nhất</th>
        <th className='text-start p-[28px] font-normal dot-line-buttom'></th>
    </tr>
  )
}

export default HistoryTableHead