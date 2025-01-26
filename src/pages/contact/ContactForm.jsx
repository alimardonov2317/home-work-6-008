import React from 'react'

const ContactForm = () => {
    return (
        <>
            <div className='py-24'>
                <div className='container'>
                    <form className='max-w-[768px]  mx-auto'>
                        <div className='grid-cols-2 grid max-w-[768px] gap-8 mx-auto'>
                            <div className='mb-8 max-w-[368px] w-full'>
                                <label className='block text-[12px] text-[#5b5f6c] font-bold mb-2' htmlFor="fname">First Name</label>
                                <input className='border-2 border-[#E5E5E5] max-w-[368px] w-full border-t-0 border-x-0 focus:outline-none focus:border-black' type="text" id='fname' />
                            </div>
                            <div className='mb-8 max-w-[368px] w-full'>
                                <label className='block text-[12px] text-[#5b5f6c] font-bold mb-2' htmlFor="lname">Last Name</label>
                                <input className='border-2 border-[#E5E5E5] max-w-[368px] w-full border-t-0 border-x-0 focus:outline-none focus:border-black' type="text" id='lname' />
                            </div>
                            <div className='max-w-[368px] w-full'>
                                <label className='block text-[12px] text-[#5b5f6c] font-bold mb-2' htmlFor="email">Email Id</label>
                                <input className='border-2 border-[#E5E5E5] max-w-[368px] w-full border-t-0 border-x-0 focus:outline-none focus:border-black' type="email" id='email' />
                            </div>
                            <div className='max-w-[368px] w-full'>
                                <label className='block text-[12px] text-[#5b5f6c] font-bold mb-2' htmlFor="subject">Subject</label>
                                <input className='border-2 border-[#E5E5E5] max-w-[368px] w-full border-t-0 border-x-0 focus:outline-none focus:border-black' type="text" id='subject' />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label className='block text-[12px] text-[#5b5f6c] font-bold mt-8 mb-1 ' htmlFor="subject">Message</label>
                            <input className='border-2 border-[#E5E5E5] w-full focus:outline-none focus:border-black pb-[120px] pt-5 px-5 rounded-[4px]' type="text" id='subject' placeholder='Type your Messege' />
                            <button className='py-3 px-8 rounded-md bg-[#70C174] text-white hover:bg-[#1D2130] hover:text-white ease-in duration-[.2s] m-auto mt-8'>What we do</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default ContactForm