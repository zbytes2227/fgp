
import DeveloperCard from '@/components/DeveloperCard'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
   <>
    <section class="text-gray-600 body-font">
   <div class="flex flex-col text-center w-full my-10 ">
      <h1 class="sm:text-4xl text-3xl font-extrabold title-font text-gray-900">Development Unit</h1>
      <p class="lg:w-2/3 mx-auto mt-3 leading-relaxed text-base">We weave digital magic into websites. We are the architects of the web, turning lines of code into sleek, cool online experiences</p>
    </div>
  <div class="container px-5 py-1 mx-auto">
    <div class="flex flex-wrap -m-4">
  <DeveloperCard img="/developers/ujjwal.png" post="Co-Founder" link="https://www.linkedin.com/in/ujjwal-kushwaha-387699225/" email="Hi there, I am Co-Founder at BharatGen. I specialize in Full-stack MERN development. Feel free to reach out to me via email at fgpujjwal@gmail.com . Lets team up and create something exciting together! Looking forward to it." name={"Ujjwal Kushwaha"}/>
  <DeveloperCard img="/developers/manash.png" post="Founder" link="https://www.linkedin.com/in/manash-mishra-918542221/" email="Hello, I'm the Founder of BharatGen, with expertise in Planning, management and Full-stack Python development. Feel free to contact me via email at fgpmanash@gmail.com. I'm open to collaboration to create something innovative together. Looking forward to connect with you!" name={"Manash Mishra"}/>
  <DeveloperCard img="/developers/pankaj.png" post="Co-Founder" link="https://www.linkedin.com/in/pankaj-kesharwani-52654723a/" email="Hey there! I'm a Co-Founder at BharatGen, and I specialize in business planning, management, accounting, and Full-stack Python development. Drop me an email at fgppankaj@gmail.com anytime. I'm all for working together on something cool. Can't wait to hear from you!" name={"Pankaj Kesharwani"}/>
    </div>
  <p className='text-center mb-8 font-bold text-xl'>Thanks for visiting 😊</p>
  </div>
</section>











   <Footer/>
   </>
  )
}

export default page