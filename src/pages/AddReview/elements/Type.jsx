import React, { useState } from 'react'

const Type = () => {
    const types = ["ABC", 'DEF', '1213']
    const [showType, setShowType] = useState(false)
    const renderType = () => {
        return types?.map((type, index) => {
            return <p className={`px-[15px] py-[6px] bg-white hover:bg-light_gray_2 transition-default cursor-pointer`} 
                        key={index} 
                        role_id={index}
                    >{type}</p>
        })
    }

  return (
    <div className='flex-1'>
            <div>
                <label htmlFor="" className='label-text '>Bạn đang đánh giá về? (*)</label>
            </div>
            <div>
                <div className='w-full bg-white h-[48px] flex items-center input-default relative cursor-pointer' onClick={()=>setShowType(!showType)}>
                    <p>Chọn loại sản phẩm</p>
                    <div className=' absolute right-[16px]'>
                        {showType ? <i className="fa fa-chevron-up text-sub_menu_index"></i> : <i className="fa fa-chevron-down text-sub_menu_index"></i>}    
                    </div>
                    {
                        showType && <div className=' absolute z-10 w-full top-[48px] left-0 bg-white border-t-0 border-[1px] border-gray'>
                        {types && renderType()}
                    </div>
                    }
                </div>
            </div>
            
        </div>
  )
}

export default Type