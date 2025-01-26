import React from 'react'
import { NavLink } from "react-router-dom";
import LogoBlack from "../../assets/LogoBlack.png"
import { FOOTERLINK } from '../../static';



const Footer = () => {
    return (
        <>
            <footer className='bg-black text-white py-24'>
                <div className='container'>
                    <nav className='flex justify-between'>
                        <div>
                            <NavLink to={"/"}>
                                <img src={LogoBlack} alt="Site Logo" />
                            </NavLink>
                        </div>
                        <ul className='flex gap-[88px]'>
                            {
                                FOOTERLINK?.map((item, inx) => (
                                    <div key={inx} className=''>
                                        <h3 className='font-bold'>{item.title}</h3>
                                        <ul className='mt-5'>
                                            {item.link.map((link, linkIndex) => (
                                                <li className='mb-5' key={linkIndex}>
                                                    <span className='text-sm text-[#C9C8C8]'>{link}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))
                            }
                        </ul>
                        <div className='max-w-[544px] w-full'>
                            <h2 className='text-[40px] font-bold mb-8'>Subscribe to get latest upddates</h2>
                            <form action="" className='flex items-center relative'>
                                <input className='w-full bg-inherit border-2 border-[#EBF0F94D] py-5 px-5 rounded rounded-r-none border-r-0' type="email" placeholder='Your email' />
                                <button className='bg-white border-2 border-white text-black py-5 px-5 rounded mr-1 absolute right-[-5px]'>Subscribe</button>
                            </form>
                        </div>
                    </nav>
                </div>
            </footer>
        </>
    )
}

export default Footer