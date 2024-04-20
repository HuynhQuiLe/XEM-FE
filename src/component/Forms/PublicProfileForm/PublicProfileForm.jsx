import React from 'react'
import URLPublicProfileInput from '../../Inputs/URLPublicProfileInput/URLPublicProfileInput.jsx';
import DisplayNameInput from '../../Inputs/DisplayNameInput/DisplayNameInput.jsx';
import BirthdayInput from '../../Inputs/BirthdayInput/BirthdayInput.jsx';
import RoleSelect from '../../Selects/RoleSelect/RoleSelect.jsx';
import AvatarInput from '../../Inputs/AvatarInput/AvatarInput.jsx';
import PublicProfileRadio from '../../Radios/PublicProfileRadio/PublicProfileRadio.jsx';

const PublicProfileForm = ({user, changeUserInfo, checked, setChecked}) => {
  return (
    <div className='w-[60%] px-[30px] '>
        <div className='flex gap-[20px]'>
            <URLPublicProfileInput url ={user?.url} changeUserInfo={changeUserInfo}/>
            <DisplayNameInput full_name ={user?.full_name} changeUserInfo={changeUserInfo} />
        </div>


        <div className='flex gap-[20px] mt-[36px]'>
            <BirthdayInput birthday = {user?.birthday} changeUserInfo={changeUserInfo}/>
            <RoleSelect role_id = {user?.role_id} changeUserInfo={changeUserInfo} />
        </div>
        <AvatarInput avatar={user?.avatar} user={user} changeUserInfo={changeUserInfo}/>

        <PublicProfileRadio checked={checked} setChecked={setChecked} />

    </div>
  )
}

export default PublicProfileForm