import React from 'react'
import {useLocation} from 'react-router-dom';

const SmallLogo = ({width, css}) => {
  const {pathname} = useLocation()
  let src = ""
  pathname.includes('chi-tiet') ? src = '/img/X-white.svg' : src = "/img/X.svg"
  return (
    <div>
        <img src={src} alt="small logo" className={`${css}`} style={{width: `${width}px`}} />
    </div>
  )
}

export default SmallLogo