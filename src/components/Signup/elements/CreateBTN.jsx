import React from 'react'
import LoadingCircle from '../../LoadingCircle/LoadingCircle';
import { useDispatch, useSelector } from 'react-redux';
import { setErrAPI, setErrCheckBox, setUserSignupErr } from '../../../redux/authSlice';
import { authSer } from '../../../api/api';
import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router-dom';
import { userSignupLocalStorage } from '../../../api/localStorage';


const CreateBTN = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isLoading} = useSelector(state => state.minusLoadingSlice)

    const {userSignup, checkBox, userSignupErr, errCheckBox} = useSelector(state => state.authSlice)

    const signup = (e) => {
        e.preventDefault()
        if(!userSignup.email ) {
            dispatch(setUserSignupErr({email: 'Trường này không được để trống.'}))
        }

        if(!userSignup.pass_word ) {
            dispatch(setUserSignupErr({pass_word: 'Trường này không được để trống.'}))

        }

        if(!userSignup.full_name ) {
            dispatch(setUserSignupErr({full_name: 'Trường này không được để trống.'}))

        }

        if(!userSignup.re_pass_word  ) {
            dispatch(setUserSignupErr({re_pass_word: 'Trường này không được để trống.'}))
        }


        if(!checkBox.email || !checkBox.term) {
            dispatch(setErrCheckBox('Vui lòng chấp nhận điều khoản.'))
        }

        if(!userSignup.email || !userSignup.full_name || !userSignup.pass_word || !userSignup.re_pass_word || !checkBox.email || !checkBox.term) {
            return null
        }

        // check error
        if(userSignupErr.email || userSignupErr.pass_word ||userSignupErr.re_pass_word || userSignupErr.full_name|| errCheckBox) {
            return null
        }

        // OK

        // check duplication
        const email = userSignup.email
        authSer.checkDuplicateEmail({email})
        .then(({data}) => {
            console.log(data)
            navigate('/verification')

            // accepted all => tam luu data lai
            userSignupLocalStorage.set(userSignup)

            // accepted all => send email + luu vao datdabase
            const code = new Date().getTime().toString().slice(-6)

            const params = {
                to_name: userSignup.full_name,
                to_email: email,
                message: code,
                from_name: "Reviewer"
            }

            authSer.createVerificationCode({email, code_key: code.toString()})
            // gui verification code => va dieu huong
            emailjs.send('signup', 'template_lxj06jp', params , 'O2AkEIdS9pwK4YQFL')
            .then((result) => {
                console.log(result)
                navigate('/verification')
            }, (error) => {

                console.log(error.text);
            });

            
        })
        .catch(error => {
            dispatch(setErrAPI(error.response.data.message))
        })
    }


  return (
    <div className='relative mt-[10px] mb-[30px]'>
        <button className='w-full h-[72px] bg-black text-white rounded-[8px] text-[20px] font-light hover:bg-black_hover transition-all ease-in-out duration-300'
            onClick={signup}
        >
         {isLoading ? <LoadingCircle/> : "Tiếp tục"}
        </button>
    </div>
    )
}

export default CreateBTN