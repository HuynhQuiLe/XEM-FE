import React from 'react'
import OtherMethod from './OtherMethod';
import BtnLogin from './BtnLogin';
import Email from './Email';
import Password from './Password';
import KeepMeLogin from './KeepMeLogin';
import ForgetPassword from './ForgetPassword';
import Error from './Error';

const Right = () => {
   
    return (
        <div className='flex-1 p-[50px]'>
            <p className='text-[24px] mb-[36px] font-semibold'>Đăng nhập</p>
            <Error/>

            <form action="">
                <Email/>
                <Password />
                <KeepMeLogin />
                <BtnLogin />
                <ForgetPassword/>
            </form>
            <OtherMethod/>
        </div>
    )
}

export default Right