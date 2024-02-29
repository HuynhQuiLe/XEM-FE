import React from 'react'

const SearchBar = () => {
    return (
        <div className='ml-[10px] h-[48px] rounded-[8px] bg-sf_bg flex items-center w-[-webkit-fill-available] justify-between'>
            <div className=' flex items-center w-full'>
                <div className='text-[25px] text-s_icon pl-[20px] flex items-center'>
                    <i className="fab fa-searchengin"></i>
                </div>
                <input type="text" className='h-full bg-inherit pl-[10px] outline-none w-full ' placeholder='Từ khoá tìm kiếm' />
            </div>
            <div className='text-black flex items-center'>
                <p className='text-[11px] font-light mx-[20px]'>TRONG</p>
                <p className='text-[14px] pr-[30px] text-nowrap font-semibold'>Tất cả</p>
                <i className="fa fa-chevron-down pr-[20px]"></i>
            </div>
        </div>
    )
}

export default SearchBar