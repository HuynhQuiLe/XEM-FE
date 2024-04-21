import React from 'react'
import {useLocation} from 'react-router-dom';
import SearchInput from '../../Inputs/SearchInput/SearchInput';

const SearchBar = () => {
    const {pathname} = useLocation()
    return (
        <div className={`${pathname.includes('details') ? 'text-white bg-sf_bg_dark' : 'bg-sf_bg'} ml-[10px] h-[48px] rounded-[8px]  flex items-center w-[-webkit-fill-available] justify-between`}>
            <div className=' flex items-center w-full'>
                <div className='text-[25px] text-s_icon pl-[20px] flex items-center'>
                    <i className="fab fa-searchengin"></i>
                </div>
                <SearchInput />
            </div>
            <div className={`${pathname.includes('details') ? 'text-white' : 'text-black'} flex items-center`}>
                <p className='text-[11px] font-light mx-[20px]'>TRONG</p>
                <p className='text-[14px] pr-[30px] text-nowrap font-semibold'>Tất cả</p>
                <i className="fa fa-chevron-down pr-[20px]"></i>
            </div>
        </div>
    )
}

export default SearchBar