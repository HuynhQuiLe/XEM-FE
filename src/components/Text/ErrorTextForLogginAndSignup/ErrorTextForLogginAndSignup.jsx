import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {setErrAPI} from '../../../redux/authSlice';

const ErrorTextForLogginAndSignup = () => {
    const dispatch = useDispatch()
    const {errAPI} = useSelector(state => state.authSlice)

    useEffect(() => {
        return () => {
            dispatch(setErrAPI(''))
        }
    },[])


    if(!errAPI) {
        return null
    }

    return (
        <div className='pt-[10px] mb-[30px]'>
            <p className=' text-error text-[12px] font-light'>{errAPI}</p>
        </div>
    )
}

export default ErrorTextForLogginAndSignup