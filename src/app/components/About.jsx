import React from "react";
import img from "@/app/assests/aboutus.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full mt-20 py-20 bg-[#b4c3e1] max-h-max">
      <div className="text-center w-[90%] mx-auto font-poppins">
        <h4 className="lg:text-[20px] text-[18px]">About Us</h4>
        <h1 className="lg:text-[38px] md:text-[32px] text-[28px] text-[#3b41f5] w-full lg:w-[70%] mx-auto leading-[46px] mt-4">
          We always deliver expertise and compassion in every interaction.
        </h1>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-14 h-full w-[90%] mx-auto">
        <div className="h-auto w-full">
          <Image
            src={img}
            width={200}
            height={400}
            style={{ objectFit: "cover" }}
            className="w-full h-full border rounded-2xl"
            alt="About us"
          />
        </div>
        <div className="flex flex-col justify-center font-poppins">
          <h2 className="text-[#3b41f5] lg:text-[20px] text-[18px] mb-4">
            Experience exceptional medical care at the General Hospital, a
            luxury hotel designed to provide comfortable and personalized
            healthcare services to its guests.
          </h2>
          <h4 className="text-black text-[14px] mb-4">
            General Hospital is a luxury medical facility that provides
            top-notch medical care to its patients. With state-of-the-art
            technologies and experienced medical professionals, we offer
            personalized treatment options for all kinds of medical conditions.
            Our facility is equipped with comfortable and spacious rooms.
          </h4>
          <h4 className="text-black text-[14px]">
            &quot;Experience top-notch medical care at General Hospital, where our
            expert team of doctors and modern facilities ensure your well-being.
            Rest easy in our luxurious accommodations and ease your worries.&quot;
          </h4>
          <button className="py-4 mt-4 px-4 border-2 block text-blue text-[20px] border-blue">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
