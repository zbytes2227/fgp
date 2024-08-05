import React, { useEffect, useState } from "react";
import { Carousel } from "@material-tailwind/react";
import SpecialProfileBox from "./SpecialProfileBox";
import Image from "next/image";

const Hero = () => {
  const data = [
    {
      name: "Shri Ashish Patel",
      post: "Hon'ble Minister of Technical Education, UP",
      img: "/special/sp055.png",
      link: "https://en.wikipedia.org/wiki/Ashish_Singh_Patel",
    },
    {
      name: "Shri M. Devraj (I.A.S)",
      post: "Principal secretary of Technical Education Uttar Pradesh",
      img: "/special/sp044.jpeg",
      link: "https://in.linkedin.com/in/m-devaraj-bba18716",
    },
    {
      name: "Annavi Dinesh Kumar (I.A.S)",
      post: "Director of Technical Education, Uttar Pradesh",
      img: "/special/sp011.jpg",
      link: "https://in.linkedin.com/in/m-devaraj-bba18716",
    },
  ];

  // State to keep track of the current index of data for the first SpecialProfileBox
  const [currentIndex1, setCurrentIndex1] = useState(0);

  // State to keep track of the current index of data for the second SpecialProfileBox
  const [currentIndex2, setCurrentIndex2] = useState(1);

  // State to store the current data to be passed as props for the first SpecialProfileBox
  const [currentData1, setCurrentData1] = useState(data[currentIndex1]);

  // State to store the current data to be passed as props for the second SpecialProfileBox
  const [currentData2, setCurrentData2] = useState(data[currentIndex2]);

  // Function to update the data after 5 seconds for the first SpecialProfileBox
  const updateData1 = () => {
    const newIndex1 = (currentIndex1 + 1) % data.length;
    setCurrentIndex1(newIndex1);
    setCurrentData1(data[newIndex1]);
  };

  // Function to update the data after 5 seconds for the second SpecialProfileBox
  const updateData2 = () => {
    const newIndex2 = (currentIndex2 + 1) % data.length;
    setCurrentIndex2(newIndex2);
    setCurrentData2(data[newIndex2]);
  };

  // Effect to update the data after every 5 seconds for the first SpecialProfileBox
  useEffect(() => {
    const intervalId1 = setInterval(updateData1, 5000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId1);
  }, [currentIndex1, data]);

  // Effect to update the data after every 5 seconds for the second SpecialProfileBox
  useEffect(() => {
    const intervalId2 = setInterval(updateData2, 5000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId2);
  }, [currentIndex2, data]);

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
            <Image
              height={"1000"}
              width={"1000"}
              src="/gallery/zbh716.jpeg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <Image
              height={"1000"}
              width={"1000"}
              src="/gallery/zb356.jpeg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <Image
              height={"1000"}
              width={"1000"}
              src="/gallery/zb006.jpg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
              <Image
              height={"1000"}
              width={"1000"}
              src="/gallery/zb2.jpg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <Image
              height={"1000"}
              width={"1000"}
              src="/gallery/zb09.jpg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <Image
              height={"1000"}
              width={"1000"}
              src="/gallery/zb1.jpg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </div>

        <div
          className="bg-indigo-700 w-full flex flex-col md:justify-between lg:justify-center lg:w-1/3 lg:mt-0 ml-0 p-3 text-sm"
          id="temp"
        >
          <SpecialProfileBox
            name="Smt. Anandiben Patel"
            post="Hon'ble Chancellor & H.E. Governor of Uttar Pradesh"
            img="/special/sp033.jpg"
            link="https://en.wikipedia.org/wiki/Anandiben_Patel"
          />
          <SpecialProfileBox
            name="Shri Yogi Adityanath"
            post="Hon'ble CM of Uttar Pradesh"
            img="/special/sp022.png"
            link="https://en.wikipedia.org/wiki/Yogi_Adityanath"
          />
          <SpecialProfileBox
            name={currentData1.name}
            post={currentData1.post}
            img={currentData1.img}
            link={currentData1.link}
          />
          {/* Render the second SpecialProfileBox with the currentData2 */}
          <SpecialProfileBox
            name={currentData2.name}
            post={currentData2.post}
            img={currentData2.img}
            link={currentData2.link}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
