import { sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useContext, useEffect, useRef, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from 'react-hot-toast';
import { FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { MdOutlineInsertPhoto, MdOutlinePhoneAndroid } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import auth from './auth.config';

const Register = () => {

const navigate = useNavigate();    
const [show, setShow] = useState(false);
const [lowPassword, setLowPassword] = useState(null);
const [mediumPassword, setMediumPassword] = useState(null);
const [strongPassword, setStrongPassword] = useState(null);
const inputRef = useRef(null);
const {emailPassRegister} = useContext(AuthContext);
const recaptcha = useRef(null)

useEffect(()=>{
    inputRef.current.focus();
},[])

const handleEmailPassRegister = (e) => {
    e.preventDefault();
    if(!e.target.terms.checked){
        toast.error('Please Accept Our Terms & Conditions!');
        return;
    }

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const emailRegex = /^([a-zA-Z0-9._%+-]+)@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com)$/i;
    const captchaValue = recaptcha.current.getValue();

    if(!captchaValue){
        toast.error('Please Submit Captcha!');
        return;
    }

    if(!emailRegex.test(email)){
        toast.error('Must be email should be Gmail, Outlook, Yahoo, Hotmail');
        return;
    }

    if(password.length < 8 ){
        toast.error('Password must be long 8 characters!');
        return;
    }

    emailPassRegister(auth,email,password)
    .then(res => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
        sendEmailVerification(auth.currentUser)
        .then(res => {
            e.target.reset();
            toast.success('Register Successful!');
            setTimeout(()=>{
                navigate('/login')
            },2000)
        })
    })
    .catch(error => {
        console.log(error)
    })

}

const handlePassword = (e) => {
    const normalPasswordRegex = /^.{6,}$/;
    const mediumPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{10,}$/;

    if(normalPasswordRegex.test(e.target.value)){
        setLowPassword(true)
    }else{
        setLowPassword(false)
    }

    if(mediumPasswordRegex.test(e.target.value)){
        setMediumPassword(true)
        setLowPassword(false)
    }else{
        setMediumPassword(false)
    }

    if(strongPasswordRegex.test(e.target.value)){
        setStrongPassword(true);
        setLowPassword(false);
        setMediumPassword(false);
    }else{
        setStrongPassword(false)
    }
}

  return (
    <div className='w-[90%] mx-auto my-20 flex flex-col items-center justify-center font-poppins'>
        <h1 className="mb-3 text-4xl font-bold text-[#403F3F] uppercase tracking-wider">
        Register
          </h1>
          
          <p className="mb-10 text-gray-500 font-medium text-sm">
          Already User? Login <Link className="underline text-[#32B7C5] font-bold" to={'/login'}>Here</Link>
          </p>
        <form className='w-[30%] mx-auto flex flex-col items-center gap-5' onSubmit={handleEmailPassRegister}>
        <label class="input input-bordered flex items-center gap-2 w-full">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
  <input type="text" name='name' class="grow" placeholder="Name" ref={inputRef} required/>
</label>
<label class="input input-bordered flex items-center gap-2 w-full">
<MdOutlineInsertPhoto />
  <input type="text" class="grow" name='photo' placeholder="Photo URL" required/>
</label>
        <label className="input input-bordered flex items-center gap-2 w-full">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" name='email' placeholder="Email" required/>
</label>
<label className="input input-bordered flex items-center gap-2 w-full">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
  <div className='flex items-center justify-between w-full'>
  <input  type={show ? 'text' : 'password'} name='password' className="grow focus:outline-none focus:border-none" placeholder='Password' required onChange={handlePassword}/>
<button type='button' onClick={()=>setShow(!show)}>
{show ? <IoEyeOff/> : <IoEye />}
</button>
  </div>
  </label>
  <div className='w-full flex items-center justify-end'>
    {
        lowPassword && <span className='text-red-500 font-bold text-sm text-end'>Normal</span>
    }
    {
        mediumPassword && <span className='text-yellow-500 font-bold text-sm text-end'>Medium</span>
    }
    {
        strongPassword && <span className='text-green-500 font-bold text-sm text-end'>Strong</span>
    }
  </div>
  <div className='w-full flex items-center gap-3'>
  <input type="checkbox" name="terms" class="checkbox" />
  <span className='text-gray-500'>Accept our terms and conditions</span>
  </div>
  <ReCAPTCHA sitekey={import.meta.env.VITE_SITE_KEY} ref={recaptcha}/>
  <button type='submit' className='w-full text-white bg-[#403F3F] py-3 rounded-lg uppercase font-medium'>Register</button>
    <h1 className='font-medium text-sm'>Or Login With</h1>
  <div className='w-full flex items-center gap-5 justify-center'>
    <button type='button' className='w-10 h-10 bg-[#403F3F] rounded-lg text-white flex items-center justify-center'><FaGoogle /></button>
    <button type='button' className='w-10 h-10 bg-[#403F3F] rounded-lg text-white flex items-center justify-center'><FaXTwitter /></button>
    <button type='button' className='w-10 h-10 bg-[#403F3F] rounded-lg text-white flex items-center justify-center'><MdOutlinePhoneAndroid /></button>
  </div>
        </form>
        <Toaster />
    </div>
  )
}

export default Register