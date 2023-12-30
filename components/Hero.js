import React from "react";
import { Carousel } from "@material-tailwind/react";
import SpecialProfileBox from "./SpecialProfileBox";

const Hero = () => {
  return (
    <div className="">
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

        <div className="bg-indigo-500 w-full flex flex-col md:justify-between lg:justify-center lg:w-1/3 lg:mt-0 ml-0 p-3 text-sm">
          <SpecialProfileBox
            name="Shri Yogi Adityanath"
            post="Honble CM of Uttar Pradesh"
            img="/1img88.png"
            link="https://en.wikipedia.org/wiki/Yogi_Adityanath"
            
          />
          <SpecialProfileBox
            name="Shri Ashish Patel"
            post="Honble Minister of Technical Education, UP"
            img="/2img88.png"
            link="https://en.wikipedia.org/wiki/Ashish_Singh_Patel"
          />
          <SpecialProfileBox
            name="Shri M. Devraj"
            post="Principal secretary of Technical Education Uttar Pradesh"
            img="/3img88.jpeg"
            link="https://in.linkedin.com/in/m-devaraj-bba18716"
          />
          <SpecialProfileBox
            name="Late. Feroze Gandhi"
            post="Politician, Member of the Lok Sabha"
            img="/fg.jpg"
            link="https://en.wikipedia.org/wiki/Feroze_Gandhi"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
