import React from 'react'
import AddFilmForm from '../../../component/Forms/AddFilmForm/AddFilmForm'
import AddSessionForm from '../../../component/Forms/AddSessionForm/AddSessionForm'

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