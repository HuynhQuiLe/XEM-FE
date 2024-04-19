import React, { useEffect, useState } from 'react'
import { userSer } from '../../../api/api'
import Avatar from '../../Photos/Avatar/Avatar'
import DefaultTooltip from '../../Tooltip/DefaultTooltip'


const TenNewMembers = () => {
    useEffect(() => {
        document.querySelector('.mousemove-event').addEventListener('mousemove', e=> {
            var x = e.offsetX;
            var y = e.offsetY;
            var newposX = x + 20;
            var newposY = y - 100; 
            document.querySelectorAll(".move").forEach(item => {
                item.style.transform = (`translate3d(${newposX}px,${newposY}px,0px)`)
            })
        })
    })


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
                    <Avatar size={120} avatar={member.avatar} full_name={member.full_name}  hoverEffect={true}/>
                    <DefaultTooltip text={member.full_name} /> 
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

export default TenNewMembers