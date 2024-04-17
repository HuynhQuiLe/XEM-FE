import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header/Header'
import HomeSubHeader from '../components/SubHeader/HomeSubHeader'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation'
import ProfileSubHeader from '../components/SubHeader/ProfileSubHeader'
import SettingSubHeader from '../components/SubHeader/SettingSubHeader'
import DetailSubHeader from '../components/SubHeader/DetailSubHeader'

const Main = () => {
  const {pathname} = useLocation()
  const renderSubHeader = () => {
    if (pathname.replaceAll('/','') === '') {
      return <HomeSubHeader/>
    }

   

    if(pathname.includes('profile')) {
      return <ProfileSubHeader/>
    }
    
    if(pathname.includes('settings')) {
      return <SettingSubHeader/>
    }

    if(pathname.includes('chi-tiet')) {
      return <DetailSubHeader/>
    }

   
  }

  return (
    <>
        <Header/>
        {/* <Navigation/> */}
        <Outlet />
        <Footer/>
        {renderSubHeader()}
    </>
  )
}

export default Main