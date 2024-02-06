import React from 'react'
import { GoDotFill } from "react-icons/go";
import { FaStar } from "react-icons/fa6";
import { HiArrowLongRight } from "react-icons/hi2";
import HeadPhone from '../../assets/headphone.webp'

const Hero = () => {
  return (
    <div className='h-[60vh] mx-16 bg-gray-100 rounded-md flex flex-row gap-16 items-center'>
      <div className='h-[50] my-auto px-8 grid gap-8  '>
      <div className='p-2'>
        <GoDotFill className=''/>
        </div>        <div className='p-2 border border-orange-500 rounded-full'>
        <GoDotFill className='text-orange-500'/>
        </div>
        <div className='p-2'>
        <GoDotFill className=''/>
        </div>        
        <div className='p-2'>
        <GoDotFill className=''/>
        </div>      </div>

      <div className='basis-2/5 grid gap-2'>
        <h2 className='text-5xl font-semibold uppercase'>Shop Computers & Accessories</h2>
        <p className='w-2/3 tracking-wide font-normal'>Shop  laptops, desktops, monitors, tablets,Pc gaming,
         hard drives and storage, accessories and more</p>
         <button className='px-6 border-2 border-gray-600 w-1/4 py-1 text-lg rounded-lg'> View more</button>
      </div>

      {/* text item */}
      <div className='basis-2/5 relative p-4'>
        {/* main card */}
        <div className=' absolute -top-12 z-1 left-0 p-8 bg-white w-3/4 rounded-lg'>
          <p className='text-gray-400 font-medium'>Computer & Accessories</p>
          <h2 className='w-2/3 text-xl font-medium'>JBL T460BT WHITE Headphones</h2>
          <div className='flex items-center my-2'>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <p>1245 reviews</p>
          </div>
          {/*  */}
          <div className='flex items-center gap-4'>
            <h2 className='font-semibold text-xl'>$125.00</h2>
            <p className='line-through text-gray-400 text-md font-semibold'>$200</p>
          </div>
          <div className='flex gap-2 items-center text-gray-500 my-2'>
            <p>View More</p>
            <HiArrowLongRight size={30}/>
          </div>
        </div>

        {/* image */}
        <div className='absolute z-5 w-full  left-12 overflow-hidden -top-40 '>
          <img src={HeadPhone} alt="" className='object-cover w-full h-full'/>
        </div>
      
      </div>
    </div>
  )
}

export default Hero