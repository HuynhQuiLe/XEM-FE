import React, {useState} from 'react'
import LoadingCircle from '../../../components/LoadingCircle/LoadingCircle'
import {useEffect} from 'react';
import { useSelector } from 'react-redux';
import {episodeSer} from '../../../api/api';
import {notify} from '../../../utils/notify/notify';
import {notificationLocalStorage} from '../../../api/localStorage';
import {upload} from '../../../utils/upload/upload';
import UploadingBar from '../../../components/Bar/UploadingBar';


const SaveChange = ({episode, folderName}) => {
  const [downloadURL, setDownloadURL] = useState(null)
  const [progress, setProgress] = useState(0)
  const [disabled, setDisabled] = useState(false)
  const {isLoading} =useSelector(state => state.minusLoadingSlice)
  const [warning, setWarning] = useState(null)
 
  useEffect(() => {
    //validation
    if(!episode.film_id ||
    !episode.session_id ||
    !episode.episode_name ||
    !episode.video ){
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  },[episode])


  useEffect(() => {
    if(downloadURL) {
      episode.video = downloadURL

      episodeSer.addEpisode(episode)
      .then((response) => {
        setWarning(false)
        setDisabled(false)
        notificationLocalStorage.set(response.data.message)
        window.location.reload()
      })
      .catch((error) => {
        setDisabled(false)
        setWarning(false)
        error?.response?.data.message && notify.success(error.response.data.message)
      });
      
    }
    },[downloadURL])


    const create = () => {
      episode.episode_name = episode.episode_name.toUpperCase().replaceAll(' ','')

      setDisabled(true)

      setWarning('Dung lượng video rất lớn. Vui lòng chờ.')

      // tien hanh dua len data base
      if(episode.video && typeof episode.video === 'object') {
        let file = episode.video
        upload.video(file, setProgress, setDownloadURL, folderName )
         
       
     } else {
       setDisabled(false)
       setWarning(null)
       notify.success('Đã có lỗi xảy ra với video.')
     }
    }



  return (
    <div className='w-[20%] sticky top-[50px] h-[150px]'>
         <button className= {` ${disabled ? ' cursor-not-allowed' : ' cursor-pointer'} relative text-[20px] font-[400] rounded-[8px] bg-black text-white w-full h-[72px] mb-[16px]`}
          onClick={create}
          disabled = {disabled}
        >
            {isLoading ? <LoadingCircle/> : 'Thêm tập' }
        </button>
        {!warning && <p className='mt-[8px] mb-[16px] font-light text-[15px]'>Hãy đảm bảo <strong className='font-semibold'>phim</strong> và <strong className=' font-semibold'>phần phim</strong> là chính xác nhé.</p>}
        {warning && <p className='mt-[8px] mb-[16px] font-light text-[15px]'>{warning}</p>}
        <UploadingBar progress={progress} />
    </div>
  )
}

export default SaveChange