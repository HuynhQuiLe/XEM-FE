import React from 'react'

const FilmName = ({changeFilm, error}) => {

  return (
    <div className='flex-1'>
        <div>
            <label htmlFor="" className='label-text '>tên phim (*)</label>
        </div>
        <div>
            <input type="text" 
                    spellCheck={false} 
                    name='film_name'  
                    className='input-default'  
                    placeholder='Tên phim'
                    onChange={(e) => changeFilm(e.target.name, e.target.value)}
            />
        </div>
        <div className='pt-[10px]'>
            { error.film_name && <span className=' text-error text-[12px] font-light ml-1'>{error.film_name}</span>}
        </div>
        
    </div>
  )
}

export default FilmName