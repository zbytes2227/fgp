import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const principal = () => {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Message From Principal
      </h1>
      <p className="mb-8 leading-relaxed">As the principal of this esteemed institution proudly affiliated with the Board of Technical Education, Uttar Pradesh (BTEUP), our vision is both simple and profound: to empower you with a holistic blend of comprehensive practical, formal, and technical knowledge. Our overarching goal is to foster an educational environment that transcends traditional boundaries, encouraging a seamless integration of classroom theories with real-world applications. Committed to excellence, we dedicate ourselves to providing you with the essential tools, unwavering guidance, and abundant resources required for exceptional achievement in your chosen fields.

We aspire to create an atmosphere where learning becomes an immersive experience, extending far beyond the confines of textbooks. Our commitment is to nurture an educational journey that is transformative, innovative, and skill-focused, serving as the bedrock for shaping your promising futures. Let us together embark on this exciting journey of discovery, innovation, and skill-building, laying the foundation for a future characterized by success and fulfillment. Here to an enriching and transformative educational experience at Feroze Gandhi Polytechnic!</p>
      <div className="flex justify-center">
        {/* <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <Image height={320} width={320} className="object-cover object-center rounded-xl" alt="hero" src="/image/principal.png"/>

    </div>
  </div>
</section>
    </>
  )
}

export default principal