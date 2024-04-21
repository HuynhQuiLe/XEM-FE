import React from 'react'
import POTD from '../../components/Sections/POTD/POTD'
import Honors from '../../components/Sections/Honors/Honors'
import Latest from '../../components/Sections/Latest/Latest'
import Trending from '../../components/Sections/Trending/Trending'

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