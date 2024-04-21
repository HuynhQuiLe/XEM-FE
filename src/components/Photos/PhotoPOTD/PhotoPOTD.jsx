import React from 'react'

const PhotoPOTD = () => {
  return (
    <div>
        {/* <div className='h-[600px] w-full bg-black rounded-[16px]'></div> */}
        <img className='h-[600px] w-full bg-black rounded-[16px] object-cover' src="/img/test.png" alt="POTD" />
        <div className=' flex justify-center mt-[30px]'>
          <a href='/details' className=' capitalize link-text text-[22px]'>Đấu phá thương khung phần 5</a>
        </div>
    </div>
  )
}

export default PhotoPOTD