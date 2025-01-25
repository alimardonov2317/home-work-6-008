import React from 'react'
import aboutBg from "../../assets/aboutVideo.png"

const AboutHero = () => {
    return (
        <>
            <div className='container'>
                <div className='mt-24'>
                    <div className='flex items-center gap-6'>
                        <div className='w-[72px] h-[2px] bg-black'></div>
                        <span className='uppercase text-[#1D2130] font-bold'>Know About us</span>
                    </div>
                    <div className='flex mt-8'>
                        <div>
                            <h2 className='text-5xl text-[#1D2130] font-bold max-w-[607px]'>We help nature smile and survive everywhere</h2>

                        </div>
                        <div className='max-w-[496px]'>
                            <p className='text-xl font-bold pb-4'>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                            <p className='text-[#1D2130]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim elementum tristique.</p>
                        </div>
                    </div>
                    <img className='mt-[96px]' src={aboutBg} alt="" />
                    <div>
                        <div className='flex py-24 gap-24 justify-center'>
                            <div className='max-w-[496px]'>
                                <p className='font-bold uppercase'>our mission</p>
                                <h3 className='text-[28px] font-bold  pt-4 pb-2'>We make the world we save our own environment</h3>
                                <p className='text-[#1D2130]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                            </div>
                            <div className='max-w-[496px]'>
                                <p className='font-bold uppercase'>our mission</p>
                                <h3 className='text-[28px] font-bold  pt-4 pb-2'>Plant more trees to make world air pollution free</h3>
                                <p className='text-[#1D2130]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutHero