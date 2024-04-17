import React, { useState } from 'react'
import FilmName from './FilmName'
import SaveChange from './SaveChange'
import OtherFilmName from './OtherFilmName'
import Types from './Types'
import Cover from './Cover'

const AddFilm = () => {
    let [film, setFilm] = useState({
        film_name: '',
        film_other_name: '',
        types:'',
        cover: null
    })

    let [error, setError] = useState({
        film_name: '',
        film_other_name: '',
        cover: ''
    })


    const changeFilm =(key, value) => {

        setFilm({...film, [key]: value})

        if(key !== 'cover') {
            if(!value.trim()) {
                setError({...error, [key]: 'Trường này là bắt buộc.' })
            } else {
                setError({...error, [key]: '' })
            }
        }
        
    }

    const validation = (key, errorMess) => {
        setError({...error, [key]: errorMess })
    }
  return (
    <div className='relative'>
        <div className='flex mt-[10px] mb-[70px]'>
                <div className='w-[20%]'>
                    <h6 className='text-[20px] font-semibold'>Thêm phim</h6>
                </div>
                <div className='w-[60%] px-[30px] '>
                    <div className='flex gap-[20px]'>
                        <FilmName changeFilm={changeFilm} error={error}/>
                        <OtherFilmName changeFilm={changeFilm} error={error}/>
                    </div>
                    <div className='mt-[36px]'>
                        <Types changeFilm={changeFilm}/>
                    </div>

                    <div className='mt-[36px]'>
                        <Cover film={film} changeFilm={changeFilm} error={error} validation={validation}/>
                    </div>
                </div>
                <SaveChange film={film} error={error} validation={validation}/>
        </div>
   </div>
  )
}

export default AddFilm