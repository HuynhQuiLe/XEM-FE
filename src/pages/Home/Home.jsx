import React from 'react'
import POTD from '../../component/Sections/POTD/POTD'
import Honors from '../../component/Sections/Honors/Honors'
import Latest from '../../component/Sections/Latest/Latest'
import Trending from '../../component/Sections/Trending/Trending'

const Home = () => {
  return (
    <div>
      <POTD/>
      <Latest/>
      <Trending />
      <Honors/>
    </div>

  )
}

export default Home