import React from 'react'
import {useState, useEffect} from 'react';
import {roleSer} from '../../../api/api.js';

const RoleSelect = ({role_id, changeUserInfo }) => {
    const [showRole, setShowRole] = useState(false)
    const [roles, setRoles] = useState(null)

    useEffect(() => {
        //get public profile
        roleSer.getAllRoles ()       
        .then(({data}) => {
            setRoles(data.content)
        })
        .catch(error => {
            console.log(error)
        })
    },[])

    const renderRole = () => {
        return roles?.map((role, index) => {
            return <p className={`px-[15px] py-[6px] ${role?.role_id === role_id ? 'bg-light_gray_2' : 'bg-white'} hover:bg-light_gray_2 transition-default cursor-pointer`} 
                        key={index} 
                        role_id={role?.role_id}
                        onClick={(e) => changeUserInfo('role_id',Number(e.target.getAttribute('role_id')))}
                    >{role?.role}</p>
        })
    }

    return (
        <div className='flex-1'>
            <div>
                <label htmlFor="" className='label-text '>Chức vụ (*)</label>
            </div>
            <div>
                <div className='w-full bg-white h-[48px] flex items-center input-default relative cursor-pointer' onClick={()=>setShowRole(!showRole)}>
                    {roles?.length && <p>{roles?.find(role => role?.role_id === role_id) && roles?.find(role => role?.role_id === role_id).role}</p>}
                    <div className=' absolute right-[16px]'>
                        {showRole ? <i className="fa fa-chevron-up text-sub_menu_index"></i> : <i className="fa fa-chevron-down text-sub_menu_index"></i>}    
                    </div>
                    {
                        showRole && <div className=' absolute z-10 w-full top-[48px] left-0 bg-white border-t-0 border-[1px] border-gray'>
                        {roles?.length && renderRole()}
                    </div>
                    }
                </div>
            </div>
            
        </div>
    )
}

export default RoleSelect