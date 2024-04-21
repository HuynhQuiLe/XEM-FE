import {useState, useEffect} from 'react';
import MainMenu from './MainMenu'
import { useNavigate } from 'react-router-dom'
import { userSer } from '../../api/api';
import Avatar from '../../components/Photos/Avatar/Avatar';
import SubHeaderLogo from '../Logos/SubHeaderLogo';

const ProfileSubHeader = () => {
  const navigate = useNavigate()
  const [isShow, setIsShow] = useState(false)
  
  const [profile, setProfile] = useState(null)
  useEffect(() => {
      // get user information
      userSer.getProfile()
      .then(({data}) => {
        setProfile(data.content)
      })
      .catch(error => {
          console.log(error)
      })
  },[])

  return (
    <section className={`fixed z-[1] left-[50%] bottom-[30px] -translate-x-[50%]  p-[6px] bg-sub_header_bg rounded-[14px] text-[14px] flex w-fit font-light show-on-begin ${isShow ? 'h-[393px] min-w-[720px]' : 'h-[72px] min-w-0'} transition-default`}>
        <div>
          {isShow && <MainMenu/>}
          <div className='h-[60px] bg-black text-white px-[20px] flex items-center rounded-[8px] cursor-pointer'
              onClick={() => setIsShow(!isShow)}
          >
              <div className=' cursor-pointer'><SubHeaderLogo width={15} /> </div>
              <p className='mr-3 ml-1'>profile</p>
              <i className=" cursor-pointer fa fa-bars"></i>
          </div>
        </div>
        {!isShow && <div className='ml-[6px] bg-[#3e3e3e] text-white rounded-[8px] h-[60px] flex items-center px-[6px]'>
            <div className='flex items-center ml-[6px] mr-[12px] gap-[10px] '>
              <Avatar  size={32} full_name={profile?.full_name} avatar={profile?.avatar}/>
              <p className='link-text leading-[200%] before:bg-white '>{profile?.full_name}</p>
            </div>
        </div>}
        {!isShow && <div className='ml-[6px] bg-primary text-black rounded-[8px] h-[60px] flex items-center px-[6px] cursor-pointer'>
            <p className='flex items-center px-[20px] font-semibold ' onClick={() => navigate('/settings/ho-so')}>Settings</p>
        </div>}
    </section>
  )
}

export default ProfileSubHeader