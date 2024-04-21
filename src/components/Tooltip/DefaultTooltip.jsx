import React from 'react'

const DefaultTooltip = ({text}) => {
  return (
    <p className=' move opacity-0 px-[10px] group-hover:opacity-100 py-[8px] overflow-hidden absolute text-white bg-black text-nowrap rounded-[8px]'
        style={{
            transition:'transform .4s cubic-bezier(.02,1.23,.79,1.08)'
            }}
    >{text}</p>
)
}

export default DefaultTooltip