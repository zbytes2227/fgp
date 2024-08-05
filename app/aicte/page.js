"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [notices, setNotices] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/getAicte")
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
        <div className=" px-5 py-6 mx-auto mb-28">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              AICTE VERIFICATIONS
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Notices From Aicte 
            </p>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap border border-2">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    List of Verifications
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
