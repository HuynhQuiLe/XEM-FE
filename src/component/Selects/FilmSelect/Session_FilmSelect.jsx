import React from 'react'
import {useState, useEffect} from 'react';
import {filmSer} from '../../../api/api';

const Session_FilmSelect = ({film_id, changeSession }) => {
    const [showFilm, setShowFilm] = useState(false)
    const [films, setFilms] = useState(null)

    useEffect(() => {
        filmSer.getAllFilms()
        .then(({data}) => {
            setFilms(data.content)
        })
          
    },[])

    const renderFilm = () => {
        return films?.map((film, index) => {
            return <p className={`px-[15px] py-[6px] ${film?.film_id === film_id ? 'bg-light_gray_2' : 'bg-white'} hover:bg-light_gray_2 transition-default cursor-pointer`} 
                        key={index} 
                        film_id={film?.film_id}
                        onClick={(e) => changeSession('film_id',Number(e.target.getAttribute('film_id')))}
                    >{film?.film_name}</p>
        })
    }

    return (
        <div className='flex-1'>
            <div>
                <label htmlFor="" className='label-text '>Chọn phim (*)</label>
            </div>
            <div>
                <div className='w-full bg-white h-[48px] flex items-center input-default relative cursor-pointer' onClick={()=>setShowFilm(!showFilm)}>
                    {films?.length && <p>{films?.find(film => film?.film_id === film_id) ? films?.find(film => film?.film_id === film_id).film_name : 'Vui lòng chọn phim'}</p>}
                    <div className=' absolute right-[16px]'>
                        {showFilm ? <i className="fa fa-chevron-up text-sub_menu_index"></i> : <i className="fa fa-chevron-down text-sub_menu_index"></i>}    
                    </div>
                    {
                        showFilm && <div className=' absolute z-10 w-full top-[48px] left-0 bg-white border-t-0 border-[1px] border-gray'>
                        <p className={`px-[15px] py-[6px] ${!film_id ? 'bg-light_gray_2' : 'bg-white'} hover:bg-light_gray_2 transition-default cursor-pointer`}>
                            Vui lòng chọn phim
                        </p>
                        {films?.length && renderFilm()}
                    </div>
                    }
                </div>
            </div>
            
        </div>
    )
}


export default Session_FilmSelect