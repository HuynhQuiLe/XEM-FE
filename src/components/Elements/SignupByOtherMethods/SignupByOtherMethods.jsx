import React from 'react'

const SignupByOtherMethods = () => {
    return (
      <>
          <div className='mt-[32px] mb-[16px]'>
              <p className='text-black font-light'>Hoặc đăng ký bằng</p>
          </div>
  
          <div className='flex gap-[16px]'>
              <button className='flex-1 button border-[1px] border-black hover:bg-black_hover hover:text-white transition-all ease-in-out duration-300 font-light '>
                  <i className="fab fa-google mr-[8px]"></i>
                  Google
              </button>
              <button className='flex-1 button border-[1px] border-black hover:bg-black_hover hover:text-white transition-all ease-in-out duration-300 font-light '>
                  <i className="fab fa-facebook-f mr-[8px]"></i>
                  Facebook
              </button>
              <button className='flex-1 button border-[1px] border-black hover:bg-black_hover hover:text-white transition-all ease-in-out duration-300 font-light '>
                  <i className="fab fa-twitter mr-[8px]"></i>
                  Twitter
              </button>
          </div>
      </>
    )
  }

export default SignupByOtherMethods