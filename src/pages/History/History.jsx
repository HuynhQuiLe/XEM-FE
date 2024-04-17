import React from 'react'
import {tokenLocalStorage} from '../../api/localStorage';
import Loggedin from './Loggedin';
import NotLoggedin from './NotLoggedin';


const History = () => {
  const user = tokenLocalStorage?.get() ? true : false
  return (
    <div>
      {user ? <Loggedin/> : <NotLoggedin/>}
    </div>
  )
}

export default History