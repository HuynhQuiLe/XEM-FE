import React from 'react'

const URLSessionInput = ({url, changeSession, error}) => {

    return (
      <div className='flex-1'>
          <div>
              <label htmlFor="" className='label-text '>URL (*)</label>
          </div>
          <div className='flex h-[48px] bg-white pl-[16px] items-baseline border-b-[1px] border-gray'>
              <div className='text-sub_menu_index font-[300] '>https://xem.com/</div>
              <input type="text" name='url' spellCheck="false"  className='input-default pl-[8px]' value={url ? url : ''} onChange={(e) => changeSession(e.target.name, e.target.value)} placeholder='ten-phim-phan-5'/>
          </div>
          {error && <div className='pt-[10px]'>
              <p className=' text-error text-[12px] font-light'>{error}</p>
          </div>}
      </div>
    )
}

export default URLSessionInput