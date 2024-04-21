import React, { useState } from 'react'
import CommentButton from '../../Buttons/CommentButton';
import CommentInput from '../../Inputs/CommentInput/CommentInput';

const CommentForm = ({setLoadAgain, responseUser,setResponseUser, setResponseCommentID, reponseCommentID, loadAgain, session_id}) => {
  const [disabled, setDisabled] = useState(true)

  const [comment_text, setComment_text] = useState('')


    return (
        <div className=' flex justify-between items-center py-[40px] mt-[20px] gap-[30px]'>
            <div className=' w-full flex'>
            {responseUser ? <span className='block text-nowrap max-h-[61.5px] text-[14px] pl-[30px] pr-[10px] border-[1px] text-black border-[rgb(233,233,233)] bg-white py-[20px] rounded-tl-[8px] rounded-bl-[8px]'>Bạn đang trả lời <strong className='font-semibold'>{responseUser}</strong> <i className="fa fa-times-circle pl-[10px] cursor-pointer" onClick={() => setResponseUser(null)}></i></span> : null}
              <CommentInput 
                comment_text = {comment_text} 
                setDisabled = {setDisabled}
                setComment_text = {setComment_text}  
                responseUser = {responseUser}
              />
            </div>

            <CommentButton 
              disabled={disabled} 
              comment_text={comment_text} 
              setLoadAgain={setLoadAgain}
              setResponseCommentID={setResponseCommentID} 
              reponseCommentID={reponseCommentID}
              loadAgain={loadAgain}
              setComment_text={setComment_text}
              setDisabled={setDisabled}
              responseUser = {responseUser}
              session_id={session_id}

            />
        </div>
    )
}

export default CommentForm