import React, { useEffect, useState } from 'react'
import { episodeSer } from '../../api/api'
import LatestEpisode from '../../components/LatestEpisode/LatestEpisode'

const General = ({session_name, session_other_name, published_date, duration, types, session_id}) => {


    const renderType = () => {
        return types.split(',').map((type, index) => {
            return <a href="#" key={index} className=' bg-black rounded-[4px] text-white font-thin py-[2px] px-[8px] btn-shadow'>{type.trim()}</a>
        })
    }
  return (
    <div className='flex flex-col justify-evenly items-baseline h-[316px] w-full text-[#a7a7a7]'>
        <div className='flex h-[16%] items-center w-[100%]'>
            <p className='min-w-[200px] font-semibold'>Tên</p>
            <p className='text-gradient'>{session_name}</p>
        </div>
        <div className='flex h-[16%] items-center w-full dot-line'>
            <p className='min-w-[200px] font-semibold'>Tên Khác</p>
            <p>{session_other_name}</p>
        </div>
        <div className='flex h-[16%] items-center w-full dot-line'>
            <p className='min-w-[200px] font-semibold'>Thể Loại</p>
            <div className='flex gap-[10px]'>
                {types && renderType()}
            </div>
        </div>
        <div className='flex h-[16%] items-center w-full dot-line'>
            <p className='min-w-[200px] font-semibold'>Tập Mới Nhất</p>
            <LatestEpisode session_id={session_id} css={'bg-yellow_pure rounded-[4px] text-black py-[1px] px-[8px] text-shadow btn-shadow'}/>
        </div>
        <div className='flex h-[16%] items-center w-full dot-line'>
            <p className='min-w-[200px] font-semibold'>Thông Tin Khác</p>
            <div className='flex gap-[30px]'>
                <div className='flex items-center gap-[8px]'>
                    <i className="fa fa-calendar-alt"></i>
                    <p className='text-primary'>{published_date}</p>
                </div>
                <div className='flex items-center gap-[8px]'>
                    <i className="fa fa-clock"></i>
                    <p>{duration}</p>
                </div>
            </div>
        </div>
        <div className='flex h-[16%] items-center w-full dot-line'>
            <p className='min-w-[200px] font-semibold'>Đánh Giá</p>
            <div>
                <i className="fa fa-star text-yellow_pure text-[25px] mr-2"></i>
                <span className='text-white text-[25px] mr-1'>4.7</span>
                <span className='text-[14px]'>/5 </span>
                <span className='text-[14px]'>(17752 lượt)</span>
                <div className='inline ml-5'>
                    <i className="fa fa-star mr-1 cursor-pointer text-primary"></i>
                    <i className="fa fa-star mr-1 cursor-pointer  text-primary"></i>
                    <i className="fa fa-star mr-1 cursor-pointer"></i>
                    <i className="fa fa-star mr-1 cursor-pointer"></i>
                    <i className="fa fa-star mr-1 cursor-pointer"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default General