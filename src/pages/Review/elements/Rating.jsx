import React from 'react'

const Rating = () => {
  return (
   <div className='flex items-center gap-[20px] justify-end'>
        <div className=' flex justify-end text-[20px] text-primary'>
            <i className="fa fa-splotch"></i>
            <i className="fa fa-splotch"></i>
            <i className="fa fa-splotch"></i>
            <i className="fa fa-splotch"></i>
            <i className="fa fa-splotch"></i>
        </div>
        <p>5/5 - (31 bình chọn)</p>
   </div>
  )
}

export default Rating