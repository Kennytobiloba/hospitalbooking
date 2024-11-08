import Image from 'next/image'
import React from 'react'
import img from "@/app/assests/why-us.jpg"

const Choose = () => {
  return (
    <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 mt-14 gap-8">
      <div className="py-10 flex flex-col justify-center items-start md:items-center">
       <div>
       <h1 className="text-3xl md:text-4xl text-black mb-2 lg:text-start text-center  ">
          Why Choose Us
        </h1>
        <h4 className="text-sm md:text-base text-black mb-6 lg:text-start text-center">
          Id sed suspendisse massa elit morbi odio justo vitae pharetra. Sed nullam sit est scelerisque tincidunt pellentesque felis.
        </h4>
       </div>
        <div className="space-y-4">
          <div>
            <h2 className="font-semibold text-[20px] text-black lg:text-start text-center">20+ years of services</h2>
            <p className="text-black text-sm md:text-base lg:text-start text-center">
              General Hospital boasts over 20 years of exceptional healthcare services, making it a top choice in the industry.
            </p>
          </div>
          <hr className='bg-black w-full' />
          <div>
            <h2 className="font-semibold text-[20px]  text-black lg:text-start text-center">Leading healthcare provider</h2>
            <p className="text-black text-sm md:text-base lg:text-start text-center">
              General Hospital - a leading healthcare provider delivering top-notch medical care.
            </p>
          </div>
          <hr className='bg-black w-full' />
          <div>
            <h2 className="font-semibold text-[20px]  text-black lg:text-start text-center">Patient-centric care</h2>
            <p className="text-black text-sm md:text-base lg:text-start text-center">
              General Hospital - patient-centric care is at the core of our values.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <Image 
          src={img}
          alt="Why Choose Us"
          width={600}
          height={400}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  )
}

export default Choose
