import React from 'react';
import Image from 'next/image';
import Bgimage from "@/app/assests/hospital.jpg";

const HomePage = () => {
  return (
    <div className="relative max-w-full h-screen overflow-hidden"> {/* Container for full height */}
      
      <Image 
        src={Bgimage} 
        alt="Healthcare Background" 
        fill // Use fill for absolute positioning
        style={{ objectFit: 'cover' }} // Cover the entire area
        className="absolute inset-0 z-10" // Absolute positioning
      />
      <div className="relative z-40 lg:w-[80%] w-full flex flex-col items-start justify-center p-6 h-full text-start text-white">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
          Transforming Lives Through Excellence in Healthcare
        </h1>
        <p className="text-base md:text-lg mb-6">
          We are committed to providing exceptional patient care and promoting wellness in our community.
        </p>
        <button className='px-6 py-3 font-bold mt-6 border rounded-md 
         bg-blue hover:bg-white hover:text-blue font-poppins border-blue hover:border-transparent text-white'>
          Book an Appointment
        </button>
      </div>
      <div className='absolute bottom-6 left-0 right-0 z-40 p-4'>
        <hr className='w-full text-white my-4 font-bold border-1'/>
        <div className='flex flex-col md:flex-row justify-between items-center text-white'>
          <div className='flex items-center mb-2 md:mb-0'>
            <i className="fa-solid fa-location-dot mr-2"></i>
            <h5 className="text-sm md:text-base">1234 Washington Ave. Manchester, Kentucky 39495.</h5>
          </div>
          <div className='flex items-center'>
            <i className="fa-solid fa-phone mr-2"></i>
            <h5 className="text-sm md:text-base">(406) 555-012</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
