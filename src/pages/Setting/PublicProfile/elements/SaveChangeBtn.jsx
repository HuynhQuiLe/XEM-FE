import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadingCircle from '../../../../components/LoadingCircle/LoadingCircle';
import {useState} from 'react';
import { uploadSer, userSer } from '../../../../api/api';
import { notificationLocalStorage } from '../../../../api/localStorage';

const SaveChangeBtn = ({user}) => {
  const dispatch = useDispatch()
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

  const save = () => {
    if(user.avatar && typeof user.avatar === 'object') {
      const  dataPhoto = new FormData();
      //upload avatar truoc
      dataPhoto.append("avatar", user.avatar);
      uploadSer.avatar(dataPhoto)
        .then(({ data }) => {
          user.avatar = data.content
        })
        .then(() => {
          //tien hanh upload
          userSer.updatePublicProfile(user)
          .then((response)=>{
            notificationLocalStorage.set(response.data.message)
            window.location.reload()
          })
        })
        
        .catch((error) => {
          console.log(error)
        });
    } else {
      userSer.updatePublicProfile(user)
      .then(({data})=>{
        notificationLocalStorage.set(data.message)
        window.location.reload()
      })
      .catch((error) => {
        console.log(error)
      });
    }

   


    // setLoading(true)
    // userSer.updatePublicProfile(user)
    // .then(({data}) => {
    //   notificationLocalStorage.set(data.message)
    //   setTimeout(() => {
    //     setLoading(false)
    //     window.location.reload()  
    //   }, 1000);

    // })
    // .catch(error => {
    //   setLoading(false)
    //   console.log(error)
    // })
  }
  return (
    <div className='w-[20%]'>
        <button className={`text-[20px] relative font-[400] rounded-[8px] bg-black text-white w-full h-[72px] mb-[16px] ${disabled ? 'cursor-not-allowed opacity-75' : 'cursor-pointer opacity-100'}`} onClick={save}
        
          disabled= {disabled}
        >
          
          {isLoading ? <LoadingCircle/> : "Lưu thay đổi"}
        </button>
        <p className='mt-[8px] mb-[16px] font-light text-[15px]'>Luôn nhớ lưu thay đổi trước khi bạn rời khỏi nhé.</p>
    </div>
  )
}

export default SaveChangeBtn