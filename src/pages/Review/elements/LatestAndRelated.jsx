import React from 'react'
import View from '../../../components/Icon/View'

const LatestAndRelated = () => {
  return (
    <div className='mt-[30px]'>
           <div className='w-full relative'>
                <div className=' flex justify-start gap-[40px] pb-[10px] font-light'>
                    <p className="tab cursor-pointer font-semibold text-[18px]" >Mới nhất</p>
                    <p className="tab cursor-pointer font-semibold text-[18px]" >Liên quan</p>
                </div> 
                <div className=' absolute bottom-0 left-0 w-full'>
                    <div className='dot-line w-full h-[1px]'></div>
                </div>
               
           </div>

            <div className=''>
                <div className='flex py-[20px]  border-b-[1px] border-primary'>
                    <div className=' min-w-[100px] h-[70px] bg-black rounded-[8px] mr-3'></div>
                    <div>
                        <p className='text-[14px] leading-[20px] mb-2 font-semibold'>[Review] Top 5 Bơm xe đạp tốt nhất được tin dùng hiện nay</p>
                        <div className='flex justify-between text-[12px] font-light'>
                            <p className=''>Nhà cửa & Đời sống</p>
                            <div className='flex items-center gap-[5px]'>
                                <View/>
                                <p>999</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex py-[20px]  border-b-[1px] border-primary'>
                    <div className=' min-w-[100px] h-[70px] bg-black rounded-[8px] mr-3'></div>
                    <div>
                        <p className='text-[14px] leading-[20px] mb-2 font-semibold'>[Review] Top 5 Bơm xe đạp tốt nhất được tin dùng hiện nay</p>
                        <div className='flex justify-between text-[12px] font-light'>
                            <p className=''>Nhà cửa & Đời sống</p>
                            <div className='flex items-center gap-[5px]'>
                                <View/>
                                <p>999</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex py-[20px]  border-b-[1px] border-primary'>
                    <div className=' min-w-[100px] h-[70px] bg-black rounded-[8px] mr-3'></div>
                    <div>
                        <p className='text-[14px] leading-[20px] mb-2 font-semibold'>[Review] Top 5 Bơm xe đạp tốt nhất được tin dùng hiện nay</p>
                        <div className='flex justify-between text-[12px] font-light'>
                            <p className=''>Nhà cửa & Đời sống</p>
                            <div className='flex items-center gap-[5px]'>
                                <View/>
                                <p>999</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex py-[20px]  border-b-[1px] border-primary'>
                    <div className=' min-w-[100px] h-[70px] bg-black rounded-[8px] mr-3'></div>
                    <div>
                        <p className='text-[14px] leading-[20px] mb-2 font-semibold'>[Review] Top 5 Bơm xe đạp tốt nhất được tin dùng hiện nay</p>
                        <div className='flex justify-between text-[12px] font-light'>
                            <p className=''>Nhà cửa & Đời sống</p>
                            <div className='flex items-center gap-[5px]'>
                                <View/>
                                <p>999</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex py-[20px]'>
                    <div className=' min-w-[100px] h-[70px] bg-black rounded-[8px] mr-3'></div>
                    <div>
                        <p className='text-[14px] leading-[20px] mb-2 font-semibold'>[Review] Top 5 Bơm xe đạp tốt nhất được tin dùng hiện nay</p>
                        <div className='flex justify-between text-[12px] font-light'>
                            <p className=''>Nhà cửa & Đời sống</p>
                            <div className='flex items-center gap-[5px]'>
                                <View/>
                                <p>999</p>
                            </div>
                        </div>
                    </div>
                </div>

               
            </div>
    </div>
  )
}

export default LatestAndRelated