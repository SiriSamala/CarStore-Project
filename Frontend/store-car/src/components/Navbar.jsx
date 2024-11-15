import {Link, NavLink} from "react-router-dom"
import {Car, User} from "lucide-react"
import React from 'react'

const Navbar = () => {

    const Linksdata = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'NewCars',
            path: '/newcars'
        },
        {
            title: 'UsedCars',
            path: '/usedcars'
        }
    ]

  return (
    <>
                <div className='w-full h-14 text-black shadow-lg flex flex-row justify-center items-center'>
                <div className='w-[20%] flex justify-center items-center  font-bold text-2xl text-black'>
                  <Link to='/'>
                <Car />MotoMart
                  </Link>
                </div>
                <div className='w-[100%] h-full flex justify-start items-center '>
                    <div className='w-[94%] h-full flex flex-row justify-start items-center gap-8 font-bold'>
                        {Linksdata.map((link, index) => (
                            <NavLink to={link.path} key={index} className='h-[65%] w-20 hover:bg-blue-700 hover:text-white flex justify-center items-center rounded-sm'>
                                {link.title}
                            </NavLink>
                        ))
                        }
                    </div>
                    <button className="h-8 w-8 flex justify-center items-center border-2 rounded-full border-black hover:border-blue-700 hover:text-blue-700 ml-4 shadow-md ">
                    <User  />
                    </button>
                </div>
                
            </div>
    </>
  )
}

export default Navbar

