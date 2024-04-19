import React from 'react'

const FilmDetailPoster = ({poster}) => {
  return (
    <div className='min-w-[216px] h-[316px] bg-black flex items-center justify-center'>
        <img src={poster} alt="poster phim" className='w-[200px] h-[300px] object-cover' />
    </div>
  )
}

export default FilmDetailPoster