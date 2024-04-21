import React from 'react'
import {useState} from 'react';
import {remainCharacters} from '../../../utils/other/remainCharacters';

const DisplayNameInput = ({full_name, changeUserInfo}) => {
    const NUMBER_REMAIN = 30;
    const [error, setError] = useState('')

    const [showRemain, setShowRemain] = useState(null)
    return (
        <div className='flex-1'>
            <div>
                <label htmlFor="" className='label-text '>họ và tên (*)</label>
            </div>
            <div>
                <input type="text" spellCheck={false}  className='input-default' value={full_name ? full_name : ''} placeholder='Chúng tôi có thể gọi bạn là gì?'
                    onClick={(e) => {
                        const text = remainCharacters(e.target.value, NUMBER_REMAIN)
                        setShowRemain(text)
                    }}

                    onChange={(e) => {
                        
                        changeUserInfo('full_name', e.target.value )

                        const text = remainCharacters(e.target.value, NUMBER_REMAIN)
                        setShowRemain(text)


                        // validation
                        if(!e.target.value.trim()) {
                            setError('Trường này là bắt buộc.')
                        } else {
                            setError('')
                        }
                    }}
                />
            </div>
            {showRemain && 
            <div className='pt-[10px]'>
                <span className=' text-sub_menu_index text-[12px] font-light'>{showRemain}</span>
                {error && <span className=' text-error text-[12px] font-light ml-1'>{error}</span>}
            </div>}
            
        </div>
    )
}

export default DisplayNameInput