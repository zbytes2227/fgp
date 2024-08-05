import React from 'react'
import FeatureCard from './FeatureCard'

const Features = () => {
  return (
    <section className="text-white bg-pink-900 body-font" id='temp'>
    <div className="container px-5 py-12 mx-auto">
      <div className="text-center mb-10">
        <h1 className="sm:text-3xl text-2xl font-semibold text-center title-font mb-4">
          Why Choose Feroze Gandhi Polytechnic, Raebareli ?
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
        Feroze Gandhi Polytechnic, Raebareli is among the best Government Engineering Institutes in Uttar Pradesh.
        </p>
      </div>
      <div className="flex text-gray-900 flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <FeatureCard text={"Wifi Campus"}/>
        <FeatureCard text={"Experienced Faculty"}/>
        <FeatureCard text={"Library"}/>
        <FeatureCard text={"Modern Computer Lab"}/>
        <FeatureCard text={"NCC"}/>
        <FeatureCard text={"Sports & Games"}/>
      </div>
      {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Button
      </button> */}
    </div>
  </section>
  )
}

export default Features