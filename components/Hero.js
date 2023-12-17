import React from "react";
import { Carousel } from "@material-tailwind/react";
import SpecialProfileBox from "./SpecialProfileBox";

const Hero = () => {
  return (
    <div className="co border">
      <div className="flex flex-col lg:flex-row">
        <div className="h-[30vh] md:h-[50vh] w-full lg:w-2/3">
          <Carousel
            className=""
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

        <div className="bg-indigo-500 w-full flex flex-col justify-between lg:w-1/3 lg:mt-0 ml-0 p-3 text-sm">
          <SpecialProfileBox
            name="Shri Yogi Adityanath"
            post="Honble CM of Uttar Pradesh"
            img="/1img88.png"
          />
          <SpecialProfileBox
            name="Shri Ashish Patel"
            post="Honble Minister of Technical Education, UP"
            img="/2img88.png"
          />
          <SpecialProfileBox
            name="Shri Yogi Adityanath"
            post="Honble CM of Uttar Pradesh"
            img="/1img88.png"
          />
          <SpecialProfileBox
            name="Shri Yogi Adityanath"
            post="Honble CM of Uttar Pradesh"
            img="/2img88.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
