"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
const Navbar = () => {
  const [isHiddenOnMobile, setIsHiddenOnMobile] = useState(true);

  const toggleVisibility = () => {
    setIsHiddenOnMobile(!isHiddenOnMobile);
  };

  const zoomUp = () => {
    document.body.style.zoom = "120%"; // Adjust the zoom level as needed
  };
  const zoomDown = () => {
    document.body.style.zoom = "80%"; // Adjust the zoom level as needed
  };
  const zoomNormal = () => {
    document.body.style.zoom = "100%"; // Adjust the zoom level as needed
  };


  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();
  const handleButtonClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset to the beginning
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (replace with actual loading logic)
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 600); // Adjust the duration as needed
  
    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(loadingTimeout);
    
  }, []);

//   function comm(){

//     setTimeout(() => {
//       const communityLink = document.getElementById('community-link');
//       communityLink.classList.remove('bg-green-500');
//       communityLink.classList.add('bg-blue-500');
//     }, 1000);
    
//     setTimeout(() => {
//       const communityLink = document.getElementById('community-link');
//       communityLink.classList.remove('bg-blue-500');
//     communityLink.classList.add('bg-red-500');
//   }, 2000);

//   setTimeout(() => {
//     const communityLink = document.getElementById('community-link');
//     communityLink.classList.remove('bg-red-500');
//     communityLink.classList.remove('animate-pulse');
//   }, 5000);
// }

