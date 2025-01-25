import React from 'react';
import { LINKS } from '../../static';
import { NavLink } from "react-router-dom";
import siteLogo from "../../assets/siteLogo.svg"
const Header = ({ backgroundHeader }) => {
    return (
        <header className={` h-[67px] flex items-center ${backgroundHeader}`}>
            <div className='container'>
                <nav className='flex gap-10 items-center'>
                    <div className='flex-1'><img src={siteLogo} alt="" /></div>
                    <ul className='flex items-center gap-10'>
                        {
                            LINKS.map((item, inx) => (
                                <li className='text-[#525560] font-medium hover:text-black' key={inx}>
                                    <NavLink to={item.to}>
                                        {item.link}
                                        <span></span>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                    <button className='py-3 px-8 rounded-md bg-[#1D2130] text-white hover:bg-[#70C174] ease-linear duration-[.2s]'>Donate</button>
                </nav>
            </div>
        </header>
    )
}

export default Header;
