import React, { useState } from 'react'
import SelectFilm from './SelectFilm';
import SelectSession from './SelectSession';
import Video from './Video';
import EpisodeNumber from './EpisodeNumber';
import SaveChange from './SaveChange';
import StatusFilm from './StatusFilm';
import { removeTone } from '../../../utils/convert/convertTone';


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
            <div className='w-[60%] px-[30px] '>
                <div className='flex gap-[20px]'>
                    <SelectFilm film_id ={episode.film_id} changeEpisode={changeEpisode} changeFolderName={changeFolderName}/>
                </div>

                <div className='flex gap-[20px] mt-[36px]'>
                    <SelectSession session_id ={episode.session_id} film_id ={episode.film_id} changeEpisode={changeEpisode} changeFolderName={changeFolderName}/>
                </div>

                <div className='flex gap-[20px] mt-[36px]'>
                    <EpisodeNumber episode_name={episode.episode_name} changeEpisode={changeEpisode} error={error.episode_name}/>
                </div>

                <div className='flex gap-[20px] mt-[36px]'>
                    <StatusFilm status_id ={episode.status_id} changeEpisode={changeEpisode}/>
                </div>

               
                <Video video={episode.video} episode={episode} changeEpisode={changeEpisode}/>

                <div className='mt-[36px]'>
                    <div className='pl-[25px] relative flex items-center mb-[30px] w-fit cursor-pointer'
                        onClick={()=>{setChecked(!checked)}}                        
                    >
                        <div className='absolute w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#d3d3d3] top-[50%] -translate-y-[50%] left-0 '
                        
                        >
                            {checked && <div className='absolute w-[10px] h-[10px] rounded-[2px] bg-black top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] '></div>}
                        </div>
                        <p className=' font-light'>Gửi thông báo đến người dùng đang theo dõi phim.</p>
                    </div>

                </div>

            </div>
            <SaveChange episode={episode} folderName={folderName} />
    </div>
</div>
  )
}

export default AddEpisode