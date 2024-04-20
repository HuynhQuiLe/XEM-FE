import React from 'react'

const CurrentEmail = ({currentEmail}) => {
  return (
    <div className='mb-[50px]'>
    <div>
        <label htmlFor="" className='label-text '>E-MAIL hiện tại</label>
    </div>
    <div className='px-[16px] border-b-[1px] border-gray h-[48px] flex items-center justify-between'>
        <p className=''>{currentEmail}</p>
        <div className='text-[12px] flex items-center text-primary'>
            <i className="fa fa-check-circle mr-1"></i>
            <p>Đã xác thực</p>
        </div>
    </div>
</div>

  )
}

export default CurrentEmail