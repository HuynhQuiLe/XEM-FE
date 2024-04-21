import React from 'react'

const Marquee = () => {
    let date = new Date().toDateString()
    return (
        <div className="marquee mb-[30px]">
            <span className='font-light text-back_gray'>
                <strong className=' font-semibold text-black uppercase'>Đấu phá thương khung&nbsp;</strong>
                — Phim of the Day -&nbsp;
                <strong className=' font-semibold text-black uppercase'>3.215<span className=' lowercase font-light'> lượt xem mới&nbsp;</span></strong>
                — {date} —&nbsp;
            </span>
            <span className='font-light text-back_gray'>
                <strong className=' font-semibold text-black uppercase'>Đấu phá thương khung&nbsp;</strong>
                — Phim of the Day -&nbsp;
                <strong className=' font-semibold text-black uppercase'>3.215<span className=' lowercase font-light'> lượt xem mới&nbsp;</span></strong>
                — {date} —&nbsp;
            </span>
            <span className='font-light text-back_gray'>
                <strong className=' font-semibold text-black uppercase'>Đấu phá thương khung&nbsp;</strong>
                — Phim of the Day -&nbsp;
                <strong className=' font-semibold text-black uppercase'>3.215<span className=' lowercase font-light'> lượt xem mới&nbsp;</span></strong>
                — {date} —&nbsp;
            </span>
            <span className='font-light text-back_gray'>
                <strong className=' font-semibold text-black uppercase'>Đấu phá thương khung&nbsp;</strong>
                — Phim of the Day -&nbsp;
                <strong className=' font-semibold text-black uppercase'>3.215<span className=' lowercase font-light'> lượt xem mới&nbsp;</span></strong>
                — {date} —&nbsp;
            </span>
        </div>
    )
    }

export default Marquee