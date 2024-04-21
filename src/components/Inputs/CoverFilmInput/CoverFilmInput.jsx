import React from 'react'
import {useEffect, useState} from 'react';

const CoverFilmInput = ({film, changeFilm, error, validation}) => {
    const [preview, setPreview] = useState(false)

    useEffect(() => {
        //khi thay doi du lieu thi prview photo van giu nguyen
        if(preview) {
            let reader = new FileReader();
            reader.readAsDataURL(preview);
            reader.onload = function (oFREvent) {
                document.getElementById("showPreviewCover").src = oFREvent.target.result;
            }
        }
    },[film])

    const PreviewPicture = () => {
        return (
            <div className='group absolute w-[300px] h-[225px] top-0 left-0 z-[2] rounded-[5px] overflow-hidden   '>
                <img id="showPreviewCover" alt="preview photo" className='w-full h-full object-cover '  />
                <div className=' absolute w-full h-full top-0 left-0 bg-overlay_avatar_hover opacity-0 group-hover:opacity-100 transition-default z-[3] '></div>
                <button className=' absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-black text-white opacity-0 group-hover:opacity-100 transition-default z-[4] h-[40px] flex gap-[8px] items-center justify-center px-[20px] rounded-[8px] hover:bg-red-600'
                    onClick={() => {
                        setPreview(false)
                        changeFilm('cover', null)
                        validation('cover', 'Trường này là bắt buộc.')
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
                <label htmlFor="cover" className=' flex flex-col justify-between items-center py-2 w-[300px] h-[225px] rounded-[5px] bg-white  transition-default cursor-pointer border-[1px] border-gray hover:border-black'>
                    
                    <span className=' font-light flex flex-col justify-center items-center'>
                        <span className='link-text block text-center'>Browse</span> 
                        to choose your file.
                    </span>

                    <span className='block text-center'>
                        <i className="fa fa-cloud-upload-alt text-[25px]"></i>
                    </span>

                    <span className='block font-semibold text-center'>
                        <span className='block'>Recommended size: </span>
                        <span className='block'>3000x2250px.</span> 
                        <span className='block'>10MB max.</span>
                    </span>

                   
                </label>
                <input type="file" accept="image/*"  className='input-default hidden' name="cover" id="cover"
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
          document.getElementById("showPreviewCover").src = oFREvent.target.result;
        };

        setPreview(files[0]);

        changeFilm('cover', files[0])
        validation('cover', '')
    }
  return (
    <div className='mt-[36px]'>
        <div>
            <label  className='label-text '>cover (*)</label>
        </div>
        <SelectPicture/>
        <div className='pt-[10px]'>
            { error.cover && <span className=' text-error text-[12px] font-light ml-1'>{error.cover}</span>}
        </div>
    </div>
  )
}

export default CoverFilmInput