import React, { useEffect, useState } from 'react'

const Avatar = ({user, avatar, changeUserInfo}) => {
    const [preview, setPreview] = useState(false)

    useEffect(() => {
        //khi thay doi du lieu thi prview photo van giu nguyen
        if(preview) {
            let reader = new FileReader();
            reader.readAsDataURL(preview);
            reader.onload = function (oFREvent) {
                document.getElementById("showPreview").src = oFREvent.target.result;
            }
        }
    },[user])

    const Picture = () => {
        return (
            <div className='group absolute w-[198px] h-[198px] top-0 left-0 z-[2] rounded-[5px] overflow-hidden  '>
                <img src={avatar} alt="avatar" className='w-full h-full object-cover grayscale '  />
                <div className=' absolute w-full h-full top-0 left-0 bg-overlay_avatar_hover opacity-0 group-hover:opacity-100 transition-default z-[3] '></div>
                <button className=' absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-black text-white opacity-0 group-hover:opacity-100 transition-default z-[4] h-[40px] flex gap-[8px] items-center justify-center px-[20px] rounded-[8px] hover:bg-red-600'
                    onClick={() => changeUserInfo('avatar', null)}
                >
                    <i className="fa fa-trash-alt"></i>
                    <p>Remove</p>
                </button>
            </div>
        ) 
    }

    const PreviewPicture = () => {
        return (
            <div className='group absolute w-[198px] h-[198px] top-0 left-0 z-[2] rounded-[5px] overflow-hidden   '>
                <img id="showPreview" alt="preview photo" className='w-full h-full object-cover grayscale '  />
                <div className=' absolute w-full h-full top-0 left-0 bg-overlay_avatar_hover opacity-0 group-hover:opacity-100 transition-default z-[3] '></div>
                <button className=' absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-black text-white opacity-0 group-hover:opacity-100 transition-default z-[4] h-[40px] flex gap-[8px] items-center justify-center px-[20px] rounded-[8px] hover:bg-red-600'
                    onClick={() => {
                        setPreview(false)
                        changeUserInfo('avatar', null)
                    
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
                <label htmlFor="avatar" className=' flex flex-col justify-between items-center py-2 w-[198px] h-[198px] rounded-[5px] bg-white  transition-default cursor-pointer border-[1px] border-gray hover:border-black'>
                    
                    <span className=' font-light flex flex-col justify-center items-center'>
                        <span className='link-text block text-center'>Browse</span> 
                        to choose your file.
                    </span>

                    <span className='block text-center'>
                        <i className="fa fa-cloud-upload-alt text-[25px]"></i>
                    </span>

                    <span className='block font-semibold text-center'>
                        <span className='block'>Recommended size: </span>
                        <span className='block'>400x400px.</span> 
                        <span className='block'>400KB max.</span>
                    </span>

                   
                </label>
                <input type="file"   className='input-default hidden' name="avatar" id="avatar"
                    onChange={handlePreview}
                />
                {avatar && <Picture/>}
                {preview && <PreviewPicture/>}
            </div>
        )
    }



    const handlePreview = (e) => {

        console.log('han1')

        // // code chay khi da luu input
        // if(preview) {
        // console.log('chayn2')

        //     let reader = new FileReader();
        //     reader.readAsDataURL(preview);
        //     reader.onload = function (oFREvent) {
        //     document.getElementById("showPreview").src = oFREvent.target.result;
        // };
        //     return
        // }
        

        // code chay khi chua select input lan nao
        let files = e.target.files;
        let f = files[0];
    
        // show preview
        let reader = new FileReader();
        reader.readAsDataURL(f);
        reader.onload = function (oFREvent) {
          document.getElementById("showPreview").src = oFREvent.target.result;
        };

        console.log('chayn1')
        setPreview(files[0]);


        changeUserInfo('avatar', files[0])
    }


    // if(preview) {
    //     console.log(avatar)
    //     console.log('han2')

    //     handlePreview()
    // }
  return (
    <div className='mt-[36px]'>
        <div>
            <label  className='label-text '>AVATAR</label>
        </div>
        <SelectPicture/>
    </div>
  )
}

export default Avatar