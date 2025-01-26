import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const ContactHero = () => {
    return (
        <>
            <div className='bg-[#EBF0F9] py-24'>
                <div className='container'>
                    <div className='flex items-center gap-6'>
                        <div className='w-[72px] h-[2px] bg-black'></div>
                        <span className='uppercase text-[#1D2130] font-bold'>Contact us</span>
                    </div>
                    <div className='flex items-center gap-24'>
                        <div className='max-w-[480px] ml-24 mb-8'>
                            <h2 className='text-[#1D2130] text-[56px] font-bold leading-[67px]'>We'd love to hear from you</h2>
                            <p className='pt-4 py-8 max-w-[496px] text-[#5b5f6c]'>Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.</p>
                        </div>
                        <div>
                            <div className='max-w-[302px]'>
                                <div>
                                    <h4 className='text-2xl text-[#1D2130] font-bold mb-[10px]'>Let's talk! </h4>
                                    <p className='flex gap-8'>+1 23 456 789 <span>hello@finsweet.com</span></p>
                                    <hr className='h-[1px] max-w-[279px] mt-4 mb-8' />
                                </div>
                                <div>
                                    <h4 className='text-2xl text-[#1D2130] font-bold mb-[10px]'>Headoffice</h4>
                                    <p className='text-[#5b5f6c] mb-8'>8 Brewery Drive, Hudson, NH 03051
                                        USA</p>
                                </div>
                                <div>
                                    <h4 className='text-2xl text-[#1D2130] font-bold mb-[10px]'>Branch Office</h4>
                                    <p className='text-[#5b5f6c] mb-8'>178 Marconi St., Venice, 34293
                                        Italy</p>
                                </div>
                                <div className='flex gap-5 text-[#5b5f6c] text-xl'>
                                    <FaFacebook />
                                    <FaTwitter />
                                    <AiFillLinkedin />
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactHero