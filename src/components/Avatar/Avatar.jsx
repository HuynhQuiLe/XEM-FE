import React, { useEffect, useState } from 'react'
import { userSer } from '../../api/api'
import { tokenLocalStorage } from '../../api/localStorage'


const Avatar = ({size}) => {
    const user = tokenLocalStorage.get()
    if(!user) {
        return null
    }

    const [avatar, setAvatar] = useState(null)
    useEffect(() => {
        userSer.getAvatar()
        .then(({data}) => {
            setAvatar(data.content.avatar)
        })
        .catch(error => {
            console.log(error)
        })
    })


    const Picture = ({size}) => {
        return <img src={avatar} alt="avatar" className={`object-cover rounded-full  cursor-pointer grayscale border-[1px] border-black`} 
        
            style={{width: `${size}px`, height:`${size}px`}}
        />
    }

    const Default = ({size}) => {
        return <div className={`rounded-full bg-black cursor-pointer`}  style={{width: `${size}px`, height:`${size}px`}}></div>
    }

  return (
    <div>
        {avatar ? <Picture size={size}/> : <Default size={size} />}
    </div>
  )
}

export default Avatar