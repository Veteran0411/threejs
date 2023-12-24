import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0  z-20 bg-[rgba(0,0,0,0.6)]`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scroll(0, 0)
        }}
        >
          <img src="https://api.logo.com/api/v2/images?logo=logo_34574521-0573-41d2-9593-b5b6de12f009&u=2023-10-09T11%3A13%3A49.645Z&margins=0&format=webp&quality=30&width=200&height=200&background=transparent&fit=contain" alt="" className='w-9 h-9 object-contain ' />
          <p className='font-bold'>Veteran</p>
        </Link>
        <ul className='flex gap-4 cursor-pointer list-none'>
          {navLinks.map((link) => ( // in react we use curly braces but in vite use circular
            <li className={`${active === link.title ? "text-blue-600" : "text-white max-lg:hidden"} hover:text-red-600 text-[16px] cursor-pointer`} onClick={() => setActive(link.title)} >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile navigation */}
        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${toggle ? "flex" : "hidden"} p-6 bg-[rgba(0,0,0,0.7)] absolute top-20 right-0 min-w-[140px] z-10 rounded-xl mx-3 my-2`}>
            <ul className='flex gap-4 cursor-pointer list-none justify-end items-start flex-col'>
              {navLinks.map((link) => ( // in react we use curly braces but in vite use circular
                <li className={`${active === link.title ? "text-blue-600" : "text-white"} hover:text-red-600 text-[16px] cursor-pointer font-poppins`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>

                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 