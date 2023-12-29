import React from 'react'
import CoursesCard from './CoursesCard'


const Hods = () => {
  return (
<section class="text-gray-600 body-font overflow-hidden">
  <div class="contai md:px-16 px-6 py-12 mxuto">
    <div class="flex flex-col text-center w-full mb-8">
      <h1 class="sm:text-4xl text-3xl font-semibold title-font mb-2 text-gray-900">Courses Offered</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">We offer a variety of technical courses. These courses provide practical knowledge.</p>
    </div>
    <div class="flex flex-wrap justify-center -m-4">
  
<CoursesCard type="Government" name="Mechanical Engineering" more_link="/courses/mechanical"/>
<CoursesCard type="Government" name="Electronics Engineering" more_link="/courses/electronics"/>
<CoursesCard type="Aided" name="Computer Science & Engineering" more_link="/courses/cse"/>
<CoursesCard type="Aided" name="Information & Technology" more_link="/courses/it"/>
<CoursesCard type="Aided" name="Instrumental Control" more_link="/courses/ic"/>
<CoursesCard type="Aided" name="Modern Office Management" more_link="/courses/mom"/>
<CoursesCard type="Aided" name="Post Graduate Diploma in Computer Application" more_link="/courses/pgdca"/>

      
    </div>
  </div>
</section>
  )
}

export default Hods