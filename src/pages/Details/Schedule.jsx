import React from 'react'

const Schedule = ({new_episode_day, new_episode_time, episode_per_week, status_id}) => {

  const renderShedule = () => {
    if(status_id===3) {
      return   <p className='font-light text-[16px] leading-[200%]'>Phim đã chiếu tập cuối.</p>
    } else {
      if(!new_episode_day && !new_episode_time && !episode_per_week) {
        return   <p className='font-light text-[16px] leading-[200%]'>Lịch chiếu phim đang được cập nhật.</p>
      } else {
        return   <p className='font-light text-[16px] leading-[200%]'>
          Phim được chiếu&nbsp;
          {episode_per_week ? <b className=' font-semibold text-yellow'>{episode_per_week} Tập</b> : null }&nbsp;
          vào&nbsp; 
          {new_episode_time ? <span className=' text-primary font-semibold'>{new_episode_time}</span> : null }&nbsp;
          {new_episode_day ? <span className=' font-semibold link-text inline-block'>{new_episode_day}</span> : null }
        </p>
      }
    }
    
  }

  

  return (
    <section id="schedule" className=' mt-[100px]'>
        <div>
            <p className='  font-light text-[16px] leading-[200%] mb-[16px]'>Schedule</p>
            <div className='flex items-end justify-between'>
                <h2 className='leading-[120%] text-[45px] font-semibold'>Lịch chiếu phim</h2>
                {renderShedule()}
            </div>
        </div>
    </section>
  )
}

export default Schedule