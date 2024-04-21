import React from 'react'
import {useDispatch} from 'react-redux';
import {closeModal} from '../../../redux/modalSlice';


const CloseButton = () => {
    const dispatch = useDispatch()
    return (
      <section className='fixed right-[26px] bottom-[30px] w-[60px] h-[60px] bg-black text-white rounded-[8px] flex items-center  justify-center text-[27px] cursor-pointer'
          onClick={() => dispatch(closeModal()) }
      >
          <i className="fa fa-times"></i>
      </section>
    )
  }

export default CloseButton