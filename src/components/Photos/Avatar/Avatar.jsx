import React from 'react'

const Avatar = ({avatar, full_name,size, hoverEffect}) => {
    if(avatar) {
        return (
            <img className={`w-full h-full rounded-full object-cover grayscale border-[1px] border-black ${hoverEffect ? 'hover:grayscale-0' : null} transition-default`} 
                style={{width: `${size}px`, height:`${size}px`}}
                src={avatar} alt= {`avatar của ${full_name}`}
            />
          )
    } else {
        return (
            <div className={`rounded-full bg-black cursor-pointer text-white font-semibold text-[25px] flex items-center justify-center`}  style={{width: `${size}px`, height:`${size}px`}}><p>{full_name?.slice(0,1)}</p></div>
        )
    }
  
}

export default Avatar