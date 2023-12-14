import React from 'react'
import CoursesCard from './CoursesCard'


const Hods = () => {
  return (
<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-8">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Courses Offered</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag ver cardigan tote bag ver cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
    </div>
    <div class="flex flex-wrap justify-center -m-4">
  
<CoursesCard/>
<CoursesCard/>
<CoursesCard/>
<CoursesCard/>
<CoursesCard/>
<CoursesCard/>
      
    </div>
  </div>
</section>
  )
}

export default Hods