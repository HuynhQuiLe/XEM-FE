import React, { useEffect, useState } from 'react'
import BlackBackground from '../BlackBackground/BlackBackground'
import LoadingCircle from '../LoadingCircle/LoadingCircle';
import { useDispatch, useSelector } from 'react-redux';
import { authSer } from '../../api/api';
import { setConfirm } from '../../redux/authSlice';
import { notify } from '../../utils/notify/notify';
import { confirmPasswordLocalStorage } from '../../api/localStorage';

const EnterPasswordToAccess = () => {
    const dispatch = useDispatch()

    const {isLoading} = useSelector(state => state.minusLoadingSlice)
    const {isConfirm} = useSelector(state => state.authSlice)


    const [pass_word, setPass_word] = useState('')
    const [err, setErr] = useState('')

    useEffect(() => {
        document.querySelector('body').classList.add('no-scroll')
        return () => {
            document.querySelector('body').classList.remove('no-scroll')
        }
    },[])

    const handleChange = (e) => {
        setPass_word(e.target.value)
        if(!e.target.value.trim()) {
            setErr('Trường này không được để trống.')
        } else {
            setErr('')
        }
    }

    if(isConfirm) {
        return null
    }

    const confirmPassword = () => {
        if(!pass_word) {
            setErr('Trường này không được để trống.')
            return
        }

        authSer.checkPassword({pass_word})
        .then(({data}) => {
            console.log(data)
            dispatch(setConfirm(data.content))
            notify.success(data.message)
            confirmPasswordLocalStorage.set(data.content)
            document.querySelector('body').classList.remove('no-scroll')
            
        })
        .catch(err => {
            setErr(err.response.data.message)
        })
    }

  return (
    <section className='fixed top-0 left-0 z-10 w-[100vw] min-h-[100vh] overflow-scroll flex items-center justify-center'>
    <BlackBackground/>
    <div className=' w-[80%] absolute top-[30px]  py-[30px]' >
        <div className='bg-white text-black rounded-[16px] overflow-hidden w-full h-full p-[50px] flex items-center justify-center '>
            <div className='h-full'>
                <div className='flex justify-center'>
                    <i className="fa fa-exclamation-triangle text-error text-[40px] mb-[10px]"></i>
                </div>
                <p className='text-[24px] mb-[50px] font-semibold text-center'>Vui lòng nhập mật khẩu để tiếp tục</p>

               <div className=' w-[350px] m-auto ' >
                    <div className=' w-full  h-[72px]  m-auto'>
                        <input type="password"  className='w-full h-full px-[30px] border-[1px]  border-[rgb(233,233,233)] bg-white py-[20px] flex items-center justify-center rounded-[8px] focus:outline-black'
                        value={pass_word}
                        onChange={handleChange}
                        placeholder='Mật khẩu' />
                    </div>

                    {err && 
                        <div className='pt-[10px] mb-[30px]'>
                            <p className=' text-error text-[12px] font-light'>{err}</p>
                        </div>
                    }


                    <div className='flex items-center justify-center mt-[30px]'>
                        <button className=' w-full h-[72px] bg-black text-white rounded-[8px] text-[20px] font-light hover:bg-black_hover transition-all ease-in-out duration-300 cursor-pointer'
                            onClick={confirmPassword}
                        >
                            {isLoading ? <LoadingCircle/> : "Tiếp tục"}
                        </button>
                    </div>
               </div>
                <p className='link-text m-auto mt-[50px]' onClick={() => history.back()}>Quay về</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default EnterPasswordToAccess