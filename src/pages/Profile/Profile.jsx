import React, { useEffect, useState } from 'react'
import {userSer} from '../../api/api.js'
import Avatar from '../../components/Avatar/Avatar.jsx'

const Profile = () => {
    const [profile, setProfile] = useState(null)

    useEffect(() => {       
        // get user information
        userSer.getProfile()
        .then(({data}) => {
            setProfile(data.content)
        })
        .catch(error => {
            console.log(error)
        })
    },[])


  return (
    <section className='mt-[50px] min-h-[50vh] mb-[100px]'>
        <div className='mb-[45px] flex justify-end'>
            <i className="fa fa-share-alt text-[25px]"></i>
        </div>
        <div className='flex justify-between items-center'>
            <div className='flex gap-[30px] items-center'>
                <Avatar size={88}/>
                <p className='text-[29px] font-semibold'>{profile?.full_name}</p>
            </div>
            <div>
                <table className='max-w-[400px] '>
                    <thead className='w-[400px]'>
                        <tr className='flex justify-between w-[400px] text-center border-[1px] border-black rounded-tl-[8px] rounded-tr-[8px] border-separate'>
                            <th className='flex-1 p-[16px] text-[12px] uppercase font-[400] border-r-[1px] border-black border-separate'>WORKS</th>
                            <th className='flex-1 p-[16px] text-[12px] uppercase font-[400] border-r-[1px] border-black border-separate'>SOTM</th>
                            <th className='flex-1 p-[16px] text-[12px] uppercase font-[400] border-r-[1px] border-black border-separate'>SOTD</th>
                            <th className='flex-1 p-[16px] text-[12px] uppercase font-[400] '>HM</th>
                        </tr>
                    </thead>
                    <tbody className='w-[400px]'>
                        <tr className='flex justify-between w-[400px] text-center border-[1px] border-t-0 border-black rounded-bl-[8px] rounded-br-[8px] border-separate' >
                            <td className='flex-1 py-[20px] px-[16px] text-[22px] font-semibold border-r-[1px] border-black border-separate'>0</td>
                            <td className='flex-1 py-[20px] px-[16px] text-[22px] font-semibold border-r-[1px] border-black border-separate'>0</td>
                            <td className='flex-1 py-[20px] px-[16px] text-[22px] font-semibold border-r-[1px] border-black border-separate'>0</td>
                            <td className='flex-1 py-[20px] px-[16px] text-[22px] font-semibold'>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  )
}

export default Profile