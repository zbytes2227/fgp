import Image from 'next/image'
import React from 'react'
import NoticesCard from './NoticesCard'

const Hero2 = () => {
  return (
    <section class="text-gray-600 body-font">
  <div class="contauto flex md:px-16 px-5 py-12 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-end">
      <Image height={360} width={360} class="object-cover object-center rounded-xl" alt="hero" src="/principal.png"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-justify items-center text-justify">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-semibold text-center text-gray-900">Message From Principal
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air pfork pour-over freegan heirloom neutra air pfork pour-over freegan heirloom neutra air pfork pour-over freegan heirloom neutra air pfork pour-over freegan heirloom neutra air pfork pour-over freegan heirloom neutra air pfork pour-over freegan heirloom neutra air pfork pour-over freegan heirloom neutra air pfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bpour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">Read More</button>
        {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">More</button> */}
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero2