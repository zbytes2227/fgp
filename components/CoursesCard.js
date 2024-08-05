import Image from 'next/image'
import React from 'react'

const CoursesCard = (props) => {
  return (
    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
    <div className="h-full rounded-lg bg-white border-2 border-gray-300 hover:border-pink-400 flex flex-col relative overflow-hidden">
      {/* <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{props.type}</h2> */}
      <Image width={1000} height={1000} alt="team" className="mb-4 h-64 object-cover object-center flex-shrink-0 rounded" src={props.img}/>
      <div className='p-4'>

      <h4 className="text-2xl font-semibold text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">{props.name}</h4>
      <p className="flex items-center text-gray-600 mb-2">
        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-400 text-white rounded-full flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </span>Download Circular
      </p>
      <p className="flex items-center text-gray-600 mb-2">
        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-400 text-white rounded-full flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </span>Fee Structure
      </p>
      <p className="flex items-center text-gray-600 mb-6">
        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-400 text-white rounded-full flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </span>Syllabus
      </p>
      <a href={props.more_link} className="flex items-center mt-auto text-white colo border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-500 rounded">More
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
      {/* <p className="text-xs text-gray-500 mt-3"></p> */}
      </div>
    </div>
  </div>
  )
}

export default CoursesCard