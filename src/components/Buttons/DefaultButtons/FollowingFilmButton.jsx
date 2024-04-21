import React from 'react'
import { useNavigate } from 'react-router-dom'

const FollowingFilmButton = ({pathname}) => {
    const navigate = useNavigate()
  return (
    <button className={`button bg-transparent border-[1px]  text-nowrap ml-[8px] ${pathname.includes("chi-tiet") ? 'text-white border-white' :'text-black border-black'}`} onClick={() => navigate('/lich-su')}>Lịch Sử</button>
  )
}

export default FollowingFilmButton