// setInterval(() => {
//   comm();
// }, 7000);

  return (
    <>
      <div className="bg-gray-200 hidden md:block text-sm max-h-max">
        <div className="c flex flex-wrap justify-around">
          <div id="head-box" className="flex">
            <a
              href="/"
              className="bg-blue-500 p-2 text-medium font-medium text-white"
            >
              Ratapur, Raebareli, Uttar Pradesh 229316
            </a>
            <a
              href="tel:05352974200"
              className="bg-green-500 p-2 text-medium font-medium text-white"
            >
              +05352974200
            </a>
            <a
              href="/admissions"
              className="bg-red-500 p-2 text-medium font-medium text-white"
            >
              Admissions 2024-25
            </a>
          </div>

          <div className="text-gray-800 flex py-1.5" id="social-media">
            <a href="/" className="px-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </a>
            <a href="/" className="px-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
            </a>
            <a href="/" className="px-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-twitter-x"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
              </svg>
            </a>
            <a href="/" className="px-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-youtube"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
              </svg>
            </a>
          </div>

          {/* <div id="tail-box" className="bg-blue-500 px">
            <a href="/admin/login" className="mx-2 hover:underline">
              Admin Login
            </a>
            <a href="/aicte" className="mx-2 hover:underline">
              AICTE
            </a>
            <a href="/lms" className="mx-2 hover:underline">
              Library Management System
            </a>
            <a href="/admin/login" className="mx-2 hover:underline">
              Grievance
            </a>
          </div> */}
          <div id="head-box" className="flex-row flex">
            <a
              href="/admin/login"
              className="bg-blue-500 p-2 text-medium font-medium text-white"
            >
              Admin Login
            </a>
            <a
              href="lms"
              className="bg-red-500 p-2 text-medium font-medium text-white"
            >
              Library Management System
            </a>
            <a
              href="/"
              className="bg-green-500 p-2 text-medium font-medium text-white"
            >
              Grievance
            </a>
            <a
              onClick={() => zoomUp()}
              className="text-medium font-medium bg-red-500 p-2 hover:cursor-pointer hover:bg-red-700"
            >
              A+
            </a>
            <a
              onClick={() => zoomNormal()}
              className="text-medium font-medium bg-red-500 p-2 hover:cursor-pointer hover:bg-red-700"
            >
              A
            </a>
            <a
              onClick={() => zoomDown()}
              className="text-medium font-medium bg-red-500 p-2 hover:cursor-pointer hover:bg-red-700"
            >
              A-
            </a>
            <a
              onClick={() => handleButtonClick()}
              className="text-medium font-medium bg-orange-500 p-2 hover:cursor-pointer flex "
            >
              <Image
                height={20}
                width={20}
                src={!isPlaying ? "/svg/sound_logo.svg" : "/svg/mute_logo.svg"}
              />{" "}
              {isPlaying ? "Stop" : "Audio"}
            </a>
            <a className="text-medium text-white font-medium bg-green-500 p-2 hover:cursor-pointer">
              College Code : 2224
            </a>
            <audio className="" ref={audioRef} src="audio.mp3" />
          </div>
        </div>
      </div>

      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen flex flex- items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/image/main_logo.png"
              className="w-60 md:w-auto"
              alt="Official Logo"
            />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
          </a>
          {isLoading && (
            <button
              data-collapse-toggle="navbar-dropdown"
              type="button"
              onClick={toggleVisibility}
              className="inline-flex border items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-dropdown"
              aria-expanded="false"
            >
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            </button>
          )}
          {!isLoading && (
            <button
              data-collapse-toggle="navbar-dropdown"
              type="button"
              onClick={toggleVisibility}
              className="inline-flex border items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-dropdown"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isHiddenOnMobile ? (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-7 h-7"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
                    strokeWidth="2"
                  />
                </svg>
              )}
            </button>
          )}
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col bg-   font-medium p-2 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a
                  href="/"
                  className="block px-3 py-1 text-white bg-blue-400 rounded-full"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="block px-3 py-1 text-white bg-blue-400 rounded-full "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/notices"
                  className="block px-3 py-1 text-white bg-blue-400 rounded-full "
                >
                  Notices
                </a>
              </li>
              <li>
                <a
                  href="/faculty"
                  className="block px-3 py-1 text-white bg-blue-400 rounded-full "
                >
                  Faculty
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <img
              src="/image/up_logo.svg"
              className="w-20 mx-3 md:block hidden"
              alt="Flowbite Logo"
            />
            <img
              src="/image/make_in_india.png"
              className="w-20 md:block hidden"
              alt="Flowbite Logo"
            />
            <img
              src="/image/swach_bharat.png"
              className="w-20 md:block hidden"
              alt="Flowbite Logo"
            />
          </div>
        </div>
      </nav>

      <div
        className="bg-orange-600 py-1 hidden md:block font-semibold text-white text-md"
        id="temp"
      >
        <div className="contaauto flex flex-wrap justify-center">
          <a href="/" className="mx-2 hover:underline">
            Home
          </a>
          <a href="/about" className="mx-2 hover:underline">
            About us
          </a>
          <a href="/courses" className="mx-2 hover:underline">
            Courses
          </a>
          <a href="/admissions" className="mx-2 hover:underline">
            Admissions
          </a>
          <a href="/gallery" className="mx-2 hover:underline">
            Gallery
          </a>
          <a href="https://shorturl.at/dghoS" className="mx-2 hover:underline">
            Fee Structure
          </a>

          <a href="/tpc" className="mx-2 hover:underline">
            Training & Placement
          </a>
          <a href="/faculty" className="mx-2 hover:underline">
            Faculty/Staff
          </a>
          <a href="/notices" className="mx-2 hover:underline">
            Notices
          </a>
          <a href="/community" id="community-link" className="mx-2 bg-green-500 text-white px-1 rounded-lg animate-pulse">
  College Community
