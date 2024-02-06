import React from 'react'

const TopNav = () => {
  return (
    <div className='mx-16    text-black'>
      <div className='flex items-center gap-2 py-2'>
      <h2 className='text-md font-medium'>Need Help? </h2>
      <h2 className='flex items-center gap-2'>Call Us<span className='text-orange-500 underline font normal'> +44 7245 345</span></h2>
      </div>
      <div className='w-full h-[1px] bg-gray-200'></div>
    </div>
  )
}

export default TopNav