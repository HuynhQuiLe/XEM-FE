import React from 'react'
import {useSelector} from 'react-redux';
import {confirmPasswordLocalStorage, notificationLocalStorage} from '../../api/localStorage';
import {userSer} from '../../api/api';
import NormalLoadingCircle from '../Icons/Loading/NormalLoadingCircle';

const SavePasswordButton = ({pass_word, rePass_word, errPass_word, errRePass_word, seterrPass_word, setErrRePass_word}) => {
    const {isLoading} = useSelector(state => state.minusLoadingSlice)


    const save = () => {
        if(!pass_word && !rePass_word) {
            setErrRePass_word('Trường này không được để trống')
            seterrPass_word('Trường này không được để trống')
            return null
        }

        if(!pass_word ) {
            seterrPass_word('Trường này không được để trống')
            return null
        }

        if(!rePass_word) {
            setErrRePass_word('Trường này không được để trống')
            return null
        }

        if(errPass_word || errRePass_word) {
            return null
        }

        if(!confirmPasswordLocalStorage.get()) {
            return seterrPass_word('Đã có lỗi xảy ra. Mời load lại trang!')
        }

        userSer.updatePassword({pass_word})
        .then(({data}) => {
            notificationLocalStorage.set(data.message)
            window.location.reload()  
        })
        .catch(error => {
            console.log(error)
            seterrPass_word(error.response.data.message)
        })

    }
  return (
    <div className='w-[20%]'>
        <button className='relative text-[20px] font-[400] rounded-[8px] bg-black text-white w-full h-[72px] mb-[16px]'
            onClick={save}
        >
         
            {isLoading ? <NormalLoadingCircle/> : 'Đổi mật khẩu' }
        </button>
    </div>
  )
}

export default SavePasswordButton