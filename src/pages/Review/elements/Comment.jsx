import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'

const Comment = () => {
  return (
    <div className='pt-[90px]'>
        <SectionTitle/>
        <div className=' flex justify-between items-center py-[40px] mt-[20px] gap-[30px]'>
          <div className=''>
              <div className='w-[60px] h-[60px] bg-black rounded-full'></div>
          </div>

          <div className=' w-full'>
            <input type="text" className='w-full h-full px-[30px] border-[1px]  border-[rgb(233,233,233)] bg-white py-[20px] flex items-center justify-center rounded-[8px] focus:outline-black' placeholder='Bạn đang nghĩ gì về sản phẩm này' />
            {/* <p className='font-[200]'>Next Conference <i className="fa fa-calendar mx-2"></i>  <span className='link-text inline-block'>Amsterdam</span></p> */}
          </div>

          <div className=''>
            <div className=' w-[60px] flex items-center justify-center border-[1px] border-black cursor-pointer h-[60px] rounded-full bg-black text-white hover:bg-white  hover:text-black transition-all ease-in-out duration-300'>
              <i className="fa fa-paper-plane text-[25px]"></i>
            </div>
          </div>
       </div>


    {/* noi dung comment */}
    <div className=' my-[50px]'>
      <div className=' flex items-center mb-[30px]'>
        <div className='w-[60px] h-[60px] bg-black rounded-full mr-[30px] '></div>
          <div className='bg-white px-[30px] py-[20px] rounded-[16px]'>
            <h6 className=' font-semibold text-[18px] mb-[10px]'>Người dùng reviewer </h6>
            <p>Sản phẩm rất tôt, tuy nhiên giá thành rất đắt.</p>
        </div>
      </div>
      
      <div className=' flex items-center mb-[30px]'>
        <div className='w-[60px] h-[60px] bg-black rounded-full mr-[30px]'></div>
          <div className='bg-white px-[30px] py-[20px] rounded-[16px]'>
            <h6 className=' font-semibold text-[18px] mb-[10px]'>Người dùng reviewer </h6>
            <p>Sản phẩm rất tôt, tuy nhiên giá thành rất đắt.</p>
        </div>
      </div>


      <div className=' flex items-center justify-end mb-[30px]'>
          <div className='bg-black text-white px-[30px] py-[20px] rounded-[16px]'>
            <h6 className=' font-semibold text-[18px] mb-[10px]'>Bạn </h6>
            <p>Sản phẩm rất tôt, tuy nhiên giá thành rất đắt.</p>
        </div>

        

      </div>


      <div className=' flex items-center mb-[30px]'>
        <div className='w-[60px] h-[60px] bg-black rounded-full mr-[30px]'></div>
          <div className='bg-white px-[30px] py-[20px] rounded-[16px]'>
            <h6 className=' font-semibold text-[18px] mb-[10px]'>Người dùng reviewer </h6>
            <p>Sản phẩm rất tôt, tuy nhiên giá thành rất đắt.</p>
        </div>
      </div>



    </div>
    </div>
  )
}

export default Comment