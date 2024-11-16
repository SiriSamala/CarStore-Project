import { User } from 'lucide-react'
import React, { useEffect, useState } from 'react'
// import {  getName } from '../../service/auth'

const AdminTopBar = () => {
//   const [name, setName] = useState('')
//   useEffect(() => {
//     const username = getName()
//     setName(username)
//   }, [])
  return (
    <div className='w-full h-full shadow-cyan-400 shadow-sm flex justify-end items-center px-3 '>
    {name}
    <button classname='h-full w-full flex justify-center items-center shadow-md rounded-md '>
      <User className=' text-cyan-500 p-2 hover:bg-cyan-500 hover:text-white h-full w-full rounded-full' />
    </button>
  </div>

  )
}

export default AdminTopBar