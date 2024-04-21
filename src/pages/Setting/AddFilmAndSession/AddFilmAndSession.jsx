import React from 'react'
import AddFilmForm from '../../../components/Forms/AddFilmForm/AddFilmForm'
import AddSessionForm from '../../../components/Forms/AddSessionForm/AddSessionForm'

const Add = () => {
  return (
    <div>
        <AddFilmForm/>
        <div className='mt-[100px] mb-[50px] h-[1px] w-full bg-line'></div>
        <AddSessionForm/>
    </div>
  )
}

export default Add