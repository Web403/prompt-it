import React from 'react'
import { Link } from 'react-router-dom';

let isAuthenticated = true;

const Navbar = () => {
    {
        if (isAuthenticated) {
            return (
                <div className="container fixed">
                    <nav className='w-[100vw] bg-black h-[100%]'>
                        <div className='flex justify-between'>
                            <div className='flex justify-between w-[40vw]'>
                                <div className='text-white font-bold text-[#00FFDD] text-[3rem] pl-8'>Prompt-It</div>
                                <div className='text-[#00FFDD] list-none flex p-2'>
                                    <li className='m-2 p-1 text-[1.25rem]'>Home</li>
                                    <li className='m-2 p-1 text-[1.25rem]'>Explore</li>
                                    <li className='m-2 p-1 text-[1.25rem]'>Profile</li>
                                </div>
                            </div>
                            <div className='flex justify-evenly w-[20vw] h-[100%] p-2'>
                                <div className='text-white font-bold p-3 text-[#00FFDD]'>Login</div>
                                <div className='text-white font-bold border-2 rounded-[20%] p-3 text-[#00FFDD] border-[#00FFDD]'>Sign Up</div>
                            </div>
                        </div>
                    </nav>
                </div>
            )
        } else {
            return (
                <div className="container">
                    <nav className='w-[100vw] bg-black h-[100%]'>
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <div className='text-white font-bold text-[#00FFDD] text-[3rem] pl-8'>Prompt-It</div>
                            </div>
                            <div className='flex justify-evenly w-[20vw] h-[100%] p-2'>
                                <div className='text-white font-bold p-3 text-[#00FFDD]'>Login</div>
                                <div className='text-white font-bold border-2 rounded-[20%] p-3 text-[#00FFDD] border-[#00FFDD]'>Sign Up</div>
                            </div>
                        </div>
                    </nav>
                </div>
            )
        }
    }
}

export default Navbar