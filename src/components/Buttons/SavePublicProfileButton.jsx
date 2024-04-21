import React from 'react'
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {userSer} from '../../api/api';
import {notificationLocalStorage} from '../../api/localStorage';
import {notify} from '../../utils/notify/notify';
import {upload} from '../../utils/upload/upload';
import NormalLoadingCircle from '../Icons/Loading/NormalLoadingCircle';
import UploadingBar from '../Vendors/UploadingBar/UploadingBar';

const SavePublicProfileButton = ({user}) => {
  const [downloadURL, setDownloadURL] = useState(null)
  const [progress, setProgress] = useState(0)
  const {isLoading} =useSelector(state => state.minusLoadingSlice)
  const [disabled, setDisabled] = useState(false)


  useEffect(() => {
    //validation
    if(!user?.full_name.trim() || !user?.url.trim() || !user?.role_id)  {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  },[user])


  useEffect(() => {
    if(downloadURL) {
      // update avatar link
      user.avatar = downloadURL

      userSer.updatePublicProfile(user)
      .then((response)=>{
        setDisabled(false)
        notificationLocalStorage.set(response.data.message)
        window.location.reload()
      })
      .catch((error) => {
        setDisabled(false)
        error?.response?.data.message && notify.success(error.response.data.message)})
      
    }
    },[downloadURL])

  const save = () => {
    setDisabled(true)
    // tien hanh upload cover
    if(user.avatar && typeof user.avatar === 'object') {
      let file = user.avatar
      upload.avatar(file, setProgress, setDownloadURL)
    } else {
      userSer.updatePublicProfile(user)
      .then(({data})=>{
        notificationLocalStorage.set(data.message)
        window.location.reload()
      })
      .catch((error) => {
        setDisabled(false)
        error?.response?.data.message && notify.success(error.response.data.message)
      });
    }
  }
  return (
    <div className='w-[20%]'>
        <button className={`text-[20px] relative font-[400] rounded-[8px] bg-black text-white w-full h-[72px] mb-[16px] ${disabled ? 'cursor-not-allowed opacity-75' : 'cursor-pointer opacity-100'}`} onClick={save}
        
          disabled= {disabled}
        >
          
          {isLoading ? <NormalLoadingCircle/> : "Lưu thay đổi"}
        </button>
        <p className='mt-[8px] mb-[16px] font-light text-[15px]'>Luôn nhớ lưu thay đổi trước khi bạn rời khỏi nhé.</p>
        <UploadingBar  progress={progress}/>
    </div>
  )
}

export default SavePublicProfileButton