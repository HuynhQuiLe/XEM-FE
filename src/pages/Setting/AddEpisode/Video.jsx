import React, { useEffect, useState } from 'react'

const Video = ({episode, video, changeEpisode}) => {
    const [preview, setPreview] = useState(false)

    useEffect(() => {
        //khi thay doi du lieu thi prview photo van giu nguyen
        if(preview) {
            let reader = new FileReader();
            reader.readAsDataURL(preview);
            reader.onload = function (oFREvent) {
                document.getElementById("showPreviewVideo").src = oFREvent.target.result;
            }
        }
    },[episode])


    const PreviewPicture = () => {
        return (
            <div className='group absolute w-[198px] h-[198px] top-0 left-0 z-[2] rounded-[5px] overflow-hidden   '>
                <video className='w-full h-full object-cover' alt="preview video"  controls >
                    <source  id="showPreviewVideo"/>
                    Your browser does not support HTML5 video.
                </video>
                {/* <img id="showPreviewVideo" alt="preview photo" className='w-full h-full object-cover grayscale '  /> */}
                <div className=' absolute w-full h-full top-0 left-0 bg-overlay_avatar_hover opacity-0 group-hover:opacity-100 transition-default z-[3] '></div>
                <button className=' absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-black text-white opacity-0 group-hover:opacity-100 transition-default z-[4] h-[40px] flex gap-[8px] items-center justify-center px-[20px] rounded-[8px] hover:bg-red-600'
                    onClick={() => {
                        setPreview(false)
                        changeEpisode('video', null)
                    
                    }}
                >
                    <i className="fa fa-trash-alt"></i>
                    <p>Remove</p>
                </button>
            </div>
        )
    }

    const SelectPicture = () => {
        return (
            <div className='relative'>
                <label htmlFor="video" className=' flex justify-center items-center py-2 w-[198px] h-[198px] rounded-[5px] bg-white  transition-default cursor-pointer border-[1px] border-gray hover:border-black'>
                    <div>
                        <span className=' font-light flex flex-col justify-center items-center'>
                            <span className='link-text block text-center'>Browse</span> 
                            to choose your video.
                        </span>

                        <span className='block text-center mt-2'>
                            <i className="fa fa-cloud-upload-alt text-[25px]"></i>
                        </span>
                    </div>
                   
                </label>
                <input type="file"   className='input-default hidden' name="video" id="video"
                    onChange={handlePreview}
                />
                {preview && <PreviewPicture/>}
            </div>
        )
    }



    const handlePreview = (e) => {

        // code chay khi chua select input lan nao
        let files = e.target.files;
        let f = files[0];
    
        // show preview
        let reader = new FileReader();
        reader.readAsDataURL(f);
        reader.onload = function (oFREvent) {
          document.getElementById("showPreviewVideo").src = oFREvent.target.result;
        };

        console.log(files[0].name)

        setPreview(files[0]);
        changeEpisode('video', files[0])
    }


  return (
    <div className='mt-[36px]'>
        <div>
            <label  className='label-text '>video <span>{preview ? ' - ' + preview.name: null}</span></label>
        </div>
        <SelectPicture/>
    </div>
  )
}

export default Video