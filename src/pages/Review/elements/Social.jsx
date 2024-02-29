import React from 'react'
import Facebook from './Facebook';
import Twitter from './Twitter';
import Pinterest from './Pinterest';
import Save from './Save';
import View from './View';

const Social = () => {
  return (
    <div className='flex gap-[10px] mt-5'>
        <Facebook />
        <Twitter/>
        <Pinterest/>
        <Save/>
        <View/>
    </div>
  )
}

export default Social