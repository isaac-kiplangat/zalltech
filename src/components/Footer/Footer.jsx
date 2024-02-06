import React from 'react'

const Footer = () => {
  return (
    <div className='mx-16 rounded-md py-4  bg-orange-100  '>

      <div className='w-5/6 my-4 mx-auto grid grid-cols-4'>

        <div>
        <h2 className='font-semibold text-md my-2'>Get to Know Us</h2>
        <ul>
          <li>Career</li>
          <li>Blog</li>
          <li>About zalltech</li>
          <li>Investor relationship</li>
          <li>Zalltech devices</li>
          <li>Zaltech offers</li>

        </ul>
      </div>

      {/* enter 2 */}
      <div>
        <h2 className='font-semibold text-md my-2'>Make Money With Us</h2>
        <ul>
          <li>Become an Affiliate </li>
        </ul>
      </div>

      {/* 3 */}
      <div>
        <h2 className='font-semibold text-md my-2'>Let us Help You</h2>
        <ul>
          <li>Your Account</li>
          <li>Your Orders</li>
          <li>Rates and Policies</li>
          <li>Returns & Replacements</li>
          <li>Zalltech Assistant</li>
          <li>Help</li>
        </ul>
      </div>

      {/* 4 */}
      <div>
        <h2 className='font-semibold text-md my-2'>Zalltech Payment Products</h2>
        <ul>
          <li>Business Card</li>
          <li>Shop with Points</li>
          <li>Excange Gift Cards</li>
          <li>Reload your Balance</li>
          <li>Currency Conveter</li>
        </ul>
      </div>

    </div>
    </div>
  )
}

export default Footer