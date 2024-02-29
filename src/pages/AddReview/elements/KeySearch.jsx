import React from 'react'

const KeySearch = () => {
  return (
    <div className='flex-1'>
    <div>
        <label htmlFor="" className='label-text '>Từ khoá tìm kiếm (*)</label>
    </div>
    <div>
        <input type="text"  className='input-default' placeholder='Từ khoá'/>
    </div>
</div>
  )
}

export default KeySearch