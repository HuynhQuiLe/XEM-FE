import React from 'react'
import LatestEpisode from '../Vendors/LatestEpisode/LatestEpisode'
import CardPoster from '../Photos/Poster/CardPoster'

const FilmCard = ({item, isTrending}) => {
  return (
    <>
        {/* <a href="/details" alt="Mythrill">
            <div className="card">
            <div className="wrapper">
                <img src="/img/cover.jpg" className="cover-image" />
            </div>
            <img src="/public/img/text2.png" className="title" />
            <img src="/public/img/character.webp" className="character" />
            </div>
        </a>
        <a href="/details" alt="Mythrill">
            <div className="card">
            <div className="wrapper">
                <img src="/img/cover.jpg" className="cover-image" />
            </div>
            <img src="/public/img/title.png" className="title" />
            <img src="/public/img/character.webp" className="character" />
            </div>
        </a> */}

        <a href={`/chi-tiet/${item?.url}`} className='mb-[30px]' alt="Mythrill">
            <div className="group relative rounded-[8px] overflow-hidden">
                <div className=' absolute top-[8px] left-[8px] z-[2]'>
                    {isTrending && <div className='h-[22px] px-[10px] leading-[22px] text-black text-center bg-primary rounded-[4px] text-[12px] font-semibold flex items-center'>{item.view_count} views</div>}
                    {!isTrending && <LatestEpisode session_id={item?.session_id} />}
                </div>
                <CardPoster poster={item.poster}/>
                <div className=' absolute bottom-0 left-0 text-white p-2 background-rgba w-full'>
                    <p className=' text-[18px] text-overflow w-full capitalize'>{item?.session_name}</p>
                    <p className='text-eng_name text-overflow w-full text-[15px] font-light capitalize' >{item?.session_other_name}</p>
                </div>
            </div>
        </a>
    </>
  )
}

export default FilmCard