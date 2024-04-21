import React from 'react'
import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {sessionSer} from '../../api/api';
import {notify} from '../../utils/notify/notify';
import {notificationLocalStorage} from '../../api/localStorage';
import UploadingBar from '../Vendors/UploadingBar/UploadingBar';
import NormalLoadingCircle from '../Icons/Loading/NormalLoadingCircle';

const CreateSessionFilmButton = ({session}) => {
    const [downloadURL, setDownloadURL] = useState(null)
    const [progress, setProgress] = useState(0)
    const [disabled, setDisabled] = useState(false)
    const {isLoading} =useSelector(state => state.minusLoadingSlice)
  
  
    useEffect(() => {
      //validation
      if(!session.film_id || !session.url.trim() 
      || !session.session_name.trim() 
      || !session.session_other_name.trim()
      || !session.session_number.trim()
      || !session.published_date.trim()
      || !session.duration.trim()
      || !session.description.trim()
      || !session.poster ){
        setDisabled(true)
      } else {
        setDisabled(false)
      }
    },[session])
  
  
    useEffect(() => {
  
      if(downloadURL) {
        // upadte link
        session.poster = downloadURL
  
        sessionSer.addSession(session)
        .then((response) => {
          setDisabled(false)
          notificationLocalStorage.set(response.data.message)
          window.location.reload()
        })
        .catch((error) => {
          console.log(error)
          error?.response?.data.message && notify.success(error.response.data.message)
      });
      }
    },[downloadURL])
  
    const createSession = () => {
      console.log(session)
      // setDisabled(true)
      //  // tien hanh upload cover
      // if(session.poster && typeof session.poster === 'object') {
      //   let file = session.poster
      //   upload.poster(file, setProgress, setDownloadURL)
      //   // hien thi thong bao cho upload
      // } else {
      //   setDisabled(false)
      //   notify.success('Đã có lỗi xảy ra với ảnh poster.')
      // }
    }
  
    return (
      <div className='w-[20%] sticky top-[50px] h-[150px]'>
          <button className= {` ${disabled ? ' cursor-not-allowed' : ' cursor-pointer'} relative text-[20px] font-[400] rounded-[8px] bg-black text-white w-full h-[72px] mb-[16px]`}
            onClick={createSession}
            disabled = {disabled}
          >
           
              {isLoading ? <NormalLoadingCircle/> : 'Thêm phần phim' }
          </button>
          <p className='mt-[8px] mb-[16px] font-light text-[15px]'>Vui lòng thêm phim mới <strong className=' font-semibold'>trước khi</strong> thêm phần phim.</p>
          <UploadingBar progress={progress} />
      </div>
    )
  }

export default CreateSessionFilmButton