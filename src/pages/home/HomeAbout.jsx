import React from 'react'
import VideoImg from "../../assets/Video.png"

const HomeAbout = () => {
    return (

        <>
            <div className='container'>
                <div className='py-24 flex items-center justify-between'>
                    <div>
                        <div className='flex items-center gap-6'>
                            <div className='w-[72px] h-[2px] bg-black'></div>
                            <span className='uppercase text-[#1D2130] font-bold'>Know About us</span>
                        </div>
                        <div className='mt-8 max-w-[700px]'>
                            <h2 className='text-5xl text-[#1D2130] font-bold max-w-[607px]'>We help nature smile and survive everywhere</h2>
                            <p className='py-8 text-[#525560]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                            <p className='text-[#525560]'>‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                            <button className='py-3 px-8 rounded-md bg-[#70C174] text-white mt-12 ease-in duration-[0.2s] hover:bg-[#1D2130]'>Learn more</button>
                        </div>
                    </div>
                    <div>
                        <img src={VideoImg} alt="" />
                    </div>

                </div>
            </div>

        </>
    )
}

export default HomeAbout