import React from 'react'
import {useState} from 'react';

const KeepMeLogginRadio = () => {
  let [checked, setChecked] = useState(true)

  return (
      <div className='pl-[25px] relative flex items-center mb-[30px] w-fit cursor-pointer'
          onClick={()=>{setChecked(!checked)}}                        
      >
          <div className='absolute w-[20px] h-[20px] rounded-[4px] border-[2px] border-[#d3d3d3] top-[50%] -translate-y-[50%] left-0 '
          
          >
              {checked && <div className='absolute w-[10px] h-[10px] rounded-[2px] bg-black top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] '></div>}
          </div>
          <p className=' font-light'>Duy trì đăng nhập</p>
      </div>
  )
}

export default KeepMeLogginRadio