import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header/Header'
import HomeSubHeader from '../components/SubHeader/HomeSubHeader'
import Footer from '../components/Footer/Footer'
import ReviewSubHeader from '../components/SubHeader/ReviewSubHeader'
import Navigation from '../components/Navigation/Navigation'
import ProfileSubHeader from '../components/SubHeader/ProfileSubHeader'
import SettingSubHeader from '../components/SubHeader/SettingSubHeader'
import AddReviewSubHeader from '../components/SubHeader/AddReviewSubHeader'

const Main = () => {
  const {pathname} = useLocation()
  const renderSubHeader = () => {
    if (pathname.replaceAll('/','') === '') {
      return <HomeSubHeader/>
    }

    if(pathname.includes('danh-gia')) {
      return <ReviewSubHeader/>
    }

    if(pathname.includes('profile')) {
      return <ProfileSubHeader/>
    }
    
    if(pathname.includes('settings')) {
      return <SettingSubHeader/>
    }

    if(pathname.includes('them-review')) {
      return <AddReviewSubHeader/>
    }
  }

  return (
    <>
        <Header/>
        <Navigation/>
        <Outlet />
        <Footer/>
        {renderSubHeader()}
    </>
  )
}

export default Main