import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="text-white body-font border bg-green-900" id='temp'>
    <div className="container px-5 py-6 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
        <Image src={"/image/main_logo.png"} alt="d" height={80} width={500} />{" "}
        </a>
        <p className="mt-2 text-sm text-white mb-3">FGP, Ratapur Raebareli, Uttar Pradesh</p>

        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.5507028102147!2d81.23855567414502!3d26.243784577052207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ba1571aaaaaab%3A0x7d1989f3c5a5982f!2sFeroze%20Gandhi%20Polytechnic!5e0!3m2!1sen!2sin!4v1702223301727!5m2!1sen!2sin"
        width="251"
        height="221"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
      </div>

      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-bold text-white tracking-widest text-xl mb-3">SECTIONS</h2>
          <div className='bg-orange-500 pt-0.5 w-10 md:block hidden'></div>
          <nav className="list-none mb-10 mt-6">
            <li>
              <a className="textwhite   hover:text-gray-200" href='/about'>About</a>
            </li>
            <li>
              <a className="textwhite   hover:text-gray-200" href='/admissions'>Admissions</a>
            </li>
            <li>
              <a className="textwhite   hover:text-gray-200" href='/faculty'>Faculty</a>
            </li>
            <li>
              <a className="textwhite   hover:text-gray-200" href='/community'>College Community</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-bold text-white tracking-widest text-xl mb-3">IMP. LINKS</h2>
          <div className='bg-orange-500 pt-0.5 w-10 md:block hidden'></div>
          <nav className="list-none mb-10 mt-6">
            <li>
              <a href='https://bteup.ac.in/' className="textwhite   hover:text-gray-200">BTEUP</a>
            </li>
            <li>
              <a href='http://upted.gov.in' className="textwhite   hover:text-gray-200">DTEUP</a>
            </li>
            <li>
              <a href="https://www.aicte-india.org/" className="textwhite   hover:text-gray-200">AICTE</a>
            </li>
            <li>
              <a href='https://jeecup.admissions.nic.in/' className="textwhite   hover:text-gray-200">JEECUP</a>
            </li>
          </nav>
        </div>
    
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-bold text-white tracking-widest text-xl mb-3">DEPARTMENTS</h2>
          <div className='bg-orange-500 pt-0.5 w-10 md:block hidden'></div>
          <nav className="list-none mb-10 mt-6">
            <li>
              <a href='/courses/mechanical' className="textwhite hover:text-gray-200">Mechanical Engineering</a>
            </li>
            <li>
              <a href='/courses/cse' className="textwhite hover:text-gray-200">Computer Science & Engg.</a>
            </li>
            <li>
              <a href='/courses/electronics' className="textwhite hover:text-gray-200">Electronics Engineering</a>
            </li>
            <li>
              <a href='/courses/it' className="textwhite hover:text-gray-200">Information Technology</a>
            </li>
          </nav>
        </div>

        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-bold text-white tracking-widest text-xl mb-3">OTHERS</h2>
          <div className='bg-orange-500 pt-0.5 w-10 md:block hidden'></div>
          <nav className="list-none mb-10 mt-6">
            <li>
              <a href='/tpc' className="textwhite hover:text-gray-200">Training & Placement</a>
            </li>
            <li>
              <a href='/gallery' className="textwhite hover:text-gray-200">Gallery</a>
            </li>
            <li>
              <a href='/faculty' className="textwhite hover:text-gray-200">Faculty & Staff</a>
            </li>
            <li>
              <a href='/developers' className="textwhite hover:text-gray-200">Developer Page</a>
            </li>
          </nav>
        </div>
      </div>
    </div>

    <div className="bg-gray-900">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-white text-sm text-center sm:text-left">© 2024 Feroze Gandhi Polytechnic -
          <a href="/developers" rel="noopener noreferrer" className="textwhite ml-1 underline">Developed with ❤️ by BharatGen</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a className="text-white">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
    <div className="bg-gray-900 md:hidden block">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-white text-sm text-center sm:text-left">Privacy Policy | Site Map
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer