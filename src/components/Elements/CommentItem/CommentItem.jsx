import React from 'react'
import {convertTime} from '../../../utils/convert/converTime';
import ResponseComment from '../ResponseComment/ResponseComment';
import HeartComment from '../../Vendors/HeartComment/HeartComment';

const CommentItem = ({list, response}) => {
   
    if (list?.length) {
        return list.map((comment, index) => {
          return (
            <div key={index} className='mb-[60px]'>
            <div className='text-white flex gap-[50px] items-start mb-[30px]'>
                <div>
                <img src={comment.users.avatar} className='w-[60px] h-[60px] border-[1px] border-white rounded-full object-cover grayscale' alt="user avatar" />
                </div>
                <div>
                <p className='text-[20px]'>{comment.comment_text}</p>
                <div className='font-thin flex gap-[35px] mt-[15px]'>
                    <p> {convertTime(comment.created_date)}</p>
                    <HeartComment comment_id={comment.comment_id}/>
                    <p className=' cursor-pointer' onClick={() => response(comment.comment_id ,comment.users.full_name)}>{comment.responses.length} phản hồi</p>
                    <p>bình luận bởi <span className='inline-block link-text ml-1'>{comment.users.full_name}</span></p>
                </div>
                </div>
            </div>
            <ResponseComment responses = {comment.responses} />
        </div>
          )
        })
       
      } else {
        return <p className='text-white font-light'>Hãy là người <b className='font-semibold' >đầu tiên</b> bình luận về bộ phim này.</p>
      }
    
}

export default CommentItem