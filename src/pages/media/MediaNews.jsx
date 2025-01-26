import React from 'react'
import { NEWS } from '../../static'


const MediaNews = () => {
    return (
        <div className='py-24'>
            <div className='container'>
                <div className='text-center max-w-[488px] m-auto'>
                    <h2 className=' text-5xl font-bold'>Read our Recent News</h2>
                    <p className='text-[#525560] mt-4 mb-12'>Edit this text to make it your own. To edit, simply click directly on the text to start We are served</p>
                </div>
                <div className='grid-cols-4 grid'>
                    {
                        NEWS?.map((item, inx) => (
                            <div key={inx}>
                                <img src={item.img} alt="" />
                                <h4 className='mt-4 mb-2 text-xl text-[#1D2130] font-medium'>{item.title}</h4>
                                <p className='text-[#525560]'>{item.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MediaNews