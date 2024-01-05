import React from 'react'

const Navbar = () => {
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

export default Navbar