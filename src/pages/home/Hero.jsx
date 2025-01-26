import React from 'react';
import heroBg from "../../assets/hero.png";
import { FaCirclePlay } from "react-icons/fa6";

export const Hero = () => {
    return (
        <>
            <div className='h-[735px] bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${heroBg} )` }}>
                <div className='container'>
                    <h2 className='text-[64px] font-bold text-white max-w-[640px] pt-[128px]'>Save the environment today for a better tomorrow</h2>
                    <div className='flex items-center gap-6 pt-12'>
                        <button className='py-3 px-8 rounded-md bg-white text-black hover:bg-[#70C174] hover:text-white ease-in duration-[.2s]'>What we do</button>
                        <button className='flex items-center gap-2 text-white hover:text-[#70C174]'><FaCirclePlay className='text-white text-[24px] hover:text-[#70C174]' /> Play video</button>
                    </div>
                    <div className='flex items-center text-white justify-between pt-[152px]'>
                        <p>23,800 trees planted</p>
                        <hr className='text-white max-w-[860px] w-full' />
                        <p>5840 donations collected</p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Hero;
