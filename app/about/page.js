"use client"
import Footer from '@/components/Footer'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
  <>
  <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About Feroze Gandhi
        <br className="hidden lg:inline-block"/>Polytechnic, Raebareli
      </h1>
      <p className="mb-8 leading-relaxed text-justify">Established in 1974, Feroze Gandhi Polytechnic in Ratapur, Raebareli, stands as a distinguished diploma college in Uttar Pradesh. Approved by the All India Council for Technical Education (AICTE) and affiliated with the Board of Technical Education, Lucknow, the college offers a diverse range of courses across seven branches: Mechanical Engineering, Electronics Engineering, Computer Science & Engineering, Information & Technology, Instrumental Control, Modern Office Management (MOM), and Post Graduate Diploma in Computer Application (PGDCA). The institutions commitment to providing a comprehensive education is reflected in its well-equipped practical laboratories and a team of advanced skilled staff, ensuring students gain both theoretical knowledge and practical skills. The large campus accommodates hostels for both boys and girls, fostering a conducive learning environment. Beyond academics, the college emphasizes cultural aspects with the presence of a temple and other amenities. Feroze Gandhi Polytechnic prepares students for successful careers by imparting quality education and practical experience, making it a significant institution in the field of technical education in Uttar Pradesh.
.</p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image height={500} width={500} className="object-cover object-center rounded" alt="hero" src="/gallery/zb356.jpeg"/>
    </div>
  </div>
</section>

<Footer/>
  </>
  )
}

export default page