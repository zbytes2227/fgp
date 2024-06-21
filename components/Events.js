"use client";
import React from "react";
import NoticesCard from "./NoticesCard";
import { Carousel } from "@material-tailwind/react";
import Temp from "./Temp";

const Events = () => {
  return (
    <section className="body-font">
      <div
        className="conauto flex bg-orange-800 px-1 md:px-16 py-1 md:flex-row flex-col justify-center items-center"
        id="temp"
      >
        {/* <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-white">Our Vision</h1>
        <p className="mb-8 leading-relaxed text-white">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.Copper mug try-hard pitchfork pour-ld-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        <div className="flex justify-center">
          <button className="inline-flex bg-white border-0 py-2 px-6 focus:outline-none rounded-full text-lg">Read More</button>
        </div>
      </div> */}

        {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
       <div className="bg-white p-3 m-6 rounded-lg">
       <h4 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-center ">Photo Gallery</h4>
       <img src="/im4.jpeg"/>
       </div>
      </div> */}

        <div className="lg:w-1/2 lg:w-full md:w-1/2 w-full">
          <div className="bg-white p-3 m-6 rounded-lg  md:block hidden">
            <h4 className="title-font sm:text-4xl text-2xl  font-extrabold text-center ">
              Facilities
            </h4>

            <Carousel
              className="md:h-80 h-50 bg--400"
              autoplay={true}
              loop={true}
              transition={{ duration: 1 }}
              nextArrow={false}
              prevArrow={false}
            >
              <Temp
                title="Hostel"
                content="Feroze Gandhi Polytechnic provides secure, well-equipped hostels for both genders, ensuring privacy and safety. The facilities include spacious rooms, recreation areas, and essential amenities, fostering an ideal living and learning environment. With 24/7 security, nutritious meals, Wi-Fi, and separate accommodations, the hostels prioritize comfort. These facilities contribute to holistic student development, promoting social interactions and enhancing the overall campus experience."
                img="/facilities/hostel.png"
              />

              <Temp
                title="Library"
                content="Feroze Gandhi Polytechnic's library is a rich academic hub with extensive books, journals, and digital resources. It fosters research and learning in a quiet environment, equipped with modern facilities. Efficient staff supports a culture of continuous learning, making the library a pivotal resource for academic excellence within the institution."
                img="/facilities/library.png"
              />

              <Temp
                title="Mess"
                content="The mess at Feroze Gandhi Polytechnic prioritizes nutritious and diverse meals for students, fostering a hygienic and well-managed dining environment. Beyond providing essential sustenance, it serves as a communal space, encouraging social interactions and creating a comfortable atmosphere within the campus."
                img="/facilities/mess.png"
              />

              <Temp
                title="NCC"
                content="Feroze Gandhi Polytechnic hosts NCC programs, fostering leadership and discipline. Through camps, drills, and community service, it shapes character, instills patriotism, and enhances civic responsibility. NCC participation develops teamwork and leadership skills, aligning with the institution's holistic education approach, contributing to students' overall personality development."
                img="/facilities/ncc.png"
              />
            </Carousel>
          </div>
        </div>

        <div className="lg:1/2 lg:w-full md:w-1/2 w-full">
          <div className="bg-white p-3 m-6 rounded-lg">
            <h4 className="title-font sm:text-4xl text-2xl md:mb-4 mb-2 font-extrabold text-center ">
              Photo Gallery
            </h4>
            <Carousel
              className="md:h-80 h-50"
              autoplay={true}
              loop={true}
              transition={{ duration: 1 }}
            >
              <img
                src="/gallery/nz26.png"
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src="/gallery/n41.png"
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src="/gallery/zb423.jpg"
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src="/gallery/zb61.jpg"
                alt="image 1"
                className="h-full w-full object-cover"
              />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
