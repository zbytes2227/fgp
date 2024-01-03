"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              class="object-cover object-center rounded"
              alt="hero"
              src={"/courses/electronics.png"}
              height={600}
              width={720}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Electronics Engineering
            </h1>
            <p class="mb-8 leading-relaxed">
            Electronic Engineering involves the study and application of electrical components and systems to design and develop electronic devices. It spans a broad spectrum, including analog and digital circuits, microelectronics, and signal processing. Electronic engineers design integrated circuits, printed circuit boards, and electronic systems for diverse applications such as telecommunications, medical devices, and consumer electronics. They explore advancements in semiconductor technology, embedded systems, and power electronics. The field also encompasses electromagnetic compatibility and radiofrequency engineering. Electronic engineers play a pivotal role in shaping modern technology, driving innovations in electronics, communications, and control systems, contributing to the interconnected world we live in.


            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Download Circular
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
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
