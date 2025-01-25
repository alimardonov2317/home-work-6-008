import React from 'react';
import { BIO } from '../../static';

const WhatWeBio = () => {
    return (
        <div className='bg-[#EFF7F2] py-24'>
            <div className='container'>
                <h2 className='text-5xl font-bold pb-16'>
                    What we do for the environment
                </h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {
                        BIO?.map((item, inx) => (
                            <div key={inx} className=' p-6'>
                                <div className='flex gap-6'>
                                    <img src={item.img} alt={item.title} className='w-[28px] h-[28px] mt-5' />
                                    <div>
                                        <h3 className='text-2xl font-bold mt-4'>{item.title}</h3>
                                        <p className='mt-2 text-gray-600'>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default WhatWeBio;
