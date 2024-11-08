import React from 'react';

const Appiontment = () => {
  return (
    <div className="w-full bg-blue text-white font-poppins py-16">
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
        <h1 className="text-2xl md:text-3xl lg:text-[30px] font-bold lg:w-[60%]">
          Take the first step towards better health. Book your appointment now!
        </h1>
        <button className="mt-6 lg:mt-0 px-6 py-3 md:px-8 md:py-4 font-bold border rounded-md border-white bg-blue hover:bg-white hover:text-blue text-white">
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default Appiontment;
