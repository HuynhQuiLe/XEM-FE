import React from 'react'
import {useDispatch} from 'react-redux';
import {closeModal} from '../../../redux/modalSlice';

const BlackOverlayBackground = () => {
    const dispatch = useDispatch()
    return (
      <div className='w-[100vw] h-[100vh] fixed top-0 left-0 bg-[rgba(0,0,0,0.7)]  overflow-hidden -z-10' onClick={() => dispatch(closeModal())}></div>
    )
  }

export default BlackOverlayBackground