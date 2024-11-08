import React from 'react'
import Image from 'next/image'
import imgone from "../assests/team-skip-01.jpg"
import imgtwo from "../assests/team-skip-02.jpg"
import imgthree from "../assests/team-skip-03.jpg"
import imgfour from "../assests/team-skip-04.jpg"

const Team = () => {
  return (
    <div className='w-full mt-20 py-20  bg-[#b4c3e1] max-h-max'>
      <div className='w-[90%] mx-auto'>
        <div className="text-center w-[90%] mx-auto font-poppins">
          <h4 className="lg:text-[20px] text-[18px]">Our Team</h4>
          <h1 className="lg:text-[38px] md:text-[32px] text-[28px] text-[#3b41f5] w-full lg:w-[70%] mx-auto leading-[46px] mt-4">
            Meet Our Professionals
          </h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10'>
          <div>
          <Image src={imgone}
          alt="Team member 1"
           width={300} 
           height={300} 
           className="w-full h-auto object-cover rounded-lg" />
           <h3 className='text-lg text-[#3b41f5] font-bold mt-2 text-center'>Floyd Miles</h3>
           <h5 className="text-center">Director of Operations</h5>
          </div>
         <div>
         <Image src={imgtwo}
           alt="Team member 2"
            width={300}
           height={300}
           className="w-full h-auto object-cover rounded-lg" />
           <h3 className='text-lg text-[#3b41f5] font-bold mt-2 text-center'>Jacob Jones</h3>
           <h5 className="text-center">Medical or Health Services Manager</h5>
         </div>
          <div>
          <Image 
          src={imgthree}
          alt="Team member 3"
           width={300}
           height={300} 
           className="w-full h-auto object-cover rounded-lg" />
           <h3 className='text-lg text-[#3b41f5] font-bold mt-2 text-center'>Courtney Henry</h3>
           <h5 className="text-center">Assistant Admissions Director</h5>
          </div>
          <div>
          <Image src={imgfour} 
          alt="Team member 4" 
          width={300} 
          height={300} 
          className="w-full h-auto object-cover rounded-lg" />
           <h3 className='text-lg text-[#3b41f5] font-bold mt-2 text-center'>Devon Lane</h3>
           <h5 className="text-center">Medical Manager</h5>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Team
