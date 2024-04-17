import React from 'react'

const Description = ({description, changeSession, error}) => {
  return (
    <div className='flex-1'>
        <div>
            <label htmlFor="" className='label-text '>mô tả phim (*)</label>
        </div>
        <div>
            <textarea type="text" spellCheck={false}   className='input-default pt-3'  name='description'
                      placeholder='Giới thiệu về phim ' value={description ? description : ''}
                      onChange={(e) => changeSession(e.target.name, e.target.value)}
            />
        </div>
        <div className='pt-[10px]'>
            {error && <span className=' text-error text-[12px] font-light ml-1'>{error}</span>}
        </div>
        
    </div>
  )
}

export default Description