import React, { useEffect, useState } from 'react'
import { sessionSer } from '../../../api/api'
import SectionHeading from '../../Headings/SectionHeading/SectionHeading'
import FilmCard from '../../Card/FilmCard'

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
            <SectionHeading 
                subHeading='Latest' 
                heading1='Hưởng thức phim' 
                heading2='nóng hỏi - mới ra lò.'
                description={`<b class=' font-semibold'>XEM.</b> đã cập bến phim mới rồi đây.`}
            /> 
            <div className=' flex justify-start py-[50px] flex-wrap items-center gap-10'>
                {latestSessions && latestSessions.map((item, index) => {
                    return <FilmCard key={index} item= {item}/>
                })}
            </div>
            
        </section>
    )
}

export default Latest