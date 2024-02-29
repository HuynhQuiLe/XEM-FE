import React from 'react'

const CoverPhoto = () => {
  return (

    <div className='mb-[36px]'>
        <div>
            <label  className='label-text '>ảnh bìa (*)</label>
        </div>
        <div className='relative mb-[36px]'>
        <label htmlFor="cover" className=' flex flex-col justify-between items-center py-2 w-full h-[198px] rounded-[5px] bg-white  transition-default cursor-pointer border-[1px] border-gray hover:border-black'>
            
            <span className=' font-light flex flex-col justify-center items-center'>
                <span className='link-text block text-center'>Browse</span> 
                to choose your file.
            </span>

            <span className='block text-center'>
                <i className="fa fa-cloud-upload-alt text-[25px]"></i>
            </span>

            <span className='block font-semibold text-center'>
                <span className='block'>Recommended size: </span>
                <span className='block'>1440x400px.</span> 
                <span className='block'>68.00MB max.</span>
            </span>

            
        </label>
        <input type="file"   className='input-default hidden' name="cover" id="cover"
        />
    </div>
    </div>


    
  )
}

export default CoverPhoto