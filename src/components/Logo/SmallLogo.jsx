import React from 'react'

const SmallLogo = ({width, css}) => {
  return (
    <div>
        <img src="/img/r.svg" alt="small logo" className={`${css}`} style={{width: `${width}px`}} />
    </div>
  )
}

export default SmallLogo