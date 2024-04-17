import React from 'react'
import Close from '../Close/Close'
import BlackBackground from '../BlackBackground/BlackBackground'
import Left from './elements/Left'
import Right from './elements/Right'
import {useEffect} from 'react';

const Signup = () => {
  useEffect(() => {
    document.querySelector('body').classList.add('no-scroll')
    return () => {
        document.querySelector('body').classList.remove('no-scroll')
    }
  },[])

  return (
    <section className='fixed top-0 left-0 z-10 w-[100vw] min-h-[100vh] overflow-scroll flex items-center justify-center'>
        <BlackBackground/>
        <div className='w-[80%] absolute top-[30px] pb-[30px] ' >
            
           <div className='bg-white text-black rounded-[16px] overflow-hidden '>
           <div className='w-full h-full flex items-stretch justify-between'>
                <Left />
                <Right />
            </div>
           </div>
        </div>
        <Close/>
    </section>
  )
}

export default Signup