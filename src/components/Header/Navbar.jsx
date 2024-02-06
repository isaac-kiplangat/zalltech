import React from 'react'
import { PiSquaresFour } from "react-icons/pi";
import { SiSquarespace } from "react-icons/si";
import { FaRegHeart, FaRegUser, FaSearch, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";



const Navbar = () => {
  const navItems = [
    { link: "Today's Deals", path:"/"},
    { link: "Gift Cards", path:"/"},
    { link: "Registry & Gifting", path:"/"},

  ]
  return (
    <div className='px-16 py-4  flex justify-between '>
      <div className='flex items-center gap-16 w-1/2'>
        <div>
          <h2 className='flex items-center text-lg font-semibold'><SiSquarespace/>Zalltech</h2>
        </div>
          <ul className='flex item-center w-full justify-between'>
            <li className='flex items-center gap-1'>
              <PiSquaresFour/>All</li>
            {navItems.map((item, index)=>(
              <Link key={index} to={item.path}>{item.link}</Link>
            ))}
          </ul>
       </div>

      {/* second items */}
      <div className='flex items-center gap-8'>
        {/* search bar */}
        <div className=' flex items-center p-1 gap-1  hover:border focus:bg-gray-100 hover:border-gray-200 overflow-hidden rounded-full'>
        <input type="search" name="search" id="" className='focus:outline-none px-2 py-1' />
        <FaSearch size={20} className='text-b'/>
        <p className='font-medium text-lg'>Search</p>
        </div>

        <FaRegUser size={25} />
        <FaRegHeart size={25}/>
        <FiShoppingCart size={25}/>

      </div>


    
    </div>
  )
}

export default Navbar