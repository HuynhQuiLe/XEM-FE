import React from 'react'
import { notify } from '../../../../../utils/notify/notify'

const DeleteAccount = () => {
  return (
    <div className='flex mt-[10px] gap-[50px]'>
        <div className='w-[30%]'>
            <h6 className='text-[20px] font-semibold text-error'>Unhappy?</h6>
            <p className='mt-[8px] mb-[16px] font-light text-[15px]'>Chúng tôi sẽ rất buồn khi bạn rời đi, nhưng nếu bạn muốn xóa vĩnh viễn tài khoản của mình và tất cả dữ liệu thì đây sẽ là nơi để bạn làm việc đó.</p>
        </div>
        <div className='w-[70%]  '>
            <div className='flex items-center p-[40px] rounded-[8px] w-full bg-light_gray_2 font-light'>
                <p>Bạn chắc chắn muốn xoá tài khoản chứ?</p>
                <i className="fa fa-trash-alt mx-4"></i>
                <p className='link-text' 
                
                onClick={()=> 
                  notify.success('Tính năng đang bảo trì.')
                }>Xoá tài khoản</p>
            </div>    
        </div>

        
    </div>
  )
}

export default DeleteAccount