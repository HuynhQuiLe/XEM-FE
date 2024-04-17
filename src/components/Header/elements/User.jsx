import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {useEffect, useState} from 'react';
import Avatar from '../../Avatar/Avatar'
import {userSer} from '../../../api/api';
import { confirmPasswordLocalStorage, tokenLocalStorage } from '../../../api/localStorage';
import { setToken } from '../../../redux/authSlice';
import { notify } from '../../../utils/notify/notify';
import New from '../../../component/Vendors/NumberNotification/New';

const User = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [url, setUrl] = useState(null)
    useEffect(() => {
        userSer.getUrl()
        .then(({data}) => {
            setUrl(data.content.url)
        })
        .catch(error => {
            console.log(error)
        })

    },[])

    const logout = () => {
        dispatch(setToken(null))
        tokenLocalStorage.remove()
        navigate('/')
        confirmPasswordLocalStorage.remove()
        notify.success("Đăng xuất thành công.")
       
    }


  return (
    <div className='group relative'>
        <div className='relative'>
            <Avatar size={32} />
           <New withCirlcle={true} showAtAvatar = {true}/>
        </div>
        <div className=' absolute top-[100%] z-[2] pt-[12px] bg-transparent transition-default opacity-0 invisible group-hover:opacity-100 group-hover:visible'>
            <div className=' bg-black text-white py-[20px] w-[230px] rounded-[8px] '>
                <div className='pb-[16px] text-[14px] font-thin border-b-[1px] border-dropdown_user_list'>
                    <p className='h-[32px] px-[28px] leading-[32px] hover:bg-dropdown_user_list cursor-pointer transition-default'>Upgrade to Pro</p>
                </div>
                <div className='py-[16px] text-[14px] font-thin border-b-[1px] border-dropdown_user_list'>
                    <p  className='h-[32px] px-[28px] leading-[32px] hover:bg-dropdown_user_list cursor-pointer transition-default' onClick={() => navigate(`/profile/${url}`)}>Profile</p>
                    <p  className='h-[32px] px-[28px] leading-[32px] hover:bg-dropdown_user_list cursor-pointer transition-default'>Collections</p>
                    <div className='h-[32px] px-[28px] leading-[32px] hover:bg-dropdown_user_list cursor-pointer transition-default flex items-center justify-between' onClick={() => navigate(`/thong-bao`)}>
                        <p>Thông báo</p>
                        <New withCirlcle={true}/>
                    </div>
                </div>
                <div className='text-[14px] font-semibold border-b-[1px] border-dropdown_user_list py-[10px]'>
                    <p className='h-[32px] px-[28px] leading-[32px] hover:bg-dropdown_user_list cursor-pointer transition-default'>Dashboard</p>
                </div>
                <div className='pt-[16px] text-[14px] font-thin'>
                    <p  className='h-[32px] px-[28px] leading-[32px] hover:bg-dropdown_user_list cursor-pointer transition-default'
                        onClick={logout}
                    >Logout</p>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default User