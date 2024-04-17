import React, { useEffect, useState } from 'react'
import Card from '../../../components/Card/Card'
import { sessionSer } from '../../../api/api'

const Latest = () => {
    const [latestSessions, setLatestSessions] = useState(null)
    useEffect(() => {
        sessionSer.getAllLatestSession()
        .then(({data}) => {
            setLatestSessions(data.content)
        })
        .catch(error => console.log(error))
    },[])
    return (
        <section id="latest" className=' mt-[100px]'>
            <div>
                <p className='  font-light text-[16px] leading-[200%] mb-[16px]'>Latest</p>
                <div className='flex items-end justify-between'>
                    <h2 className='leading-[120%] text-[45px] font-semibold'>Hưởng thức phim <br/> nóng hỏi - mới ra lò.</h2>
                    <p className='font-light text-[16px] leading-[200%]'><b className=' font-semibold'>XEM.</b> đã cập bến phim mới rồi đây.</p>
                </div>
            </div>
            <div className=' flex justify-start py-[50px] flex-wrap items-center gap-10'>
                {latestSessions && latestSessions.map((item, index) => {
                    return <Card key={index} item= {item}/>
                })}
            </div>
            
        </section>
    )
}

export default Latest