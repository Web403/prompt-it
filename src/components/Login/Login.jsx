import React from 'react'
import bg from '../../assets/bg.png'

const Signup = () => {
    return (
        <div className="container w-[100vw] overflow-hidden">
            <img src={bg} alt="" className='absolute mr-[10px] w-[80rem] top-[200px] right-[-320px]' />
            <div className='flex justify-center w-[100vw] h-[100vh] items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <input type="text" name="" placeholder='Username' id="" className='p-5 m-5 h-[10px] w-[25rem] border-[#00FFDD] placeholder-white bg-[transparent] border-2 rounded-[15px] hover:p-6 duration-[0.4s] hover:rounded-[25px]'/>
                    <input type="text" name="" placeholder='Password' id="" className='p-5 m-5 h-[10px] w-[25rem] border-[#00FFDD] placeholder-white bg-[transparent] border-2 rounded-[15px] hover:p-6 duration-[0.4s] hover:rounded-[25px]'/>
                    <button className='text-[1.5rem] text-[#00FFDD] bg-black p-3 w-[15rem]'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Signup