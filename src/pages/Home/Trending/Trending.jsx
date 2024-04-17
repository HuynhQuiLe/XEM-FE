import {useEffect, useState} from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import Card from '../../../components/Card/Card'
import { sessionSer } from '../../../api/api'

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
        <SectionTitle 
        subTitle={'Top thịnh hành'} 
        mainTitle={'Xem phim <br/> có lượt xem nhiều nhất.'}
        description={`Đừng bỏ lỡ phim <b>hot</b> trên <b>XEM.</b>`}
        />
        <div className=' flex justify-start py-[50px] flex-wrap items-center gap-10'>
          {trendings && trendings.map((item, index) => {
              return <Card key={index} item= {item} isTrending={true}/>
          })}
        </div>
    </section>
  )
}

export default Trending