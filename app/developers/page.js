
import DeveloperCard from '@/components/DeveloperCard'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
   <>
   <Navbar/>


    <section class="text-gray-600 body-font">
   <div class="flex flex-col text-center w-full my-10 ">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Developers</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">We weave digital magic into websites. We,re the architects of the web, turning lines of code into sleek, cool online experiences</p>
    </div>
  <div class="container px-5 py-5 mx-auto">
    <div class="flex flex-wrap -m-4">
  <DeveloperCard name={"Ujjwal Kushwaha"}/>
  <DeveloperCard name={"Ujjwal Kushwaha"}/>
  <DeveloperCard name={"Ujjwal Kushwaha"}/>

    </div>
  </div>
</section>











   <Footer/>
   </>
  )
}

export default page