import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Divider,
  Input,
  Select
} from "@chakra-ui/react"

function Groups() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [allowLink, setAllowLink] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRoom("")
    setUsername("");
    console.log(username, room)
  }

  const handleLink = () => {
    if (username !=="" && room !=="") {
      setAllowLink(true);
    }
  }

  const inputClasses = "border-2"
  return (
    <div className='flex justify-center items-center text-zinc-700 h-screen'
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundSize: 'cover',
        backdropFilter: 'blur(100px)'
      }}
    >
      <div 
        className='text-6xl font-bold mb-10 flex justify-center items-center w-1/2 text-white mr-2'
        
      >
        GROUP ROOMS
      </div>
      <Divider orientation='vertical' height='400px' className='mr-10'/>
      <div className='flex justify-center items-center w-1/2 '>
        <form className='flex flex-col bg-gray-100 gap-3 p-4 rounded-md w-full mr-10' onSubmit={handleSubmit}>
          <Input 
            onChange={(e) => setUsername(e.target.value)}
            className={inputClasses}
            placeholder='Enter username...'
            value={username}
            required
            variant='outline'
          />
          <Select 
            onChange={(e) => setRoom(e.target.value)}
            className={inputClasses}
            value={room}
            required
            variant='outline'
          >
            <option value="">Select a room...</option>
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            {/* Add more options as needed */}
          </Select>
          <Link {...(allowLink ? {to: `/chats?username=${username}&room=${room}`} : {})}
            className='border border-white p-1 bg-zinc-700 rounded  hover:bg-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-100 focus:border-transparent transition duration-300 ease-in-out flex justify-center items-center text-white text-md rounded-md cursor-pointer'
            type='submit'
            onClick={handleLink}
          >
            Join Chat
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Groups