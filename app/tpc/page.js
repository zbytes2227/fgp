"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
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
      <Navbar />
      <section class="text-gray-600 body-font">
            <h2 class="text-4xl font-extrabold dark:text-white text-center mt-4">
              Training and Placement Cell
            </h2>
        <div class="container px-5 py-4 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="tpc_banner.png"
              />
            </div>
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                    Phoebe Caulfield
                  </h2>
                  <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p class="text-base">
                    Raclette knausgaard hella meggs normcore williamsburg enamel
                    pin sartorial venmo tbh hot chicken gentrify portland.
                  </p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg mb-4">
                  Meggings portland fingerstache lyft, post-ironic fixie man bun
                  banh mi umami everyday carry hexagon locavore direct trade art
                  party. Locavore small batch listicle gastropub farm-to-table
                  lumbersexual salvia messenger bag. Coloring book flannel
                  truffaut craft beer drinking vinegar sartorial, disrupt
                  fashion axe normcore meh butcher. Portland 90s scenester
                  vexillologist forage post-ironic asymmetrical, chartreuse
                  disrupt butcher paleo intelligentsia pabst before they sold
                  out four loko. 3 wolf moon brooklyn.
                </p>
                <a class="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
          <div class="py-6 mx-auto mb-28">
          <div class="flex flex-col text-center w-full mb-10">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Placement Record
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
             All Placement Records are listed here.
            </p>
          </div>
          <div class="lg:w-2/3 w-full mx-auto overflow-auto">
            <table class="table-auto w-full text-left whitespace-no-wrap border border-2">
              <thead>
                <tr>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Records with download links
                  </th>
                  <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                </tr>
              </thead>
              <tbody>
                  {notices.map((notice) => (
                <tr key={notice.key}>
                  <td class="px-4 py-3"><a href={notice.link} target="_blank" className="underline underline-offset-3 text-blue-700">{notice.title}</a></td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
          {/* <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
            <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
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
