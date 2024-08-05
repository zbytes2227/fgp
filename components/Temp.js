import Image from 'next/image'
import React from 'react'

const Temp = (props) => {
  return (
    <div className="p-4 w-full">
           <div className="w-full">
        <div className="h-full flex items-center border-gray-200 border border-2 rounded-lg">
          <Image width={1000} height={1000} alt="team" className="w-1/3 h-full bg-gray-100 object-cover object-center flex-shrink-0 rounded mr-4" src={props.img}/>
          <div className="flex-grow">

            <p className="title-font text-xl font-semibold p-2"></p>
            <h2 className="text-gray-900 title-font font-medium p-2"><strong>{props.title}:</strong>{" "}{props.content}</h2>
          </div>
        </div>
      </div>
        {/* <div className="border-2 border-gray-200 px-4 py-6 rounded-lg flex flex-row flex-wrap">
          <img src='princiapl.jpg' className='h-56' />
          <p className=""> established by the Government of Uttar Pradesh in the year 2015 with four branches, Electrical Engineering, Electronics Engineering, Civil Engineering and Computer Science & Engineering with annual intake of Sixty (60) in each branch. The college is also affiliating institute of Dr A P J Abdul Kalam Technical University, Lucknow (Formerly Uttar Pradesh Technical University, Lucknow). The college has moved to its own fully residential campus located at Tirwa, Kannauj in the month of July 2017 and all academic activities from the session 2016-17 bei</p>
        </div> */}
      </div>
  )
}

export default Temp