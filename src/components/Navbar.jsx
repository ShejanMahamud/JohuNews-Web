import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';

const Navbar = () => {

const navigate = useNavigate();
const {user} = useContext(AuthContext)

  return (
    // <div className='w-[90%] mx-auto flex items-center my-5'>
    //     <ul className='flex items-center gap-10 text-[#706F6F] justify-start w-full flex-wrap lg:flex-nowrap'>
    //         <li>Home</li>
    //         <li>Latest</li>
    //         <li>Sports</li>
    //         <li>Entertainment</li>
    //         <li>International</li>
    //     </ul>
    //     <div className='flex items-center gap-3 justify-end w-full'>
    //         <img src={user?.photoURL || 'user.svg'} alt="user.svg" className='w-12 rounded-full'/>
    //         {
    //           !user && <button onClick={()=>setTimeout(()=>{navigate('/login')},1000)} className='bg-[#403F3F] font-bold text-white text-lg px-5 py-2'>Login</button>
    //         }
    //     </div>
    // </div>

<div className="navbar bg-base-100 w-[90%] mx-auto font-poppins">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box">
        <li><a className='text-[#706F6F] font-medium text-lg'>Home</a></li>
        <li><a href="" className='text-[#706F6F] font-medium text-lg'>Latest</a></li>
        <li><a href="" className='text-[#706F6F] font-medium text-lg'>Sports</a></li>
        <li><a href="" className='text-[#706F6F] font-medium text-lg'>Entertainment</a></li>
        <li><a href="" className='text-[#706F6F] font-medium text-lg'>International</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a className='text-[#706F6F] font-medium'>Home</a></li>
        <li><a href="" className='text-[#706F6F] font-medium'>Latest</a></li>
        <li><a href="" className='text-[#706F6F] font-medium'>Sports</a></li>
        <li><a href="" className='text-[#706F6F] font-medium'>Entertainment</a></li>
        <li><a href="" className='text-[#706F6F] font-medium '>International</a></li>
    </ul>
  </div>
  <div className="navbar-end">

  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL || 'user.svg'} alt="user.svg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-80">
        <li>
          <a className="justify-between">
            {user?.displayName || 'User'}
            <span className="badge">New User</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>

  {
      !user && <button onClick={()=>setTimeout(()=>{navigate('/login')},1000)} className='bg-[#403F3F] font-bold text-white text-lg px-5 py-2'>Login</button>
            }
  </div>

</div>
  )
}

export default Navbar