import React from 'react'

const Services = () => {
  return (
    <div className='w-[90%] mx-auto grid lg:grid-cols-3 font-geistSans md:grid-cols-2 gap-6 grid-cols-1 mt-20'>
        <div className='lg:px-8 lg:py-8 px-4 py-6 rounded-lg border-[1px] border-black'>
            <div  className='w-[10%] bg-blue text-blue mb-6 border-[2px] border-blue'> </div>
            <h1 className='lg:text-[24px] md:text-[22px] text-[20px] font-bold'>Find a Doctor</h1>
            <p className='text-[16px]'>Discover exceptional healthcare professionals
             at General Hospital; access licensed physicians in various medical fields.</p>
            <div className='flex gap-2 mt-4 items-center'>
            <h3 className='text-blue'>Doctor Schedule</h3>
             <span> <i className="fa-solid  text-blue  fa-arrow-right text-[16px]"></i></span>

            </div>
        </div>
        <div className='lg:px-8 lg:py-8 px-4 py-6 rounded-lg border-[1px] border-black'>
            <div  className='w-[10%] bg-blue text-blue mb-6 border-[2px] border-blue'> </div>
            <h1 className=' lg:text-[24px] md:text-[22px] text-[20px] font-bold'> Make an Appointment</h1>
            <p>Schedule an appointment with our top medical
             professionals at General Hospital through our online booking service.</p>
            <div className='flex gap-2 mt-4 items-center'>
            <h3 className='text-blue '>Contact Us </h3>
             <span> <i className="fa-solid  text-blue  fa-arrow-right text-[16px]"></i></span>

            </div>
        </div>
        <div className='lg:px-8 lg:py-8 px-4 py-6 rounded-lg border-[1px] border-black'>
            <div  className='w-[10%] bg-blue text-blue mb-6 border-[2px] border-blue'> </div>
            <h1 className=' lg:text-[24px] md:text-[22px] text-[20px] font-bold'>Find a Condition</h1>
            <p>Explore a range of conditions with our comprehensive guide 
            to common illnesses and injuries, available at General Hospital</p>
            <div className='flex gap-2 mt-4 items-center'>
            <h3 className='text-blue '>Need Help?</h3>
             <span> <i className="fa-solid  text-blue  fa-arrow-right text-[16px]"></i></span>

            </div>
        </div>
      
    </div>
  )
}

export default Services
