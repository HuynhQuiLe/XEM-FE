import React, { useEffect, useState } from 'react'
import { userSer } from '../../../api/api'

const UserAvatar = () => {
    const[newMemberList, setNewMemberList] = useState(null)

    const positionList = [
        'top-[68%] left-[47%]',
        'top-[38%] left-[85%]',
        'top-[38%] right-[85%]',
        'bottom-[68%] left-[47%]',
        'top-[48%] left-[25%]',
        'top-[52%] right-[29%]',
        'top-[18%] left-[36%]',
        'top-[15%] right-[29%]',
        'top-[10%] left-[20%]',
        'bottom-[10%] right-[15%]',
    ]

    useEffect(() => {
        userSer.getTenNewMembers()
        .then(({data}) => {
            setNewMemberList(data.content)
        })
    },[])

    const renderNewMmbers = () => {
        return newMemberList.map((member, index) => {
            return (
                <div key={index} className={`group absolute w-[120px] h-[120px] ${positionList[index]}  rounded-full`}>
                    <img className='w-full h-full rounded-full object-cover grayscale border-[1px] border-black hover:grayscale-0 transition-default' 
                        src={member.avatar} alt= {`avatar của ${member.full_name}`}
                    />
                    <p className=' move opacity-0 px-[10px] group-hover:opacity-100 py-[8px] overflow-hidden absolute text-white bg-black text-nowrap rounded-[8px]'
                    style={{
                        transition:'transform .4s cubic-bezier(.02,1.23,.79,1.08)'
                        }}
                    >{member.full_name}</p>
                </div>
            )
        })
    }

  return (
    <div className='absolute w-full h-full mousemove-event'>
        {newMemberList ? renderNewMmbers () : null}
    </div>

  )
}

export default UserAvatar