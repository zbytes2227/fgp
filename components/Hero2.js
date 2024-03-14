import Image from 'next/image'
import React from 'react'
import NoticesCard from './NoticesCard'

const Hero2 = () => {
  return (
    <section className="text-gray-600 body-font" id='temp'>
  <div className="contauto flex md:px-16 px-5 py-12 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-end">
      <Image height={320} width={320} className="object-cover object-center rounded-xl" alt="hero" src="/image/principal.png"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-justify items-center text-justify">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-center text-gray-900">Message From Principal
      </h1>
      <p className="mb-8 leading-relaxed font-medium text-md">As the principal of this esteemed institution affiliated with BTEUP, our vision is simple yet profound: to equip you with comprehensive practical, formal, and technical knowledge. Our aim is to create an environment where learning extends beyond textbooks, where classroom concepts are seamlessly integrated with real-world applications. Were committed to providing you with the tools, guidance, and resources necessary to excel in your chosen fields. Together, lets embark on a journey of discovery, innovation, and skill-building that will shape your futures. Heres to a transformative educational experience at Feroze Gandhi Polytechnic!</p>
      <div className="flex justify-center">
        <a href='/principal' className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">Read More</a>
        {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">More</button> */}
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero2