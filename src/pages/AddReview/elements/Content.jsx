import React from 'react'
import Tiptap from './Tiptap/Tiptap'

const Content = () => {

    return (
        <div className='mt-[36px]'>
            <div>
                <label htmlFor="" className='label-text '>Nội dung (*)</label>
                <Tiptap/>
            </div>
        </div>
    )
}

export default Content