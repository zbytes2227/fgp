"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
   <>
   <section class="text-gray-600 body-font">
  <div class="container flex flex-wrap px-5 py-24 mx-auto items-">
    <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Admission to First Year:</h1>
      <p class="leading-relaxed text-base">The Entrance Examination for admission to First Year of Three Year Diploma programme offered by Joint Entrance Examination Council (U.P). <a className='text-indigo-400 underline' href='https://jeecup.admissions.nic.in/'>Click here</a> for more details. Counselling are managed by The Joint Entrance Examination Council (JEEC).</p>
    </div>
    <div class="md:w-1/2 md:pr-12 md:py-8 md:ps-3 md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Direct Admission to Second Year (12th):</h1>
      <p class="leading-relaxed text-base">The eligible candidates seeking direct admission to the Second Year of the Diploma program at the institution are required to visit The Joint Entrance Examination Council (JEEC) website. For detailed information, candidates can <a className='text-indigo-400 underline' href='https://jeecup.admissions.nic.in/'>Click</a> on the provided link. Lateral entry for 12th holders will be allowed in the Second Year at the third-semester level. Seats in addition to the sanctioned intake at the First Year level are limited to a maximum of 10% and will be reserved for such candidates. This initiative provides an opportunity for 12th holders to pursue further education and contribute to their academic and professional growth within the framework of The Joint Entrance Examination Councils admission policies.
</p>
    </div>
    {/* <div class="flex flex-col md:w-1/2 md:pl-12">
      <h2 class="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">CATEGORIES</h2>
      <nav class="flex flex-wrap list-none -mb-1">
        <li class="lg:w-1/3 mb-1 w-1/2">
          <a class="text-gray-600 hover:text-gray-800">First Link</a>
        </li>
        <li class="lg:w-1/3 mb-1 w-1/2">
          <a class="text-gray-600 hover:text-gray-800">Second Link</a>
        </li>
        <li class="lg:w-1/3 mb-1 w-1/2">
          <a class="text-gray-600 hover:text-gray-800">Third Link</a>
        </li>
        <li class="lg:w-1/3 mb-1 w-1/2">
          <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
        </li>
        <li class="lg:w-1/3 mb-1 w-1/2">
          <a class="text-gray-600 hover:text-gray-800">Fifth Link</a>
        </li>
        <li class="lg:w-1/3 mb-1 w-1/2">
          <a class="text-gray-600 hover:text-gray-800">Sixth Link</a>
        </li>
        <li class="lg:w-1/3 mb-1 w-1/2">
          <a class="text-gray-600 hover:text-gray-800">Seventh Link</a>
        </li>
        <li class="lg:w-1/3 mb-1 w-1/2">
          <a class="text-gray-600 hover:text-gray-800">Eighth Link</a>
        </li>
      </nav>
    </div> */}
  </div>
</section>
<Footer/>
   </>
  )
}

export default page