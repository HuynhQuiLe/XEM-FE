import React from 'react'
import MasterText from './MasterText';
import Marquee from './Marquee';
import PhotoPOTD from './PhotoPOTD';

const POTD = () => {
  return (
    <div id='POTD' className='pt-[55px]'>
      <MasterText/>
      <Marquee/>
      <PhotoPOTD/>
    </div>
  )
}

export default POTD