</a>

          {/* <a href="/attendance" className="mx-2 hover:underline">
            Attendance
          </a> */}
          <a
            href="https://urise.up.gov.in/student/login"
            className="mx-2 hover:underline"
          >
            Students
          </a>
          <a href="/contact" className="mx-2 hover:underline">
            Contact
          </a>
          <a href="/aicte" className="mx-2 hover:underline">
            AICTE
          </a>
        </div>
      </div>

      <div
        className={`md:hidden ${
          isHiddenOnMobile ? "hidden" : "block"
        } bg-indigo-700`}
      >
        <div className="flex flex-wrap  justify-center py-4" id="temp">
          <a
            href="/"
            className="mx-2 hover:underline bg-white px-3 rounded-full mb-2"
          >
            Home
          </a>
          <a
            href="/about"
            className="mx-2 hover:underline bg-white px-3 rounded-full mb-2"
          >
            About us
          </a>
          <a
            href="/courses"
            className="mx-2 hover:underline bg-white px-3 rounded-full mb-2"
          >
            Courses
          </a>
          <a
            href="/admissions"
            className="mx-2 hover:underline bg-white px-3 rounded-full mb-2"
          >
            Admissions
          </a>
          <a
            href="/gallery"
            className="mx-2 hover:underline bg-white px-3 rounded-full mb-2"
          >
            Gallery
          </a>
          <a
            href="https://shorturl.at/dghoS"
            className="mx-2 hover:underline bg-white px-3 rounded-full mb-2"
          >
            Fee Structure
          </a>

          <a
            href="/tpc"
            className="mx-2 hover:underline bg-white px-3 rounded-full mb-2"
          >
            Training & Placement
          </a>
          <a
            href="/faculty"
            className="mx-2 hover:underline bg-white px-3 rounded-full mb-2"
          >
            Faculty/Staff
          </a>
          <a
            href="/notices"
            className="mx-2 hover:underline bg-white px-3 rounded-full mb-2"
          >
            Notices
          </a>
          <a
            href="/community"
            className="mx-2 hover:underline bg-white px-3 rounded-full mb-2"
          >
            College Community
          </a>
          {/* <a href="/attendance" className="mx-2 hover:underline">
            Attendance
          </a> */}
          <a
            href="https://urise.up.gov.in/student/login"
            className="mx-2 hover:underline bg-white px-3 rounded-full mb-2"
          >
            Students
          </a>
          <a
            href="/contact"
            className="mx-2 hover:underline bg-white px-3 rounded-full mb-2"
          >
            Contact
          </a>
          <a
            href="/aicte"
            className="mx-2 hover:underline bg-white px-3 rounded-full mb-2"
          >
            AICTE
          </a>
        </div>

        <div className="c flex flex-wrap flex-col justify-around">
          <div id="head-box" className="flex flex-col mb-3 px-2">
            <a
              href="/"
              className="bg-blue-500 p-2 text-medium font-medium text-white rounded-full mb-3"
            >
              Ratapur, Raebareli, Uttar Pradesh 229316
            </a>
            <div className="flex justify-between">
              <a
                href="tel:05352974200"
                className="bg-green-500 p-2 text-medium font-medium text-white rounded-full mb-3"
              >
                +05352974200
              </a>
              <a
                href="/admissions"
                className="bg-red-500 p-2 text-medium font-medium text-white rounded-full mb-3"
              >
                Admissions
              </a>
              <a
                href="/"
                className="bg-green-500 p-2 text-medium font-medium text-white rounded-full mb-3"
              >
                Grievance
              </a>
            </div>
            <div className="flex justify-between items-center mx-1">
              <a
                onClick={() => zoomUp()}
                className="text-medium font-medium bg-red-500 p-2 hover:cursor-pointer hover:bg-red-700 rounded-md"
              >
                A+
              </a>
              <a
                onClick={() => zoomNormal()}
                className="text-medium font-medium bg-red-500 p-2 hover:cursor-pointer hover:bg-red-700 rounded-md"
              >
                A
              </a>
              <a
                onClick={() => zoomDown()}
                className="text-medium font-medium bg-red-500 p-2 hover:cursor-pointer hover:bg-red-700 rounded-md"
              >
                A-
              </a>
              <a
                onClick={() => handleButtonClick()}
                className="text-medium font-medium bg-orange-500 p-2 hover:cursor-pointer flex rounded-full"
              >
                <Image
                  height={20}
                  alt="audio symbol"
                  width={20}
                  src={
                    !isPlaying ? "/svg/sound_logo.svg" : "/svg/mute_logo.svg"
                  }
                />{" "}
                {isPlaying ? "Stop" : "Audio"}
              </a>
              <a className="text-sm text-white font-medium bg-green-500 p-1.5 hover:cursor-pointer rounded-full">
                College Code : 2224
              </a>
            </div>
            <audio className="" ref={audioRef} src="audio.mp3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
