import React from 'react'
import {useEffect, useState} from 'react';
import {commentSer} from '../../../api/api';
import SectionHeading from '../../Headings/SectionHeading/SectionHeading';
import CommentItem from '../../Elements/CommentItem/CommentItem';
import CommentForm from '../../Forms/CommentForm/CommentForm';

const Comment = ({session_id}) => {
  const [responseUser, setResponseUser] = useState('')
  const [reponseCommentID, setResponseCommentID] = useState(0)
  
  let [loadAgain, setLoadAgain] = useState(0)

  const [commentList, setCommentList] = useState([])
  useEffect(() => {
    if(session_id) {
      commentSer.getAllCommentsBySession(session_id)
      .then(({data}) => {
        setCommentList(data.content)
      })
    }
  },[session_id,loadAgain])


  const response = (comment_id,full_name) => {
    setResponseUser(full_name)
    setResponseCommentID(comment_id)
  }


  return (
    <div className='mt-[100px]' id="comment">
      <SectionHeading
        subHeading='Comments'
        heading1='Bạn đang nghĩ gì'
        heading2='về phim này.'
        description={`Đừng bỏ lỡ những bình luận <b class="font-semibold">mới thất</b> trên <b class="font-semibold">XEM.</b>`}
      
      />
      <CommentForm 
        setLoadAgain={setLoadAgain} 
        responseUser={responseUser} 
        reponseCommentID={reponseCommentID} 
        setResponseUser={setResponseUser} 
        setResponseCommentID={setResponseCommentID} 
        loadAgain={loadAgain} 
        session_id={session_id}
      />

    {/* noi dung comment */}
      <div className=' my-[50px] text-black'>
        {commentList && <CommentItem response={response} list={commentList} /> }
      </div>
    </div>
  )
}

export default Comment