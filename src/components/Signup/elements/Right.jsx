import React from 'react'
import Full_name from './Full_name';
import Email from './Email';
import Password from './Password';
import Term from './Term';
import CreateBTN from './CreateBTN';
import OtherMethods from './OtherMethods';
import Error from './Error';
import {useState} from 'react';

const Right = () => {

  return (
    <div className='flex-1 p-[50px]'>
        <p className='text-[24px] mb-[36px] font-semibold'>Đăng ký với tài khoản email</p>
        <Error />
        <form action="">
            <Full_name/>
            <Email/>
            <Password/> 
            <Term />
            <CreateBTN/>
        </form>
        <OtherMethods/>
    </div>
  )
}

export default Right