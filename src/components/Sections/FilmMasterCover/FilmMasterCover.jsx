import React from 'react'
import FilmCoverPhoto from '../../Photos/Cover/FilmCoverPhoto'
import FilmCoverMaterText from '../../Text/FilmCoverMasterText/FilmCoverMaterText'

const FilmMasterCover = ({cover, session_name}) => {
  return (
    <div className='h-[100vh] flex items-start justify-center'>
      <div className='absolute top-0 left-0 z-[-1] cover-overlay'>
        <FilmCoverPhoto cover={cover} session_name={session_name} />
      </div>
      <div className='mt-[100px] px-[50px]'>
        <FilmCoverMaterText session_name={session_name} />
      </div>
    </div>
  )
}

export default FilmMasterCover