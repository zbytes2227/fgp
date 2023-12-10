import React from "react";
import { Carousel } from "@material-tailwind/react";

const Hero = () => {
  return (
    <div className="container mx-auto border">
      <div className="flex flex-col lg:flex-row p-2">
        <div className="border-3 h-[30vh] md:h-[40vh] w-full lg:w-2/3">
          <Carousel
            className="rounded-lg"
            autoplay={true}
            loop={true}
            transition={{ duration: 1 }}
          >
            <img
              src="/im1.jpeg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="/im2.jpeg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="/im3.jpeg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="/im4.jpeg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </div>

        <div className="border-3 bg-blue-200 w-full lg:w-1/3 rounded-lg lg:ml-1 lg:mt-0 ml-0 mt-3 p-3">
          <h4 class="block font-sans text-xl text-center antialiased font-semibold leading-snug tracking-normal text-inherit mb-2">
            OUR DEPARTMENTS
          </h4>
          <p className="p-1 bg-white mb-1.5 rounded pl-3 hover:cursor-pointer hover:shadow-xl hover-outline">
            <a href="/courses/mechanical">Mechanical Engineering</a>
          </p>
          <p className="p-1 bg-white mb-1.5 rounded pl-3 hover:cursor-pointer hover:shadow-xl hover-outline">
            <a href="/courses/electronics">Electronics Engineering</a>
          </p>
          <p className="p-1 bg-white mb-1.5 rounded pl-3 hover:cursor-pointer hover:shadow-xl hover-outline">
            <a href="/courses/cse">Computer Science & Engineering</a>
          </p>
          <p className="p-1 bg-white mb-1.5 rounded pl-3 hover:cursor-pointer hover:shadow-xl hover-outline">
            <a href="/courses/it">Information Technology Engineering</a>
          </p>
          <p className="p-1 bg-white mb-1.5 rounded pl-3 hover:cursor-pointer hover:shadow-xl hover-outline">
            <a href="/courses/mom">Modern Office Management</a>
          </p>
          <p className="p-1 bg-white mb-1.5 rounded pl-3 hover:cursor-pointer hover:shadow-xl hover-outline">
            <a href="/courses/ic">Information & Control Engineering</a>
          </p>
        </div>
      </div>
    </div>

    
  );
};

export default Hero;
