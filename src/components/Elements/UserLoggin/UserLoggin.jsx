import React from 'react'
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {userSer} from '../../../api/api';
import New from '../../Vendors/NumberNotification/New';
import Avatar from '../../Photos/Avatar/Avatar';
import SubMenu from '../SubMenu/SubMenu';

const UserLoggin = () => {

    const [profile, setProfile] = useState(null)
    useEffect(() => {
        userSer.getUrl()
        .then(({data}) => {
            setProfile(data.content)
        })
        .catch(error => {
            console.log(error)
        })

    },[])

    


  return (
    <div className='group relative'>
        <div className='relative'>
            <Avatar size={32} full_name={profile?.full_name} avatar={profile?.avatar} />
           <New withCirlcle={true} showAtAvatar = {true}/>
        </div>
        <SubMenu profile={profile}/>
    </div>
    
    )
}

export default UserLoggin