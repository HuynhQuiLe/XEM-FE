import React from 'react'
import FormAddReview from './elements/FormAddReview'
import './AddReview.css'


const AddReview = () => {
 
  return (
    <>
        <div className='w-[20%] h-[65px] mt-[55px]'>
            <h6 className='text-[20px] font-semibold'>Quản lý bài viết đánh giá</h6>
            <div className='flex items-center my-[10px]'>
                <i className="fa fa-sliders-h"></i>
                <p className='mx-[8px]'> &gt;</p>
                <p className='font-light'>Thêm bài viết</p>
            </div>
        </div>
    
        <div className='flex mt-[10px] pt-[55px]'>
            <div className='w-[20%] leading-[180%] add-review__sticky h-fit'>
                <h6 className='text-[20px] font-semibold'>Mẹo vặt</h6>
                <p className='mt-[8px] mb-[16px] font-light text-[15px]'>
                    Để bài đánh giá của bạn thêm <strong className=' font-semibold'>sinh động</strong> và <strong className=' font-semibold'>bắt mắt</strong> hơn, bạn có thể thêm vào các ký tự sau:
                </p>
                <ul>
                    <li className='font-light pl-4'><span className='pr-2'>-</span><span className='font-semibold'>{'<br/>'}</span><span className='ml-3'>Để ngắt dòng</span></li>
                    <li className='font-light pl-4'><span className='pr-2'>-</span><span className='font-semibold'>{'<b></b>'}</span><span className='ml-3'>Để tô đậm</span></li>
                </ul>
                <p className='mt-[8px] mb-[16px] font-light text-[15px]'>Nếu có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi <span className='link-text inline-block font-light'>tại đây</span>.</p>
            </div>
            <div className='w-[60%] px-[30px] '>
            <FormAddReview/>
            </div>
            <div className='w-[20%] add-review__sticky h-fit'>
                <button className='relative text-[20px] font-[400] rounded-[8px] bg-black text-white w-full h-[72px] mb-[16px]'
                >
                    <span> 
                        Lưu thay đổi
                    </span>
                </button>
                <p className='mt-[8px] mb-[16px] font-light text-[15px]'>Luôn nhớ lưu thay đổi trước khi bạn rời khỏi nhé.</p>
            </div>
        </div>
    </>

  )
}

export default AddReview