import React from 'react'

function Profile({user}) {
  console.log(user);
  return (
    <div className='flex justify-center items-center h-screen text-white text-2xl'>
      <div className=' w-1/2 p-2 flex justify-center items-center flex-col'>
        {/* <img src={user.picture} className='rounded-full'/> */}
        <div className="item-left mt-3">
          <div>Name: {user.name}</div>
          <div>Email: {user.email}</div>  
        </div>
      </div>
      
    </div>
  )
}

export default Profile