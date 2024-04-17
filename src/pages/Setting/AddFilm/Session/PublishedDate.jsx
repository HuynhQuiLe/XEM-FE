import React from 'react'

const PublishedDate = ({published_date, changeSession, error}) => {
  return (
    <div className='flex-1'>
        <div>
            <label htmlFor="" className='label-text '>Xuất bản (*)</label>
        </div>
        <div>
            <input type="text" spellCheck={false}  className='input-default'  name='published_date'
                    placeholder='2022 ' value={published_date ? published_date : ''}
                    onChange={(e) => changeSession(e.target.name, e.target.value)}
            />
        </div>
        <div className='pt-[10px]'>
            {error && <span className=' text-error text-[12px] font-light ml-1'>{error}</span>}
        </div>
        
    </div>
  )
}

export default PublishedDate