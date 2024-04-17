import React from 'react'

const OtherFilmName = ({changeFilm, error}) => {
  return (
    <div className='flex-1'>
    <div>
        <label htmlFor="" className='label-text '>tên phim khác (*)</label>
    </div>
    <div>
        <input 
          type="text" 
          spellCheck={false}  
          className='input-default'  
          placeholder='Tên tiếng anh'
          name='film_other_name'
          onChange={(e) => changeFilm(e.target.name, e.target.value)}
        />
    </div>
    <div className='pt-[10px]'>
      { error.film_other_name && <span className=' text-error text-[12px] font-light ml-1'>{error.film_other_name}</span>}
    </div>
    
</div>
  )
}

export default OtherFilmName