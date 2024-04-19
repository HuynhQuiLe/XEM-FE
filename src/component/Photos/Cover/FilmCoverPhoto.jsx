import React from 'react'

const FilmCoverPhoto = ({cover, session_name}) => {
  return (
    <img src={cover} className='w-[100vw] h-[100vh] object-cover grayscale-[100%] ' alt={`cover master phim ${session_name}`} />
  )
}

export default FilmCoverPhoto