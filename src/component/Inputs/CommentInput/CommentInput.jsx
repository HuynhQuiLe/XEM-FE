import React from 'react'

const CommentInput = ({comment_text,setDisabled,setComment_text, responseUser  }) => {
  return (
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
  )
}

export default CommentInput