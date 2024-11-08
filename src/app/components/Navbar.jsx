"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from "@/app/assests/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='h-20 flex justify-between items-center bg-white px-4 py-2'>
      <div>
        <Image src={Logo} width={140} height={100} alt={"logo"} />
      </div>
      <div className='hidden lg:flex gap-4 lg:text-[18px] text-[16px] text-black font-poppins'>
        <h4 className='text-blue cursor-pointer hover:text-black'>Home</h4>
        <h4 className='cursor-pointer hover:text-blue'>About Us</h4>
        <h4 className='cursor-pointer hover:text-blue'>Services</h4>
        <h4 className='cursor-pointer hover:text-blue'>Contact</h4>
      </div>
      <button className='hidden lg:block px-4 py-2 font-bold border rounded-md border-blue bg-white hover:bg-blue hover:text-white font-poppins text-blue'>
        Book an Appointment
      </button>
      {/* Hamburger Icon */}
      <div className='lg:hidden flex items-center'>
        <button onClick={handleToggle} className='focus:outline-none'>
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-2xl text-blue`}></i>
        </button>
      </div>

      {/* Mobile Menu with CSS transitions */}
      <div
        className={`absolute top-20 left-0 w-full bg-white shadow-lg lg:hidden z-40 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0'}`}
      >
        <div className='flex flex-col gap-2 px-4 py-2 text-black font-poppins'>
          <h4 className='cursor-pointer hover:text-blue'>Home</h4>
          <h4 className='cursor-pointer hover:text-blue'>About Us</h4>
          <h4 className='cursor-pointer hover:text-blue'>Services</h4>
          <h4 className='cursor-pointer hover:text-blue'>Contact</h4>
          <button className='w-full px-4 py-2 border rounded-md border-blue bg-white hover:bg-blue hover:text-white font-poppins text-blue'>
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
