import { Link, NavLink } from "react-router-dom"
import { Car, User, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Login, Register } from "../api/api"
import React from 'react'
import { toast } from "sonner"

const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const nameRef = useRef('')
    const phoneRef = useRef('')
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

    const handleLogin = async (e) => {
        e.preventDefault()
        const credentials = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        try {
            const response = await Login(credentials)
            const data = await JSON.stringify(response.data)
            if (response.status === 200) {
                // const token = response.data.token
                toast.success("Login success")
                setShowLogin(false)
                // storeToken(token)
                // if (token) {
                //     const role = getRole()
                //     if (role === "ADMIN") {
                //         //navigate to dashboard
                //         navigate('/admin/dashboard')
                //     } else if (role === "USER") {
                //         //navigate to products
                //         navigate('/products')
                //     }
                // }
            } else {
                console.log("Login Error" + data)
            }

        } catch (error) {
            console.error(error)
        }

        console.log(credentials)
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        const credentials = {
            name: nameRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value

        }
        try {
            const response = await Register(credentials)
            const data = await JSON.stringify(response.data)
            if (response.status === 200) {
                console.log("Signup Success" + data)
                setShowRegister(false)
                setShowLogin(true)
            } else {
                console.log("Signup Error" + data)
            }

        } catch (error) {
            console.error(error)
        }

        console.log(credentials)
    }

    const switchAuth = () => {
        if (showLogin) {
            setShowLogin(false)
            setShowRegister(true)
        } else if (showRegister) {
            setShowLogin(true)
            setShowRegister(false)
        }
    }

    // useEffect(() => {
    //   if (emailRef.current) {
    //     emailRef.current.focus(); // Automatically focus on the input
    //   }
    // }, []);

    return (
        <>
            <div className='w-full h-14 text-black shadow-lg flex flex-row justify-center items-center fixed top-0 left-0 bg-white z-50'>
                <div className='w-[20%] flex flex-row justify-center items-center  font-bold gap-2 text-2xl text-black'>
                    <div >
                        <Link to='/'>
                            MotoMart
                        </Link>
                    </div>
                    <div className="h-15 w-15">
                        <Link to='/'>
                            <Car className="h-8 w-8" />
                        </Link>
                    </div>
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
                    <button className="h-8 w-8 flex justify-center items-center border-2 rounded-full border-black hover:border-blue-700 hover:text-blue-700 ml-4 shadow-md " onClick={() => { setShowLogin(!showLogin) }} >
                        <User />
                    </button>
                </div>
            </div>

            {showLogin && (
                <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
                    {/* <div className='h-[55%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
                        <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold gap-3'>
                            <div className="h-[10%] w-[80%] flex flex-row justify-center items-center">
                                <h1 className='w-1/2 text-left text-xl my-6 font-bold text-cyan-500'>Login</h1>
                                <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowLogin(!showLogin) }}>
                                    <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                                </div>
                            </div>
                            <form className='h-[60%] w-[80%] flex flex-col justify-center items-center gap-6' onSubmit={handleLogin}>
                                <input ref={emailRef} type="email" name="" id="email" placeholder='Email' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-cyan-400 rounded-lg' required />
                                <input ref={passwordRef} type="password" name="" id="password" placeholder='Password' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-cyan-400 rounded-lg' required />
                                <button type="submit" className="w-full h-[3rem]  shadow-lg shadow-gray-400 hover:shadow-cyan-400 bg-cyan-500 text-white rounded-lg outline-none">Login</button>
                            </form>
                            <div className="h-[10%] w-[80%] flex justify-center items-start ">
                                <p className="cursor-pointer text-cyan-500 hover:text-cyan-600" onClick={switchAuth}>Register ?</p>
                            </div>
                        </div>
                    </div> */}

                        {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

<div className="mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:px-8 shadow-lg bg-white rounded-lg">
  <div className="mx-auto max-w-lg  ">
  <div className="w-full flex justify-end items-center text-gray-700 cursor-pointer" onClick={() => { setShowLogin(!showLogin) }}>
    <X className="h-8 w-8 border-2 p-1  border-gray-600 rounded-full  hover:bg-gray-700 hover:text-white" />
    </div>
    <h1 className="text-center text-2xl font-bold text-black sm:text-3xl">Welcome to MotoMart! </h1>

    <p className="mx-auto mt-4 max-w-md text-center text-gray-600">
     Log in to explore a wide range of cars, exclusive deals, and personalized services tailored just for you.
    </p>

    <form action="#" className="mb-0 mt-6 space-y-4 rounded-lg p-4  sm:p-6 lg:p-8">
      <p className="text-center text-lg font-medium">Sign in to your account</p>

      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            type="email"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-lg"
            placeholder="Enter email"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Password</label>

        <div className="relative">
          <input
            type="password"
            className="w-full rounded-lg  p-4 pe-12 text-sm shadow-lg shadow-gray-700/10"
            placeholder="Enter password"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="block w-full rounded-lg bg-gray-600 px-5 py-3 text-sm font-medium text-white hover:bg-black"
      >
        Sign in
      </button>

      <p className="text-center text-sm text-gray-500">
        No account?
        <a className="underline" href="#">Sign up</a>
      </p>
    </form>
  </div>
</div>

                </div>
            )
            }

            {showRegister && (
                <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
                    <div className='h-[75%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md '>
                        <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold gap-4'>
                            <div className="h-[10%] w-[80%] flex flex-row justify-center items-center">
                                <h1 className='w-1/2 text-left text-xl my-6 font-bold text-sky-500'>Register</h1>
                                <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowRegister(!showRegister) }}>
                                    <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                                </div>
                            </div>
                            <form className='h-[70%] w-[80%] flex flex-col justify-center items-center gap-6' onSubmit={handleRegister}>
                                <input ref={nameRef} type="text" name="" id="name" placeholder='Name' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-sky-400 rounded-sm' required />
                                <input ref={emailRef} type="email" name="" id="email" placeholder='Email' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-sky-400 rounded-sm' required />
                                <input ref={passwordRef} type="password" name="" id="password" placeholder='Password' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:sky-purple-400 rounded-sm' required />
                                <input ref={phoneRef} type="number" name="" id="phone" placeholder='Phone' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-sky-400 rounded-sm' required />
                                <button type="submit" className="w-full h-[3rem] shadow-lg shadow-gray-400 hover:shadow-sky-400 bg-sky-500 text-white rounded-sm outline-none">Register</button>
                            </form>
                            <div className="h-[10%] w-[80%] flex justify-center items-start">
                                <p className="cursor-pointer text-sky-500 hover:text-sky-600" onClick={switchAuth}>Login ?</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }

        </>
    )
}

export default Navbar