import React from "react";
import imgone from "../assests/testimonial-skip-01.jpg"
import imgtwo from "../assests/testimonial-skip-02.jpg"
import imgthree from "../assests/testimonial-skip-03.jpg"
import imgFour from "../assests/testimonial-skip-04.jpg"
import Image from "next/image";

const Stories = () => {
  return (
    <div className="py-20 font-poppins w-[90%] mx-auto">
      <h4>Patient Stories</h4>
      <h1 className=" font-medium  text-[#3b41f5] text-3xl mt-4">
        What Our Patient are Saying
      </h1>

      <div className="sm:grid-cols-2 grid-cols-1 grid gap-8 mt-6">
        <div className=" px-4 py-4 rounded-md shadow-sm   ring ring-gray-400">
          <div>
            <span>
              <i className="fa-solid fa-star text-yellow-500"></i>
            </span>
            <span>
              <i className="fa-solid fa-star text-yellow-500"></i>
            </span>
            <span>
              <i className="fa-solid fa-star text-yellow-500"></i>
            </span>
            <span>
              <i className="fa-solid fa-star text-yellow-500"></i>
            </span>
            <span>
              <i className="fa-regular fa-star-half-stroke text-yellow-500"></i>
            </span>
          </div>
          <p className="text-[16px] mt-4">
            Turpis gravida mauris neque phasellus ut praesent ullamcorper a
            amet. Consequat amet turpis vitae pretium viverra. Platea non
            imperdiet fringilla nunc lacus congue mauris in vitae.
          </p>
          <div className=" flex items-center gap-4 mt-4">
            <Image src={imgone} width={50} height={50} alt="" className=" rounded-full"/>
            <h4>Jessica</h4>

          </div>
          <div>
          </div>         
        </div>

        <div className=" px-4 py-4 rounded-md shadow-sm   ring ring-gray-400">
          <div>
            <span>
              <i className="fa-solid fa-star text-yellow-500"></i>
            </span>
            <span>
              <i className="fa-solid fa-star text-yellow-500"></i>
            </span>
            <span>
              <i className="fa-solid fa-star text-yellow-500"></i>
            </span>
            <span>
              <i className="fa-solid fa-star text-yellow-500"></i>
            </span>
            <span>
              <i className="fa-regular fa-star-half-stroke text-yellow-500"></i>
            </span>
          </div>
          <p className="text-[16px] mt-4">
            Turpis gravida mauris neque phasellus ut praesent ullamcorper a
            amet. Consequat amet turpis vitae pretium viverra. Platea non
            imperdiet fringilla nunc lacus congue mauris in vitae.
          </p>
          <div className=" flex items-center gap-4 mt-4">
            <Image src={imgtwo} width={50} height={50} alt="" className=" rounded-full"/>
            <h4>Jessica</h4>

          </div>
          <div>

          </div>
        </div>

        <div className=" px-4 py-4 rounded-md shadow-sm   ring ring-gray-400">
          <div>
            <span>
              <i className="fa-solid fa-star text-yellow-500"></i>
            </span>
            <span>
              <i className="fa-solid fa-star text-yellow-500"></i>
            </span>
            <span>
              <i className="fa-solid fa-star text-yellow-500"></i>
            </span>
            <span>
              <i className="fa-solid fa-star text-yellow-500"></i>
            </span>
            <span>
              <i className="fa-regular fa-star-half-stroke text-yellow-500"></i>
            </span>
          </div>
          <p className="text-[16px] mt-4">
            Turpis gravida mauris neque phasellus ut praesent ullamcorper a
            amet. Consequat amet turpis vitae pretium viverra. Platea non
            imperdiet fringilla nunc lacus congue mauris in vitae.
          </p>
          <div className=" flex items-center gap-4 mt-4">
            <Image src={imgthree} width={50} height={50} alt="" className=" rounded-full"/>
            <h4>Jessica</h4>

          </div>
          <div>

          </div>
        </div>
        <div className=" px-4 py-4 rounded-md shadow-sm   ring ring-gray-400">
          <div>
            <span>
              <i className="fa-solid fa-star text-yellow-500"></i>
            </span>
            <span>
              <i className="fa-solid fa-star text-yellow-500"></i>
            </span>
            <span>
              <i className="fa-solid fa-star text-yellow-500"></i>
            </span>
            <span>
              <i className="fa-solid fa-star text-yellow-500"></i>
            </span>
            <span>
              <i className="fa-regular fa-star-half-stroke text-yellow-500"></i>
            </span>
          </div>
          <p className="text-[16px] mt-4">
            Turpis gravida mauris neque phasellus ut praesent ullamcorper a
            amet. Consequat amet turpis vitae pretium viverra. Platea non
            imperdiet fringilla nunc lacus congue mauris in vitae.
          </p>
          <div className=" flex items-center gap-4 mt-4">
            <Image src={imgFour} width={50} height={50} alt="" className=" rounded-full"/>
            <h4>Jessica</h4>

          </div>
          <div>

          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Stories;
