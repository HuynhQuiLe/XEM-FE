import React from 'react'
import MasterHeading from '../../Headings/MasterHeading/MasterHeading';
import Marquee from '../../Text/Marquee/Marquee';
import PhotoPOTD from '../../Photos/PhotoPOTD/PhotoPOTD';

const POTD = () => {
  return (
    <div id='POTD' className='pt-[55px]'>
      <MasterHeading/>
      <Marquee/>
      <PhotoPOTD />
    </div>
  )
}

export default POTD