import { useEffect, useState } from 'react'
import { userSer } from '../api/api'
import { notify } from '../utils/notify/notify'
import { notificationLocalStorage } from '../api/localStorage'
import { useSelector } from 'react-redux'
import { setIsAdmin } from '../redux/userSlice'

const Admin = ({children}) => {
    let [accepted, setAccepted] =useState(false)

    useEffect(() => {
        userSer.checkAdmin()
        .then(({data}) => {
            console.log(data)
            setIsAdmin(data.content)
            setAccepted(data.content)
            notify.success(data.message)
            if(data.content) {
                notify.success(data.message)
            } else {
                notificationLocalStorage.set(data.message)
                return null
            }
        })
        .catch(error => {
            console.log(error)
        })
    },[])

    if(accepted) {
        return children
    } else {
        return history.back()
    }
   
}

export default Admin