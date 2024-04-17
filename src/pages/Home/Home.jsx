import React from 'react'
import POTD from './POTD/POTD'
import Trending from './Trending/Trending'
import Latest from './Latest/Latest'
import Honor from './Honor/Honor'

const Home = () => {
  return (
    <div>
      <POTD/>
      <Latest/>
      <Trending />
      <Honor/>
    </div>

  )
}

export default Home