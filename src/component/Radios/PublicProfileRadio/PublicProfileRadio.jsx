import React from 'react'

const PublicProfileRadio = ({checked, setChecked}) => {
  return (
    <div className='mt-[36px]'>
            <div>
                <p className='font-light mb-[16px]'>
                <strong className='font-semibold cursor-pointer'>XEM.</strong> có thể thông báo cho tôi bằng email được cá nhân hóa về sản phẩm và dịch vụ. Xem
                    <strong className='font-semibold cursor-pointer'> Chính sách quyền riêng tư </strong> 
                    của chúng tôi để biết thêm chi tiết.
                </p>
            </div>
            
            <div className='pl-[25px] relative flex items-center mb-[30px] w-fit cursor-pointer'
                onClick={()=>{setChecked(!checked)}}                        
            >
                <div className='absolute w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#d3d3d3] top-[50%] -translate-y-[50%] left-0 '
                
                >
                    {checked && <div className='absolute w-[10px] h-[10px] rounded-[2px] bg-black top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] '></div>}
                </div>
                <p className=' font-light'>Vui lòng liên hệ với tôi qua email</p>
            </div>

        </div>
  )
}

export default PublicProfileRadio