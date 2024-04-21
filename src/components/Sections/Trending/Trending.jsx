import {useEffect, useState} from 'react';
import { sessionSer } from '../../../api/api'
import SectionHeading from '../../Headings/SectionHeading/SectionHeading';
import FilmCard from '../../Card/FilmCard';

const Trending = () => {
  const [trendings, setTrendings] = useState(null)
  useEffect(() => {
    sessionSer.getHighestViewSession()
    .then(({data}) => {
      setTrendings(data.content)
    })
  },[])
  return (
    <section id="trending" className=' mt-[100px]'>
        <SectionHeading 
            subHeading='Trending'
            heading1='Xem phim'
            heading2='có lượt xem nhiều nhất.'
            description={`Đừng bỏ lỡ phim <b class="font-semibold">hot</b> trên <b class="font-semibold">XEM.</b>`}
        />
        <div className=' flex justify-start py-[50px] flex-wrap items-center gap-10'>
          {trendings && trendings.map((item, index) => {
              return <FilmCard key={index} item= {item} isTrending={true}/>
          })}
        </div>
    </section>
  )
}

export default Trending