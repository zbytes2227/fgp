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
              src={"/courses/mech.png"}
              height={600}
              width={720}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Mechanical Engineering
            </h1>
            <p className="mb-8 leading-relaxed">
            Mechanical engineering is a multidisciplinary field that integrates principles of physics, mathematics, and material science to design, analyze, and manufacture mechanical systems. Engineers apply these principles to create a wide range of devices, from microscale components to large machinery. The field encompasses various specialties, such as thermal systems, fluid dynamics, and control systems. Mechanical engineers strive to optimize efficiency, durability, and safety in designs, considering factors like cost, environmental impact, and sustainability. Robotics, automotive systems, and renewable energy technologies are prominent areas where mechanical engineering plays a crucial role, driving innovation and technological advancement.
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
