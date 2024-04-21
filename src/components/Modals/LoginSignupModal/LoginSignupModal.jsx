import React from 'react'
import {useEffect} from 'react';
import BlackOverlayBackground from '../../Photos/Background/BlackOverlayBackground';
import CloseButton from '../../Buttons/DefaultButtons/CloseButton';
import LogginForm from '../../Forms/LogginForm/LogginForm';
import LeftLogginSignupModal from '../../Elements/LeftLogginSignupModal/LeftLogginSignupModal';
import {useSelector} from 'react-redux';
import SignupForm from '../../Forms/SignupForm/SignupForm';

const LoginSignupModal = () => {
  const {isOpenedModalLogin, isOpenedModalSignup} = useSelector(state => state.modalSlice)

    useEffect(() => {
        document.querySelector('body').classList.add('no-scroll')
        return () => {
            document.querySelector('body').classList.remove('no-scroll')
        }
    },[])

    if(!isOpenedModalLogin && !isOpenedModalSignup) {
      return null
    }
    
  return (
    <section className='fixed top-0 left-0 z-10 w-[100vw] min-h-[100vh] overflow-scroll flex items-center justify-center'>
        <BlackOverlayBackground/>
        <div className=' w-[80%] absolute top-[30px] py-[30px]' >
           <div className='bg-white text-black rounded-[16px] overflow-hidden '>
           <div className='w-full h-full flex items-stretch justify-between'>
                {isOpenedModalLogin && <LeftLogginSignupModal isLoginForm={true}/>}
                {isOpenedModalSignup && <LeftLogginSignupModal isSignupForm={true}/>}
                {isOpenedModalLogin ? <LogginForm/> : null}
                {isOpenedModalSignup ? <SignupForm/> : null}
            </div>
           </div>
        </div>
        <CloseButton />
    </section>
  )
}

export default LoginSignupModal