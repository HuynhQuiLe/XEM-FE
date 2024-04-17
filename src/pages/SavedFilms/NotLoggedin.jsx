import React from 'react'
import {setIsOpenedModalLogin} from '../../redux/modalSlice';
import {useDispatch} from 'react-redux';

const NotLoggedin = () => {
  const dispatch = useDispatch()

    return (
        <div className='pt-[55px]'>
        <div>
          <div className='flex items-start justify-between'>
              <h2 className='flex-1 leading-[120%] text-[45px] font-semibold'>Phim theo dõi</h2>
              <div className='flex-1'>
                <p className='font-light text-[16px] leading-[200%]'>Bạn cần <b className=' font-semibold'>đăng nhập</b> tài khoản để có thể sử dụng tính năng <b className='font-semibold'>follow</b> phim.</p>
                <p className='link-text mt-[30px]' onClick={() => dispatch(setIsOpenedModalLogin())} >Đăng nhập</p>
              </div> 
          </div>
    
          <div className='mt-[80px] w-full'>
                <table className='w-full border-separate border-spacing-0' >
                  <thead>
                    <tr className='w-full'>
                      <th className='text-start p-[28px] font-normal dot-line-buttom'></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className=' p-[28px] dot-line-buttom text-center font-semibold text-[24px] bg-light_gray_2  '>
                        <i className="fa fa-info-circle text-[40px] mb-[16px]"></i>
                        <p>Danh sách phim đang theo dõi trống.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
          </div>
        </div>
      </div>
    )
}

export default NotLoggedin