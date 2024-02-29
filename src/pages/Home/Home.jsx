import React from 'react'
import MasterText from './elements/MasterText'
import Marquee from './elements/Marquee'
import ROTD from './elements/ROTD'

const Home = () => {
  return (
    <div className='mt-[55px]'>
      <MasterText/>
      <Marquee/>
      <ROTD/>
      <div className='h-[100vh]'></div>
    </div>

  )
}

export default Home