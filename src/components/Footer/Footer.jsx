import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className='mt-3 p-3'>
      <div className='container'>
        <div className='flex justify-between gap-3'>
          <span>Cartsy Medicine - All right reserved - Design & Developed by RedQ ,Inc</span>
          <div className='icons flex justify-center items-center text-xl gap-2'>
            <BsFacebook className='cursor-pointer'/>
            <AiFillLinkedin className='cursor-pointer' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer