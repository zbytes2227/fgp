"use client";
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
              src={"/courses/pgdca.png"}
              height={600}
              width={720}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
             Post Graduate Diploma in Computer Application
            </h1>
            <p className="mb-8 leading-relaxed">
            A Post Graduate Diploma in Computer Application (PGDCA) is a comprehensive program catering to advanced studies in computer applications. Designed for graduates, it delves into software development, database management, and system analysis. The curriculum covers programming languages, web development, and network administration. PGDCA students gain hands-on experience in project work, enhancing practical skills. The program focuses on industry-relevant technologies, preparing graduates for roles in software development, IT consulting, and system administration. It provides a solid foundation for those aspiring to pursue a career in the dynamic and evolving field of information technology, fostering expertise and adaptability.
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
    </>
  );
};

export default page;
