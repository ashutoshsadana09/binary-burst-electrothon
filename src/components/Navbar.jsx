import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'
import { Divider } from "@chakra-ui/react"
import logoBlack from '../../public/logoblack.png'

function Navbar() {
  const linkClasses = "py-0.5 px-2 rounded-sm  text-zinc-900 hover:text-zinc-500 hover:rounded-md transition-colors duration-300 ease-in-out cursor-pointer"

  const { user , loginWithRedirect, logout } = useAuth0();

  return (
    <div className='flex justify-center flex-col items-center w-full p-2 text-zinc-900 '>
      <nav className=' flex justify-between pl-3 pr-3 mb-1 w-full bg-gray-100 rounded'>
        <Link className='flex justify-center items-center text-xl'
          to={'/'}
        >
          <div
            className='flex justify-center items-center'
          >
          <img 
            src={logoBlack}
            alt='logo'
            className='h-12'
          />
          <p>CampusLink</p>
          </div>
        </Link>
        <ul className='flex justify-between items-center gap-4 px-3 py-2  text-xl'>
          <li className={linkClasses}>
            <Link to="/">Home</Link>
          </li>
          {user ? <ul className='flex justify-evenly'>
            {/* <li className={linkClasses}>
              <Link to="/chat">Chat</Link>
            </li>
            <li className={linkClasses}>
              <Link to="/groups">Groups</Link>
            </li>
            <li className={linkClasses}>
              <Link to="/profile">Profile</Link>
            </li> */}
            <li className={linkClasses} onClick={logout}>Logout</li>
            </ul>
          : <li className={linkClasses} onClick={loginWithRedirect}>
            Login
          </li>}
        </ul>
      </nav>
      <Divider orientation='horizontal' />
    </div>
  )
}

export default Navbar