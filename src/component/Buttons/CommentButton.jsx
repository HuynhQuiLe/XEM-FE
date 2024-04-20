import React from 'react'
import SmallLoadingCircle from '../../components/LoadingCircle/SmallLoadingCircle';
import {commentSer} from '../../api/api';
import {notify} from '../../utils/notify/notify';
import { useSelector } from 'react-redux';

const CommentButton = ({disabled, comment_text, setLoadAgain, setResponseCommentID, reponseCommentID, loadAgain, setDisabled, setComment_text}) => {
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
    <div className={`${disabled? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer hover:bg-black  hover:text-white '} relative z-[0] min-w-[60px] border-[1px]  flex items-center justify-center  border-white  h-[60px] rounded-full bg-white text-black transition-all ease-in-out duration-300`}
        onClick={comment}
        >
        {isLoading ? <SmallLoadingCircle/> : <i className="fa fa-paper-plane text-[25px]"></i> }
    </div>
  )
}

export default CommentButton