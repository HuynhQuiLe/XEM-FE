import {useState, useEffect} from 'react';
import MainMenu from './MainMenu'
import {userSer} from '../../api/api.js';
import Avatar from '../Avatar/Avatar';
import SmallLogo from '../Logo/SmallLogo';
import SubHeaderLogo from '../Logo/SubHeaderLogo';

const SettingSubHeader = () => {
  const [isShow, setIsShow] = useState(false)
  const [profile, setProfile] = useState(null)
  useEffect(() => {
      userSer.getProfile()
      .then(({data}) => {
        setProfile(data.content)
      })
      .catch(error => {
          console.log(error)
          'abc'.toLowerCase
      })
  },[])
  
  return (
    <section className={`fixed z-[10] left-[50%] bottom-[30px] -translate-x-[50%]  p-[6px] bg-sub_header_bg rounded-[14px] text-[14px] flex w-fit font-light show-on-begin ${isShow ? 'h-[393px] min-w-[720px]' : 'h-[72px] min-w-0'} transition-default`}>
        <div>
          {isShow && <MainMenu/>}
          <div className='h-[60px] bg-black text-white px-[20px] flex items-center rounded-[8px]'
              onClick={() => setIsShow(!isShow)}
          >
               <div className=' cursor-pointer'><SubHeaderLogo width={15} /> </div>
              <p className='mr-3 ml-1'>settings</p>
              <i className=" cursor-pointer fa fa-bars"></i>
          </div>
        </div>
        {!isShow && <div className='ml-[6px] bg-[#3e3e3e] text-white rounded-[8px] h-[60px] flex items-center px-[6px]'>
            <div className='flex items-center ml-[6px] mr-[12px] gap-[10px] '>
              <Avatar size={32} />
              <p className='link-text leading-[200%] before:bg-white '>{profile?.full_name}</p>
            </div>
        </div>}
        
    </section>
  )
}

export default SettingSubHeader