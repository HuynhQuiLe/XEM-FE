import React, {useState, useEffect} from 'react'
import LoadingCircle from '../../../../components/LoadingCircle/LoadingCircle';
import { useSelector } from 'react-redux';
import {filmSer} from '../../../../api/api';
import { notify } from '../../../../utils/notify/notify';
import { notificationLocalStorage } from '../../../../api/localStorage';
import {upload} from '../../../../utils/upload/upload';
import UploadingBar from '../../../../components/Bar/UploadingBar';

const SaveChange = ({film}) => {
  const [downloadURL, setDownloadURL] = useState(null)
  const [progress, setProgress] = useState(0)
  const [disabled, setDisabled] = useState(false)
  const [message, setMesage] = useState('Lưu thay đổi trước khi bạn rời khỏi nhé.')
  const {isLoading} =useSelector(state => state.minusLoadingSlice)


  useEffect(() => {
    //validation
    if(
      !film.film_name.trim() || 
      !film.film_other_name.trim() || 
      !film.cover)  {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  },[film])

  useEffect(() => {
  if(downloadURL) {
    film.cover = downloadURL
    filmSer.addFilm(film)
    .then((response) => {
      setDisabled(false)
      setMesage('Lưu thay đổi trước khi bạn rời khỏi nhé.')
      notificationLocalStorage.set(response.data.message)
      window.location.reload()
    })
    .catch((error) => {
      setDisabled(false)
      setMesage('Lưu thay đổi trước khi bạn rời khỏi nhé.')
      error?.response?.data.message && notify.success(error.response.data.message)})
    
  }
  },[downloadURL])

  
  const create = () => {
    if(!film.types.trim()) {
      film.types = "Chưa xác định"
    }
    setDisabled(true)
    // tien hanh upload cover
    if(film.cover && typeof film.cover === 'object') {
      let file = film.cover
      upload.cover(file, setProgress, setDownloadURL)
      // hien thi thong bao cho upload
      setMesage("Dung lượng ảnh khá lớn, vui lòng chờ.")
    } else {
      setDisabled(false)
      setMesage('Lưu thay đổi trước khi bạn rời khỏi nhé.')
      notify.success('Đã có lỗi xảy ra với ảnh cover.')
    }
  }


  return (
    <div className='w-[20%]'>
        <button className= {` ${disabled ? ' cursor-not-allowed' : ' cursor-pointer'} relative text-[20px] font-[400] rounded-[8px] bg-black text-white w-full h-[72px] mb-[16px]`}
                onClick={create}
                disabled = {disabled}
        >
            {isLoading ? <LoadingCircle/> : 'Thêm phim' }
        </button>
        <p className='mt-[8px] mb-[16px] font-light text-[15px]'>{message}</p>
        <UploadingBar progress={progress}/>

    </div>
  )
}

export default SaveChange