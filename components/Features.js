import React from 'react'
import FeatureCard from './FeatureCard'

const Features = () => {
  return (
    <section class="text-gray-600 body-font">
    <div class="container px-5 py-12 mx-auto">
      <div class="text-center mb-10">
        <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
          Why Choose Us ?
        </h1>
        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
        At our institution, we pride ourselves on offering a diverse range of technical courses to cater to different interests and career goals. 
        </p>
      </div>
      <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <FeatureCard text={"Wifi Campus"}/>
        <FeatureCard text={"Experienced Faculty"}/>
        <FeatureCard text={"Library"}/>
        <FeatureCard text={"Modern Computer Lab"}/>
        <FeatureCard text={"NCC"}/>
        <FeatureCard text={"Sports & Games"}/>
      </div>
      {/* <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Button
      </button> */}
    </div>
  </section>
  )
}

export default Features