import React, { useState } from 'react'
import SmallLoadingCircle from '../../../components/LoadingCircle/SmallLoadingCircle';
import { useSelector } from 'react-redux';
import {commentSer} from '../../../api/api';
import {notify} from '../../../utils/notify/notify';

const CommentForm = ({setLoadAgain, responseUser,setResponseUser, setResponseCommentID, reponseCommentID, loadAgain}) => {
  const [disabled, setDisabled] = useState(true)

  const [comment_text, setComment_text] = useState('')

  const {isLoading} =useSelector(state => state.minusLoadingSlice)

  const comment = () => {
    if(comment_text.trim()) {
      setDisabled(true)

      if(responseUser) {
        const data = {comment_text}
        commentSer.responseComment(reponseCommentID,data)
        .then(({data}) => {
          loadAgain += 1 
          setLoadAgain(loadAgain)
          notify.success(data.message)

          // reset input
          setComment_text('')

          // reset reponse
          setResponseUser('')
          setResponseCommentID(0)
        })
      } else {
      //binh luan binh thuong - khong phai tra loi
        const data = {comment_text}
        commentSer.createComment(session_id, data)
        .then(({data}) => {
          loadAgain += 1 
          setLoadAgain(loadAgain)
          notify.success(data.message)

          // reset input
          setComment_text('')
        })
      }
    } else {
      return null
    }
  }

    return (
        <div className=' flex justify-between items-center py-[40px] mt-[20px] gap-[30px]'>
            <div className=' w-full flex'>
            {responseUser ? <span className='block text-nowrap max-h-[61.5px] text-[14px] pl-[30px] pr-[10px] border-[1px] text-black border-[rgb(233,233,233)] bg-white py-[20px] rounded-tl-[8px] rounded-bl-[8px]'>Bạn đang trả lời <strong className='font-semibold'>{responseUser}</strong> <i className="fa fa-times-circle pl-[10px] cursor-pointer" onClick={() => setResponseUser(null)}></i></span> : null}
            <input type="text" name='comment' value={comment_text} 
            onChange={(e) => {
                if(!e.target.value.trim()) {
                setDisabled(true)
                } else {
                setDisabled(false)
                }
                setComment_text(e.target.value)
            }} 
            className={`w-full h-full ${responseUser ? 'rounded-tr-[8px] rounded-br-[8px]' : 'rounded-[8px]'} text-black px-[30px] border-[1px]  border-[rgb(233,233,233)] bg-white py-[20px] flex items-center justify-center  ${responseUser ? 'outline-none' : 'focus:outline-black'}`} placeholder={`${responseUser ? 'Trả lời' : 'Bạn đang nghĩ gì về bộ phim này'}`} />
            </div>

            <div className={`${disabled? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer hover:bg-black  hover:text-white '} relative z-[0] min-w-[60px] border-[1px]  flex items-center justify-center  border-white  h-[60px] rounded-full bg-white text-black transition-all ease-in-out duration-300`}
            onClick={comment}
            >
            {isLoading ? <SmallLoadingCircle/> : <i className="fa fa-paper-plane text-[25px]"></i> }
            </div>
        </div>
    )
}

export default CommentForm