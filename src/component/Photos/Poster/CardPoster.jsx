import React from 'react'

const CardPoster = ({poster}) => {
  return (
    <div>
      <img src={poster} className="w-[233px] h-[350px] object-cover group-hover:scale-110 transition-default" />
    </div>
  )
}

export default CardPoster