import React, { useEffect, useState } from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { commentSer } from '../../api/api'
import { notify } from '../../utils/notify/notify'
import {useSelector} from 'react-redux';
import SmallLoadingCircle from '../../components/LoadingCircle/SmallLoadingCircle';
import { convertTime } from '../../utils/convert/converTime';
import Heart from './Heart';
import ResponseHeart from './ResponseHeart';

const Comment = ({session_id}) => {
  const [responseUser, setResponseUser] = useState('')
  const [reponseCommentID, setResponseCommentID] = useState(0)



  const [comment_text, setComment_text] = useState('')
  const [disabled, setDisabled] = useState(true)
  const {isLoading} =useSelector(state => state.minusLoadingSlice)
  
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

  const renderResponse = (responseList) => {
    if(responseList.length) {
      return responseList.map((res, ind) => {
        return (
          <div key={ind} className='text-white flex gap-[50px] items-start pl-[100px] mb-[30px]'>
            <div>
              <img src={res.users.avatar} className='w-[60px] h-[60px] border-[1px] border-white rounded-full object-cover grayscale' alt="user avatar" />
            </div>
            <div>
              <p className='text-[18px]'>{res.comment_text}</p>
              <div className='font-thin flex gap-[35px] mt-[15px]'>
                <p> {convertTime(res.created_date)}</p>
                <ResponseHeart response_id={res.response_id}/>
                <p>bình luận bởi <span className='inline-block link-text ml-1'>{res.users.full_name}</span></p>
              </div>
            </div>
          </div>
        )
      })
    } else {
      return null
    }
  }
 

  const renderComment = () => {
    if (commentList.length) {
      return commentList.map((comment, index) => {
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
                  <Heart comment_id={comment.comment_id}/>
                  <p className=' cursor-pointer' onClick={() => response(comment.comment_id ,comment.users.full_name)}>{comment.responses.length} phản hồi</p>
                  <p>bình luận bởi <span className='inline-block link-text ml-1'>{comment.users.full_name}</span></p>
                </div>
              </div>
            </div>
            
            {renderResponse(comment.responses)}
          </div>
        )
      })
     

    } else {
      return <p className='text-white font-light'>Hãy là người <b className='font-semibold' >đầu tiên</b> bình luận về bộ phim này.</p>
    }
  }

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
    <div className='mt-[100px]' id="comment">
      <SectionTitle subTitle = {'Bình luận'} mainTitle={`Bạn đang nghĩ gì<br/>về phim này.`} description={`Đừng bỏ lỡ những bình luận <b>mới thất</b> trên <b>XEM.</b>`} />
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

    {/* noi dung comment */}
      <div className=' my-[50px] text-black'>
        {renderComment()}
      </div>
    </div>
  )
}

export default Comment