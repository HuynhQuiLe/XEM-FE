import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SettingSubHeader from '../components/SubHeader/SettingSubHeader'
import DetailSubHeader from '../components/SubHeader/DetailSubHeader'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import HomeSubHeader from '../components/SubHeader/HomeSubHeader'
import ProfileSubHeader from '../components/SubHeader/ProfileSubHeader'

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
        <Outlet />
        <Footer/>
        {renderSubHeader()}
    </>
  )
}

export default Main