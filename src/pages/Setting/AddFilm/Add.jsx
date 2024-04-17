import React from 'react'
import AddFilm from './Film/AddFilm'
import AddSession from './Session/AddSession'

const Add = () => {
  return (
    <div>
        <AddFilm/>
        <div className='mt-[100px] mb-[50px] h-[1px] w-full bg-line'></div>
        <AddSession/>
    </div>
  )
}

export default Add