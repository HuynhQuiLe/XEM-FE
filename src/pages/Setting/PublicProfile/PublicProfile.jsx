import React from 'react'
import {useState, useEffect} from 'react';
import { roleSer, userSer } from '../../../api/api.js';
import URL from './elements/URL.jsx';
import DisplayName from './elements/DisplayName.jsx';
import Birthday from './elements/Birthday.jsx';
import Role from './elements/Role.jsx';
import Avatar from './elements/Avatar.jsx';
import SaveChangeBtn from './elements/SaveChangeBtn.jsx';

const PublicProfile = () => {
    const [checked, setChecked] = useState(true)
    const [user, setUser] = useState(null)
    useEffect(() => {
        //get public profile
        userSer.getPublicProfile()
        .then(({data}) => {
            setUser(data.content)
        })
        .catch(error => {
            console.log(error)
        })
    },[])


    const changeUserInfo = (key, value) => {
        setUser({...user,[key]: value})
    }

  return (
   <div className='relative'>
        <div className='flex mt-[10px] mb-[70px]'>
                <div className='w-[20%]'>
                    <h6 className='text-[20px] font-semibold'>Hồ sơ của bạn</h6>
                    <p className='mt-[8px] mb-[16px] font-light text-[15px]'>Chúng tôi rất muốn biết thêm thông tin về bạn.</p>
                </div>
                <div className='w-[60%] px-[30px] '>
                    <div className='flex gap-[20px]'>
                        <URL url ={user?.url} changeUserInfo={changeUserInfo}/>
                        <DisplayName full_name ={user?.full_name} changeUserInfo={changeUserInfo} />
                    </div>


                    <div className='flex gap-[20px] mt-[36px]'>
                        <Birthday birthday = {user?.birthday} changeUserInfo={changeUserInfo}/>
                        <Role role_id = {user?.role_id} changeUserInfo={changeUserInfo} />
                    </div>
                    <Avatar avatar={user?.avatar} user={user} changeUserInfo={changeUserInfo}/>

                    <div className='mt-[36px]'>
                        <div>
                            <p className='font-light mb-[16px]'>
                            Reviewer có thể thông báo cho tôi bằng email được cá nhân hóa về sản phẩm và dịch vụ. Xem
                                <strong className='font-semibold cursor-pointer'> Chính sách quyền riêng tư </strong> 
                                của chúng tôi để biết thêm chi tiết.
                            </p>
                        </div>
                        
                        <div className='pl-[25px] relative flex items-center mb-[30px] w-fit cursor-pointer'
                            onClick={()=>{setChecked(!checked)}}                        
                        >
                            <div className='absolute w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#d3d3d3] top-[50%] -translate-y-[50%] left-0 '
                            
                            >
                                {checked && <div className='absolute w-[10px] h-[10px] rounded-[2px] bg-black top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] '></div>}
                            </div>
                            <p className=' font-light'>Vui lòng liên hệ với tôi qua email</p>
                        </div>

                    </div>

                </div>
                <SaveChangeBtn user={user} />
        </div>
   </div>
  )
}

export default PublicProfile