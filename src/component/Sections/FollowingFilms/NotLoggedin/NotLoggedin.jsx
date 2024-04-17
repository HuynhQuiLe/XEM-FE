import React from 'react'
import SectionHeading from '../../../Headings/SectionHeading/SectionHeading';
import LogginButton from '../../../Buttons/LogginButton';
import EmptyHead from '../../../Tables/Head/EmptyHead/EmptyHead';
import EmptyBody from '../../../Tables/Body/EmptyBody/EmptyBody';

const NotLoggedin = () => {

    return (
        <div className='pt-[55px]'>
        <div>
            <SectionHeading 
            heading1='Phim theo dõi'
            description={`<p class='font-light text-[16px] leading-[200%]'>Bạn cần <b class=' font-semibold'>đăng nhập</b> vào tài khoản định danh của bạn để sử dụng tính năng <b class='font-semibold'>follow</b> phim.</p>`}
            items_start={true}
            />

            <div className='flex items-start justify-between'>
                <div  className='flex-1'></div>
                <div className='flex-1'>
                    <LogginButton isLinkText = {true} />
                </div> 
            </div>
    
          <div className='mt-[80px] w-full'>
                <table className='w-full border-separate border-spacing-0' >
                  <thead>
                    <EmptyHead/>
                  </thead>
                  <tbody>
                    <EmptyBody message='Danh sách phim đang theo dõi trống.' />
                  </tbody>
                </table>
          </div>
        </div>
      </div>
    )
}

export default NotLoggedin