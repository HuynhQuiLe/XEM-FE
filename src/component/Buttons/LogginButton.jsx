import React from 'react'
import {setIsOpenedModalLogin} from '../../redux/modalSlice';
import { useDispatch } from 'react-redux';

const LogginButton = ({isLinkText}) => {
  const dispatch = useDispatch()

  return (
    <div>
        <p className={`${isLinkText ? 'link-text' : 'font-semibold' }`} onClick={() => dispatch(setIsOpenedModalLogin())} >Đăng nhập</p>
    </div>
  )
}

export default LogginButton