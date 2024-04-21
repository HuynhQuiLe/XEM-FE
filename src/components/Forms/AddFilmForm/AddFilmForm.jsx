import React from 'react'
import {useState} from 'react';
import FilmNameInput from '../../Inputs/FilmNameInput/FilmNameInput';
import OtherFilmNameInput from '../../Inputs/OtherFilmNameInput/OtherFilmNameInput';
import TypeFilmInput from '../../Inputs/TypeFilmInput/TypeFilmInput';
import CoverFilmInput from '../../Inputs/CoverFilmInput/CoverFilmInput';
import CreateFilmButton from '../../Buttons/CreateFilmButton';

const AddFilmForm = () => {
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
                        <FilmNameInput changeFilm={changeFilm} error={error}/>
                        <OtherFilmNameInput changeFilm={changeFilm} error={error}/>
                    </div>
                    <div className='mt-[36px]'>
                        <TypeFilmInput changeFilm={changeFilm}/>
                    </div>

                    <div className='mt-[36px]'>
                        <CoverFilmInput film={film} changeFilm={changeFilm} error={error} validation={validation}/>
                    </div>
                </div>

                <CreateFilmButton film={film} error={error} validation={validation}/>
        </div>
   </div>
  )
}

export default AddFilmForm