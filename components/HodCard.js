import React from 'react'

const HodCard = () => {
  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-gray-50">
      <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
      <div className="flex-grow">
        <h2 className="text-gray-900 title-font font-medium">Holden Caulfield</h2>
        <p className="text-gray-500">HOD, Computer Science Department</p>
      </div>
    </div>
  </div>
  )
}

export default HodCard