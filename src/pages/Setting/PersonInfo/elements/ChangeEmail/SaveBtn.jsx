import React from 'react'
import { useSelector } from 'react-redux';
import { userSer } from '../../../../../api/api';
import { confirmPasswordLocalStorage, notificationLocalStorage } from '../../../../../api/localStorage';
import LoadingCircle from '../../../../../components/LoadingCircle/LoadingCircle';

const SaveBtn = ({email, reEmail, errEmail, errReEmail, setErrEmail, setErrReEmail}) => {
    const {isLoading} = useSelector(state => state.minusLoadingSlice)

    const save = () => {
        if(!email && !reEmail) {
            setErrReEmail('Trường này không được để trống')
            setErrEmail('Trường này không được để trống')
            return null
        }

        if(!email ) {
            setErrEmail('Trường này không được để trống')
            return null
        }

        if(!reEmail) {
            setErrReEmail('Trường này không được để trống')
            return null
        }

        if(email !== reEmail) {
            setErrReEmail('Email nhập lại không đúng.')
            return null
        }

        if(errEmail || errReEmail) {
            return null
        }

        if(!confirmPasswordLocalStorage.get()) {
            return setErrEmail('Đã có lỗi xảy ra. Mời load lại trang!')
        }

        userSer.updateEmail({email})
        .then(({data}) => {
            notificationLocalStorage.set(data.message)
            window.location.reload()  
        })
        .catch(error => {
            console.log(error)
            setErrEmail(error.response.data.message)
        })

    }
  return (
    <div className='w-[20%]'>
        <button className=' relative text-[20px] font-[400] rounded-[8px] bg-black text-white w-full h-[72px] mb-[16px]'
            onClick={save}
        > {isLoading ? <LoadingCircle/> : "Đổi e-mail"}
        </button>
    </div>
  )
}

export default SaveBtn