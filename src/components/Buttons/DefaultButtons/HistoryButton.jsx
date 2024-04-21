import React from 'react'
import { useNavigate } from 'react-router-dom'

const HistoryButton = ({pathname}) => {
    const navigate = useNavigate()
  return (
    <button className={`button text-nowrap ${pathname.includes("chi-tiet") ? 'bg-white text-black' : 'bg-black text-white'}`} onClick={() => navigate('/phim-da-luu')} >Phim Đã Lưu</button>
  )
}

export default HistoryButton