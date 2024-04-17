import React from 'react'
import { tokenLocalStorage } from '../../api/localStorage'
import NotLoggedin from '../../component/Sections/FollowingFilms/NotLoggedin/NotLoggedin'
import Loggedin from '../../component/Sections/FollowingFilms/Loggedin/Loggedin'


const FollowingFilms = () => {
  const isLoggedIn = tokenLocalStorage?.get() ? true : false
  return (
    <>
      {isLoggedIn ? <Loggedin/> : <NotLoggedin/>}
    </>
  )
}

export default FollowingFilms