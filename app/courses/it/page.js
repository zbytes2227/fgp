"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={"/courses/it.png"}
              height={600}
              width={720}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
             Information Technology & Engineering
            </h1>
            <p className="mb-8 leading-relaxed">
            Information Technology Engineering involves the application of engineering principles to manage and utilize information systems. Professionals in this field design, implement, and maintain IT infrastructure, ensuring seamless communication and data management. They focus on hardware, software, networks, and cybersecurity. Information Technology Engineering plays a crucial role in developing innovative solutions for data storage, retrieval, and analysis. Cloud computing, big data, and the Internet of Things are key areas of exploration. The discipline aligns technological solutions with organizational goals, optimizing efficiency and security. IT engineers contribute to the ever-evolving digital landscape, enhancing business processes and fostering technological advancements.


            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Download Circular
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Download Syllabus
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
