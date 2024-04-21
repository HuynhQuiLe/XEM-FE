import React from 'react'
import {useState, useEffect} from 'react';
import { userSer } from '../../../api/api.js';
import PublicProfileForm from '../../../components/Forms/PublicProfileForm/PublicProfileForm.jsx';
import SavePublicProfileButton from '../../../components/Buttons/SavePublicProfileButton.jsx';

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
                <PublicProfileForm user={user} changeUserInfo={changeUserInfo} checked={checked} setChecked={setChecked} />
                <SavePublicProfileButton user={user} />
        </div>
   </div>
  )
}

export default PublicProfile