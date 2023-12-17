import React from 'react'

const CoursesCard = (props) => {
  return (
    <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
    <div class="h-full p-6 rounded-lg border-2 border-gray-300 hover:border-indigo-400 flex flex-col relative overflow-hidden">
      <h2 class="text-sm tracking-widest title-font mb-1 font-medium">Government</h2>
      <h4 class="text-2xl font-semibold text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Computer Engineering</h4>
      <p class="flex items-center text-gray-600 mb-2">
        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-400 text-white rounded-full flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </span>Vexillologist pitchfork
      </p>
      <p class="flex items-center text-gray-600 mb-2">
        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-400 text-white rounded-full flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </span>Tumeric plaid portland
      </p>
      <p class="flex items-center text-gray-600 mb-6">
        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-400 text-white rounded-full flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </span>Mixtape chillwave tumeric
      </p>
      <button class="flex items-center mt-auto text-white bg-indigo-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-500 rounded">More
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
      <p class="text-xs text-gray-500 mt-3">Literally you probably havent heard of them jean shorts.</p>
    </div>
  </div>
  )
}

export default CoursesCard