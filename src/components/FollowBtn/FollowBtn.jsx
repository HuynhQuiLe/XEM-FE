import React, { useEffect, useState } from 'react'
import { followFilmSer } from '../../api/api'
import { notify } from '../../utils/notify/notify'
import { useSelector } from 'react-redux';
import SmallLoadingCircle from '../LoadingCircle/SmallLoadingCircle';
import { tokenLocalStorage } from '../../api/localStorage';

                
const FollowBtn = ({session_id, setAgain, again}) => {

    const [isFollowed, setIsFollowed] = useState(false)
    const {isLoading} = useSelector(state => state.minusLoadingSlice)

    const isLoggedIn = tokenLocalStorage?.get() ? true : false

    useEffect(() =>{
        if(isLoggedIn) {
            followFilmSer.getIsFollowed(session_id)
            .then(({data}) =>{
                setIsFollowed(data.content.isFollowed)
            })
        } else {
            setIsFollowed(false)
        }
        
    },[isFollowed])

    const follow =() =>{
        if(isLoggedIn) {
            followFilmSer.follow(session_id)
            .then(({data}) =>{
                notify.success(data.message)
                setIsFollowed(data.content.isFollowed)
                if(setAgain) {
                    setAgain(!again)
                }
            })
            .catch(error => {
                notify.success(error?.response.data.message)
            })
        } else {
            notify.success('Vui lòng đăng nhập để tiếp tục.')
        }
        
    }

    const renderBtn =() =>{
        let text=''
        if(isFollowed){
            text = 'Following'
        } else {
            text = 'Follow'
        }
        return text
    }

    return (
        <div className='flex justify-end'>
            <div className={`px-[20px] relative text-center min-w-[107px] h-[40px] leading-[40px] w-fit text-[16px] rounded-[8px] border-[1px] border-black ${isFollowed ? 'bg-black text-white hover:text-black hover:bg-white' : 'bg-transparent text-black hover:text-white hover:bg-black'} transition-default cursor-pointer`}
                onClick={follow}
            >
               {isLoading ? <SmallLoadingCircle/> : renderBtn()}
            </div>
        </div>
    )
}

export default FollowBtn