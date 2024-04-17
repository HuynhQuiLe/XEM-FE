import React from 'react'
import {tokenLocalStorage} from '../../api/localStorage';
import NotLoggedin from '../../component/Sections/History/NotLoggedin/NotLoggedin';
import Loggedin from '../../component/Sections/History/Loggedin/Loggedin';


const History = () => {
  const user = tokenLocalStorage?.get() ? true : false
  return (
    <div>
      {user ? <Loggedin/> : <NotLoggedin/>}
    </div>
  )
}

export default History