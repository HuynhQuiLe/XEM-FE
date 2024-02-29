import React, { useState } from 'react'

const Content = () => {
    const [showAddBtn, setShowAddBtn] = useState(false)




    const indexInput = 
    `<div class='mb-[36px]'>
        <div>
            <label htmlFor="" class='label-text '>Tiêu đề(*)</label>
        </div>
        <div>
            <textarea rows={1}
            class='w-full outline-none border-b-[1px] border-gray  focus:border-black transition-default p-[16px]' 
            placeholder='Tiêu đề bài viết'
            ></textarea>
        </div>
    </div>`

    const handleClickIndex = () => {
        setShowAddBtn(false)

        document.querySelector("#addField").innerHTML+= indexInput
        
    

    }


    return (
        <div className='mt-[36px]'>
            <div>
                <label htmlFor="" className='label-text '>Nội dung (*)</label>
                
                <div id='addField' ></div>

                <div className=' flex gap-[30px] items-center'>
                    <div className=' relative w-[50px] h-[50px] rounded-full border-[1px] border-line hover:bg-black hover:text-white transition-default cursor-pointer flex items-center justify-center'
                        onClick={() => setShowAddBtn(!showAddBtn)}
                    >
                        <i className="fa fa-plus text-[20px]"></i>
                    </div>

                    <div className={`flex gap-[15px] ${showAddBtn ? 'opacity-100' : 'opacity-0' } transition-default `}>
                        <span className='border-[1px] px-3 py-1 rounded-[16px] border-line inline-block cursor-pointer hover:bg-black hover:text-white transition-default'
                            onClick={handleClickIndex}
                        >Đề mục</span>
                        <span className='border-[1px] px-3 py-1 rounded-[16px] border-line inline-block cursor-pointer hover:bg-black hover:text-white transition-default'>Ý chính</span>
                        <span className='border-[1px] px-3 py-1 rounded-[16px] border-line inline-block cursor-pointer hover:bg-black hover:text-white transition-default'>Đoạn văn</span>
                        <span className='border-[1px] px-3 py-1 rounded-[16px] border-line inline-block cursor-pointer hover:bg-black hover:text-white transition-default'>Nút CTA</span>
                        <span className='border-[1px] px-3 py-1 rounded-[16px] border-line inline-block cursor-pointer hover:bg-black hover:text-white transition-default'>Hình ảnh</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content