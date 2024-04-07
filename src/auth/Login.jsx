import { sendEmailVerification } from 'firebase/auth';
import React, { useContext, useEffect, useRef, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from 'react-hot-toast';
import { FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import auth from './auth.config';

const Login = () => {

  const recaptcha = useRef(null);
  const [show, setShow] = useState(false);
  const {emailPassLogin,googleLogin,user} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleEmailPassLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if(!recaptcha.current.getValue()){
      toast.error('Please Submit Captcha');
      return;
    }

    emailPassLogin(email,password)
    .then(res => {
      const user = auth.currentUser;
      if(user.emailVerified){
        toast.success('Successfully Logged in!');
        e.target.reset();
        setTimeout(()=>{
          navigate('/');
        },2000);

      }else{
        sendEmailVerification(auth.currentUser)
        .then(res => {
          toast.error('Please verify email first!');
        })
      }
    })
    .catch(error => {
      toast.error('Something went wrong!')
    })
  }

  const handleGoogleLogin = () => {
    googleLogin()
    .then(res => {
      toast.success('Successfully Logged in!');
      setTimeout(()=>{
        window.scroll(0,0);
        navigate('/');
      },2000)
    })
    .catch(error => {
      toast.error('Something went wrong!')
    })
  }

  useEffect(() => {
    if (user) {
      navigate('/') 
    }
  }, [user]);


  return (
    <div className='w-[90%] mx-auto my-20 flex flex-col items-center justify-center font-poppins'>
        <h1 className="mb-3 text-4xl font-bold text-[#403F3F] uppercase tracking-wider">
            Login
          </h1>
          
          <p className="mb-10 text-gray-500 font-medium text-sm">
          Not Registered? Register <Link className="underline text-[#32B7C5] font-bold" to={'/register'}>Here</Link>
          </p>
        <form className='w-[30%] mx-auto flex flex-col items-center gap-5' onSubmit={handleEmailPassLogin}>
        <label className="input input-bordered flex items-center gap-2 w-full">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" name='email' required/>
</label>
<label className="input input-bordered flex items-center gap-2 w-full">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
  <div className='flex items-center justify-between w-full'>
  <input  type={show ? 'text' : 'password'} name='password' className="grow focus:outline-none focus:border-none" placeholder='Password' required/>
<button type='button' onClick={()=>setShow(!show)}>
{show ? <IoEyeOff/> : <IoEye />}
</button>
  </div>
  </label>
  <button type='submit' className='w-full text-white bg-[#403F3F] py-3 rounded-lg uppercase font-medium'>Login</button>

  <ReCAPTCHA sitekey={import.meta.env.VITE_SITE_KEY} ref={recaptcha}/>

    <h1 className='font-medium text-sm'>Or Login With</h1>
  <div className='w-full flex items-center gap-5 justify-center'>
    <button type='button' onClick={handleGoogleLogin} className='w-10 h-10 bg-[#403F3F] rounded-lg text-white flex items-center justify-center'><FaGoogle /></button>
    <button type='button' className='w-10 h-10 bg-[#403F3F] rounded-lg text-white flex items-center justify-center'><FaXTwitter /></button>
    <button type='button' className='w-10 h-10 bg-[#403F3F] rounded-lg text-white flex items-center justify-center'><MdOutlinePhoneAndroid /></button>
  </div>
        </form>
        <Toaster/>
    </div>
  )
}

export default Login