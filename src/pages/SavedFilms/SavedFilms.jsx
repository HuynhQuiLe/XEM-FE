import React, { useEffect, useState } from 'react'
import { tokenLocalStorage } from '../../api/localStorage'
import Loggedin from './Loggedin'
import NotLoggedin from './NotLoggedin'


const SavedFilms = () => {
  const isLoggedIn = tokenLocalStorage?.get() ? true : false
  return (
    <>
      {isLoggedIn ? <Loggedin/> : <NotLoggedin/>}
    </>
  )
}

export default SavedFilms