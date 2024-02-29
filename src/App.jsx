import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Main from './layouts/Main'
import Verification from './pages/Verification/Verification'
import Success from './components/ShowNotification/Success'
import { useEffect } from 'react'
import { notificationLocalStorage } from './api/localStorage'
import { notify } from './utils/notify/notify'
import LoginAgain from './components/LoginAgain/LoginAgain'
import AddReview from './pages/AddReview/AddReview'
import Review from './pages/Review/Review'
import Profile from './pages/Profile/Profile'
import Setting from './pages/Setting/Setting'
import PublicProfile from './pages/Setting/PublicProfile/PublicProfile'
import PersonInfo from './pages/Setting/PersonInfo/PersonInfo'
import Private from './layouts/Private'
import Preview from './pages/Preview/Preview'

function App() {
  
  useEffect(() => {
    notificationLocalStorage?.get() && notify.success(notificationLocalStorage?.get())
}, [])

  return (
    <>
      <Routes>
        <Route path='/' element = {<Main/>}>
          <Route index element={<Home/>} />
          <Route path='danh-gia' element={<Review/>} />
          <Route path='them-review' element={<Private><AddReview/></Private>} />
          <Route path='preview' element={<Private><Preview/></Private>} />
          <Route path='profile/:url' element={<Private><Profile/></Private>} />

          {/* setting */}
          <Route path='settings' element={<Private><Setting/></Private>} >
            <Route path='ho-so' element={<PublicProfile/>}/>
            <Route path='thong-tin-ca-nhan' element={<PersonInfo/>}/>
          </Route>


        </Route>

       
        {/* no layout */}
        <Route path='verification' element={<Verification/>}/>
      
      {/* NOTIFICATION */}
      </Routes>
      <Success/>
      <LoginAgain />
    </>
  )
}

export default App
