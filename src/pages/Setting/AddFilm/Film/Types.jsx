import React from 'react'

const Types = ({changeFilm}) => {
  return (
    <div className='flex-1'>
        <div>
            <label htmlFor="" className='label-text '>thể loại phim</label>
        </div>
        <div>
            <input 
            type="text" 
            spellCheck={false}  
            className='input-default'  
            placeholder='Thể loại phim '
            name='types'
            onChange={(e) => changeFilm(e.target.name, e.target.value)}
            />
        </div>
        <div className='pt-[10px]'>
            <span className=' text-sub_menu_index text-[12px] font-light'>Dùng dấu phẩy  " , " để nhập nhiều thể loại phim.</span>
        </div>
        
    </div>
  )
}

export default Types