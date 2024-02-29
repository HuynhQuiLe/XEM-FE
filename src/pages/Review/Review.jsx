import React from 'react'
import Breadcrumbs from './elements/Breadcrumbs'
import TableOfContent from './elements/TableOfContent'
import Content from './elements/Content'
import LatestAndRelated from './elements/LatestAndRelated'
import Facebook from './elements/Facebook'
import Twitter from './elements/Twitter'
import Pinterest from './elements/Pinterest'
import Save from './elements/Save'
import Rating from './elements/Rating'
import Tag from './elements/Tag'
import View from './elements/View'
import Social from './elements/Social'
import Comment from './elements/Comment'

const Review = () => {
  return (
    <div className='mt-[20px] '>
        <Breadcrumbs/>
        
        <div className='w-full h-[400px] bg-black mb-[50px]'></div>

        <div className='mb-10 pt-[50px]'>
            <p className='  font-light text-[16px] leading-[200%] mb-[16px]'>Review</p>
            <div className='flex items-end justify-between'>
                <h2 className='leading-[120%] text-[45px] font-semibold '>Nồi chiên không dầu<br/>
                    <span className='text-primary'>Philips HD9643</span> có tốt không?
                </h2>
                <Social/>
            </div>
        </div>

        {/* tieu de */}
        {/* <div className='flex gap-[20px] items-center relative'>
            <div className='w-[20%] flex gap-[10px]'>
                <Facebook size={30} text={16}/>
                <Twitter size={30} text={16}/>
                <Pinterest  size={30} text={16}/>
                <Save size={30} text={16}/>
                <View  size={30} text={16}/>
            </div>
            <div className='w-[80%]'>
                <div className='flex items-center justify-between'>
                    <h5 className=' font-semibold text-[25px] py-4'>[Review] Nồi chiên không dầu Philips HD9643 có tốt không?</h5>
                </div>
            </div>
            <div className=' absolute bottom-0 left-0 w-full'>
                <div className='dot-line w-full h-[1px]'></div>
            </div>
        </div> */}


        {/* noi dung */}
        <div className='flex w-full gap-[20px] items-start'>
            <div className='w-[20%] pr-[20px] h-[100%] sticky-blog '>
                <TableOfContent />
            </div>
            <div className='w-[80%] h-[100%]'>
                <div className='leading-[30px] w-full flex gap-[20px]'>
                    <div className='w-[70%]'>
                        <Content />
                        <div className='flex justify-between items-end mt-[50px]'>
                            <Social/>
                            <Rating/>
                        </div>
                    </div>
                    <div className='w-[30%] pl-[10px]'>
                        <LatestAndRelated/>
                        <Tag/>
                    </div>
                </div>
            </div>
        </div>


       <Comment/>
    </div>
  )
}

export default Review