import React from 'react'
import bg from '../../assets/bg.png'

const Hero = () => {
    return (
        <div className="container w-[100vw] overflow-hidden">
            <div className='w-[100vw] flex flex-col justify-center pt-[10vh] leading-[75px]'>
                <div className='text-[6rem] m-auto text-white'>Prompt It</div>
                <div className='m-auto text-[2rem] text-white'>Communicating with A.I. made better!</div>
            </div>
            <div className='flex justify center leading-8 m-8 p-8'>
                <div className='text-white text-[1.75rem] p-12 m-12'>Share your articulated <br /> prompts freely with the <br /> community. <br /> A friend in need, a prompt <br /> indeed! <br />
                    ....</div>
            </div>
            <img src={bg} alt="" className='absolute mr-[10px] w-[69rem] top-[30px] right-[-320px]' />
            <div className='flex justify-center w-[100vw] h-[100%]'>
    
                <button className='text-[1.5rem] text-[#00FFDD] border-2 border-[#00FFDD] p-3 rounded-[10px]'>Get Started</button>

            </div>
        </div>
    )
}

export default Hero