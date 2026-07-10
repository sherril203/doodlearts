import React from 'react'
import Link from 'next/link'
const Profile= () => {
  return (
    <div>
        <div className='bg-white shadow'>
            <p className='text-2xl font-bold'>Profile</p>
        <div>
            <p>Name</p>
        </div>
        <button className='bg-blue-500 text-white font-bold p-3'>
            <Link href="">Logout</Link>
            </button>
      </div>
    </div>
  )
}

export default Profile
