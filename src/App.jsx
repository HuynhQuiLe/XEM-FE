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
import Profile from './pages/Profile/Profile'
import Setting from './pages/Setting/Setting'
import PublicProfile from './pages/Setting/PublicProfile/PublicProfile'
import PersonInfo from './pages/Setting/PersonInfo/PersonInfo'
import Private from './layouts/Private'
import Details from './pages/Details/Details'
import SavedFilms from './pages/SavedFilms/SavedFilms'
import History from './pages/History/History'
import AddEpisode from './pages/Setting/AddEpisode/AddEpisode'
import Add from './pages/Setting/AddFilm/Add'
import Notification from './pages/Notofication/Notification'

function App() {
  
  useEffect(() => {
    notificationLocalStorage?.get() && notify.success(notificationLocalStorage?.get())
}, [])

  return (
    <>
      <Routes>
        <Route path='/' element = {<Main/>}>
          <Route index element={<Home/>} />
          {/* profile */}
          <Route path='profile/:url' element={<Private><Profile/></Private>} />
          {/* setting */}
          <Route path='settings' element={<Private><Setting/></Private>} >
            <Route path='ho-so' element={<PublicProfile/>}/>
            <Route path='thong-tin-ca-nhan' element={<PersonInfo/>}/>
            <Route path='them-phim-moi' element={<Add/>}/>
            <Route path='them-tap-phim' element={<AddEpisode/>}/>
          </Route>
          {/* phim details */}
          <Route path='chi-tiet/:url/:episode_name?' element={<Details/>} />
          <Route path='phim-da-luu' element={<SavedFilms/>} />
          <Route path='lich-su' element={<History/>} />
          <Route path='thong-bao' element={<Private><Notification/></Private>} />
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
