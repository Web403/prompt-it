import React from 'react'

const Profile = () => {
    return (
        <div className='flex justify-center items-center h-screen w-[100vw] flex-col'>
            <div className='w-[50vw] h-[60vh] bg-black flex flex-col items-center border-2 border-[#00FFDD]'>
                <div className='w-[21%] h-[35%] bg-[transperent] rounded-[50%] border-2 border-[#00FFDD] m-8'>
                    <img src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='absolute top-[14.65rem] w-[12rem] h-[12rem] left-[54rem] rounded-[50%]' />
                </div>
                <div className='text-white text-[1.75rem]'>Username</div>
                <div className='text-white text-[0.75rem]'>DD/MM/YYYY</div>
                <div className='w-[30vw] h-[2px] bg-[#00FFDD] m-5'></div>
                <div className='flex flex-col float-left w-[30vw]'>
                    <div className='text-white text-[1.5rem]'>Contact Info :</div>
                    <div className='text-white text-[1rem] flex flex-col items-center'>
                        <span>Email : Email@gmail.com</span>
                        <span>Phone No : +91 9284825922</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile