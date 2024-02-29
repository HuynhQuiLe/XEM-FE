import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCheckBox, setErrCheckBox } from '../../../redux/authSlice'

const Term = () => {
    const dispatch = useDispatch()
    const {checkBox, errCheckBox} = useSelector(state => state.authSlice)

  return (
    <>
        <div className='mb-[16px]'>
            <p className='font-light leading-[200%]'>Reviewer có thể thông báo cho tôi bằng email được cá nhân hóa về sản phẩm và dịch vụ. Xem <b className='font-bold'>Chính sách quyền riêng tư</b> của chúng tôi để biết thêm chi tiết.</p>
        </div>
        <div className='pl-[25px] relative flex items-center mb-[20px] w-fit cursor-pointer'
            onClick={()=>{
                dispatch(setCheckBox({email: !checkBox.email}))
                if(!checkBox.email && checkBox.term ) {
                    dispatch(setErrCheckBox(''))
                }
        
            }}                        
        >
            <div className='absolute w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#d3d3d3] top-[50%] -translate-y-[50%] left-0 '
            
            >
                {checkBox.email && <div className='absolute w-[10px] h-[10px] rounded-[2px] bg-black top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] '></div>}
            </div>
            <p className=' font-light'>Liên hệ với tôi qua email</p>
        </div>

        <div className='pl-[25px] relative flex items-center  w-fit cursor-pointer'
            onClick={()=>{
                dispatch(setCheckBox({term: !checkBox.term}))
                if(checkBox.email && !checkBox.term ) {
                    dispatch(setErrCheckBox(''))
                }
            }}                        
        >
            <div className='absolute w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#d3d3d3] top-[50%] -translate-y-[50%] left-0 '
            
            >
                {checkBox.term && <div className='absolute w-[10px] h-[10px] rounded-[2px] bg-black top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] '></div>}
            </div>
            <p className=' font-light'>Tôi đã đọc và đồng ý với các điều khoản.</p>
        </div>

        {errCheckBox && 
        <div className='pt-[10px] mb-[20px]'>
            <p className=' text-error text-[12px] font-light'>{errCheckBox}</p>
        </div>}

        <div className='my-[24px]'>
            <small className='font-light'>Trang web này được bảo vệ bởi reCAPTCHA và áp dụng Chính sách quyền riêng tư cũng như Điều khoản dịch vụ của Google.</small>
        </div>
    </>
  )
}

export default Term