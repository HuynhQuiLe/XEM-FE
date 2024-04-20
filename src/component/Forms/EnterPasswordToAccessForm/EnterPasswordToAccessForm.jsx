import React from 'react'
import EnterPasswordToAccessButton from '../../Buttons/EnterPasswordToAccessButton'
import EnterPasswordToAccessInput from '../../Inputs/EnterPasswordToAccessInput/EnterPasswordToAccessInput'

const EnterPasswordToAccessForm = ({pass_word, handleChange, err, setErr}) => {
  return (
    <div className=' w-[350px] m-auto ' >
       <EnterPasswordToAccessInput 
        pass_word={pass_word}
        handleChange={handleChange}
        err={err}
       />
        <div className='flex items-center justify-center mt-[30px]'>
            <EnterPasswordToAccessButton pass_word={pass_word}  setErr={setErr}/> 
        </div>
    </div>
  )
}

export default EnterPasswordToAccessForm