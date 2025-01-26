import React from 'react'
import WhatWeDoBg from "../../assets/WhatWeDo.png"

const WhatWeHero = () => {
    return (
        <>
            <div className='container'>

                <div className='flex items-center gap-28 py-24'>
                    <div className='max-w-[594px]'>
                        <div className='flex items-center gap-6 mb-3'>
                            <div className='w-[72px] h-[2px] bg-black'></div>
                            <span className='uppercase text-[#1D2130] font-bold'>What we do</span>
                        </div>
                        <div className='ml-24'>
                            <h2 className='text-[56px] font-bold max-w-[491px] leading-[67px]'>We are working worldwide</h2>
                            <p className='text-[#525560] pt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                        </div>
                    </div>
                    <div>
                        <img src={WhatWeDoBg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatWeHero