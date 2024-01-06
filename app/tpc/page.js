"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [notices, setNotices] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/getTpc")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setLoading(false);
          setNotices(data.notices);
        } else {
          console.error("Failed to fetch notices");
        }
      })
      .catch((error) => {
        console.error("Error fetching notices:", error);
      });
  }, []); // The empty dependency array ensures that the effect runs only once on mount

  return (
    <>
      <section className="text-gray-600 body-font">
            <h2 className="text-4xl font-extrabold dark:text-white text-center mt-4">
              Training and Placement Cell
            </h2>
        <div className="container px-5 py-4 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="tpc_banner.png"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <Image 
                height={150}
                width={150}
                className="rounded-full h-full w-full border border-2"
                src={"/staff_images/69.jpg"}
                />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Renu Gautam
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    Training & Placement Officer, FGP Raebareli
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                Feroze Gandhi Polytechnic in Ratapur, Raebareli, emphasizes comprehensive training and placement initiatives for its students. The institute prioritizes practical skill development, offering specialized programs aligned with industry needs. Through collaborations with leading companies, the college facilitates internships, workshops, and industry visits to bridge the academia-industry gap. Focused on holistic development, the training programs cover technical proficiency, soft skills, and professional etiquette. The dedicated placement cell works towards ensuring students are well-prepared for diverse career opportunities. Feroze Gandhi Polytechnic is committed to fostering a conducive environment, empowering students for successful transitions from education to employment.
                </p>
              </div>
            </div>
          </div>
        </div>
          <div className="py-6 mx-auto mb-28">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Placement Record
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
             All Placement Records are listed here.
            </p>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap border border-2">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Records with download links
                  </th>
                  <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                </tr>
              </thead>
              <tbody>
                  {notices.map((notice) => (
                <tr key={notice.key}>
                  <td className="px-4 py-3"><a href={notice.link} target="_blank" className="underline underline-offset-3 text-blue-700">{notice.title}</a></td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
          {/* <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Button
            </button>
          </div> */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
