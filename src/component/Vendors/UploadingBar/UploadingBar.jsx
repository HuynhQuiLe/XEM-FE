import React from 'react'

const UploadingBar = ({progress}) => {
    if(!progress) {
        return null
    }
    return (
        <div className='my-3'>
            <div className='w-full h-[1px] relative bg-sub_menu_index opacity-50'>
                <div className='absolute  w-[${progress}%] h-full bg-black top-0 left-0 z-10'
                style={{width: `${progress}%`}}></div>
            </div>
            <p className='text-[14px]'><span className=' font-semibold'>{progress}</span> %</p>
        </div>
    )
}


export default UploadingBar