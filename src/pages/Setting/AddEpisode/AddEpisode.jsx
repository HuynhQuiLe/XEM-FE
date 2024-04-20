import React, { useState } from 'react'
import { removeTone } from '../../../utils/convert/convertTone';
import AddEpisodeForm from '../../../component/Forms/AddEpisodeForm/AddEpisodeForm';
import CreateEpisodeFilmButton from '../../../component/Buttons/CreateEpisodeFilmButton';


const AddEpisode = () => {
    const [checked, setChecked] = useState(true)

    const [folderName, setFolderName] = useState({
        film_name: '',
        session_number:''
    })

    const [episode, setEpisode] =useState({
        film_id: null,
        session_id: null,
        episode_name: '',
        video: null,
        status_id: 2
    })

    const [error, setError] =useState({
        episode_name: '',
    })

  const changeEpisode = (key, value) => {
    setEpisode({...episode, [key]: value})
    if(key === 'episode_name' && !value.trim()) {
        setError({...error, [key]: 'Trường này là bắt buộc.'})
    } else {
        setError({...error, [key]: ''})
    }
  }

  const changeFolderName = (key, value) => {
    let convert = removeTone(value).replaceAll(' ','-')
    setFolderName({...folderName, [key]: convert})
  }

  return (
    <div className='relative'>
    <div className='flex mt-[10px] mb-[70px]'>
            <div className='w-[20%]'>
                {/* <h6 className='text-[20px] font-semibold'>Thêm tập phim</h6> */}
            </div>
            <AddEpisodeForm 
                episode = {episode}
                changeEpisode = {changeEpisode}
                checked = {checked}
                setChecked = {setChecked}
                changeFolderName = {changeFolderName}
                error={error}
            />
            <CreateEpisodeFilmButton episode={episode} folderName={folderName} />
    </div>
</div>
  )
}

export default AddEpisode