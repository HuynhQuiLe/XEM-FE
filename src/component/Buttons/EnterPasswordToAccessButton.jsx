import React from 'react'
import {authSer} from '../../api/api';
import {setConfirm} from '../../redux/authSlice';
import {notify} from '../../utils/notify/notify';
import {confirmPasswordLocalStorage} from '../../api/localStorage';
import {useSelector, useDispatch} from 'react-redux';
import NormalLoadingCircle from '../Icons/Loading/NormalLoadingCircle';

const EnterPasswordToAccessButton = ({pass_word, setErr}) => {
    const {isLoading} = useSelector(state => state.minusLoadingSlice)
    const dispatch = useDispatch()

    const confirmPassword = () => {
        if(!pass_word) {
            setErr('Trường này không được để trống.')
            return
        }

        authSer.checkPassword({pass_word})
        .then(({data}) => {
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
    <button className=' w-full h-[72px] bg-black text-white rounded-[8px] text-[20px] font-light hover:bg-black_hover transition-all ease-in-out duration-300 cursor-pointer'
        onClick={confirmPassword}
    >
        {isLoading ? <NormalLoadingCircle/> : "Tiếp tục"}
    </button>
  )
}

export default EnterPasswordToAccessButton