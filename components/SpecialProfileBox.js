import Image from 'next/image'
import React from 'react'

const SpecialProfileBox = (props) => {
  return (
    <a href={props.link} className="flex items-center p-1 rounded-md border justify-center ps-3 m-1 bg-white">
    <Image width={500} height={500} alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 shadow-md" src={props.img}/>
    <div className="flex-grow">
      <h2 className="title-font font-bold">{props.name}</h2>
      <p className="text-sm">{props.post}</p>
      {/* <p className='bg-white rounded-md me-4'></p> */}
    </div>
  </a>
  )
}

export default SpecialProfileBox