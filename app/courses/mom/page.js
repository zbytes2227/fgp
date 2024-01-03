"use client";
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
              src={"/courses/mom.png"}
              height={600}
              width={720}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Modern Office Management
            </h1>
            <p class="mb-8 leading-relaxed">
            Modern Office Management Engineering involves leveraging technology and streamlined processes to optimize workplace efficiency. Professionals in this field focus on integrating digital tools, communication systems, and project management software to enhance collaboration and productivity. They design and implement efficient workflows, employing tools like Customer Relationship Management (CRM) systems and Enterprise Resource Planning (ERP) solutions. Automation of routine tasks, data analytics, and cybersecurity measures are key considerations. This discipline plays a crucial role in creating agile, technology-driven office environments, fostering innovation, and ensuring seamless operations. Modern Office Management Engineering adapts to evolving workplace trends, supporting businesses in achieving organizational objectives.
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
    </>
  );
};

export default page;
