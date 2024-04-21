import React from 'react'
import {convertTime} from '../../../utils/convert/converTime';
import HeartResponseComment from '../../Vendors/HeartResponseComment/HeartResponseComment';

const ResponseComment = ({responses}) => {
    if(responses.length) {
        return responses.map((res, ind) => {
          return (
            <div key={ind} className='text-white flex gap-[50px] items-start pl-[100px] mb-[30px]'>
              <div>
                <img src={res.users.avatar} className='w-[60px] h-[60px] border-[1px] border-white rounded-full object-cover grayscale' alt="user avatar" />
              </div>
              <div>
                <p className='text-[18px]'>{res.comment_text}</p>
                <div className='font-thin flex gap-[35px] mt-[15px]'>
                  <p> {convertTime(res.created_date)}</p>
                  <HeartResponseComment response_id={res.response_id}/>
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

export default ResponseComment