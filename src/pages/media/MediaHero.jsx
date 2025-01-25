import React from 'react'
import { MEDIA } from "../../static/"

const MediaHero = () => {
    return (
        <>
            <div className='bg-[#EFF7F2]'>
                <div className='container'>
                    <div className='flex items-center py-24 gap-24'>
                        <div className='max-w-[592px]'>
                            <div className='flex items-center gap-6 mb-3'>
                                <div className='w-[72px] h-[2px] bg-black'></div>
                                <span className='uppercase text-[#1D2130] font-bold'>Top news</span>
                            </div>
                            <h2 className='text-[#1D2130] text-[56px] font-bold leading-[67px]'>Our goal is to make water available for everyone</h2>
                            <p className='pt-4 py-8 max-w-[496px]'>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                            <button className='py-3 px-8 rounded-md bg-[#70C174] text-white hover:bg-[#1D2130] hover:text-white ease-in duration-[.2s]'>What we do</button>
                        </div>
                        <div className='bg-white pt-6 pb-2 px-6 rounded-xl'>
                            {
                                MEDIA?.map((item, inx) => (
                                    <>
                                        <div className='flex items-center mb-6 gap-6'>
                                            <img src={item.img} alt="" />
                                            <div key={inx}>
                                                <h3 className='text-xl font-bold pb-2'>{item.title}</h3>
                                                <p className='text-[#525560]'>{item.desc}</p>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MediaHero