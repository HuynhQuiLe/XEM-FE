import React from 'react'
import Type from './Type'
import KeySearch from './KeySearch'
import Title from './Title'
import CoverPhoto from './CoverPhoto'
import Introduction from './Introduction'
import Content from './Content'

const FormAddReview = () => {
  return (
    <div>
        <div className='flex gap-[20px] mb-[36px]'>
            <Type/>
            <KeySearch/>
        </div>
        <Title/>
        <CoverPhoto/>
        <Introduction/>
        <div className='dot-line w-full h-[1px]'></div>
        <Content/>
    </div>
  )
}

export default FormAddReview