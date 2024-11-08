import React from 'react'
import imgone from "@/app/assests/service-04.jpg"
import imgtwo from "@/app/assests/service-03.jpg"
import imgthree from "@/app/assests/service-05.jpg"
import Image from 'next/image'

const Medical = () => {
  return (
    <div className='w-[90%] mx-auto py-20 mt-6'>
        <div className="text-center font-poppins">
        
        <h4 className="lg:text-[20px] text-[18px]">Primary Care</h4>
        <h1 className="lg:text-[38px] md:text-[32px] text-[28px] text-[#3b41f5] w-full  lg:w-[70%] mx-auto leading-[46px] mt-4">
        Medical Advancements
        </h1>
            
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10 '>
            <div className='font-poppins  shadow-lg rounded-lg '>
                <Image src={imgone} 
                 width={300}
                 height={400}
                 alt=''
                style={{objectFit:"cover"}}
                className='w-full h-auto rounded-lg'
                />
                 <div className='mt-4 px-4 pb-4'>
                 <h2 className='text-[#3b41f5] text-[20px]'>Medical Advancements</h2>
                 <p>Our state-of-the-art facility offers comprehensive dental care with an emphasis on patient comfort and satisfaction</p>
                 <div className='flex gap-2 mt-4 items-center'>
                <h3 className='text-blue'>Learn more</h3>
                <span> <i className="fa-solid  text-blue  fa-arrow-right text-[16px]"></i></span>

                 </div>
                </div>
            </div>

            <div className='font-poppins  shadow-lg rounded-lg '>
                <Image src={imgthree} 
                 width={300}
                 height={400}
                 alt=''
                style={{objectFit:"cover"}}
                className='w-full h-auto rounded-lg'
                />
                 <div className='mt-4 px-4 pb-4'>
                 <h2 className='text-[#3b41f5] text-[20px]'>Medical Advancements</h2>
                 <p>Our state-of-the-art facility offers comprehensive dental care with an emphasis on patient comfort and satisfaction</p>
                 <div className='flex gap-2 mt-4 items-center'>
                <h3 className='text-blue'>Learn more</h3>
                <span> <i className="fa-solid  text-blue  fa-arrow-right text-[16px]"></i></span>

                 </div>
                </div>
            </div>

            <div className='font-poppins  shadow-lg rounded-lg '>
                <Image src={imgtwo} 
                 width={300}
                 height={400}
                 alt=''
                style={{objectFit:"cover"}}
                className='w-full h-auto rounded-lg'
                />
                 <div className='mt-4 px-4 pb-4'>
                 <h2 className='text-[#3b41f5] lg:text-[20px] text-[18px]'>Medical Advancements</h2>
                 <p className='text-[16px]'>Our state-of-the-art facility offers comprehensive dental care with an emphasis on patient comfort and satisfaction</p>
                 <div className='flex gap-2 mt-4 items-center'>
                <h3 className='text-blue'>Learn more</h3>
                <span> <i className="fa-solid  text-blue  fa-arrow-right text-[16px]"></i></span>

                 </div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Medical
