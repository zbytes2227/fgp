import CoursesCard from '@/components/CoursesCard'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
   <>
   <Navbar/>
   <section class="text-gray-600 body-font overflow-hidden">
  <div class="contai md:px-16 px-6 py-12 mxuto">
    <div class="flex flex-col text-center w-full mb-8">
      <h1 class="sm:text-4xl text-3xl font-semibold title-font mb-2 text-gray-900">Courses Offered</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag ver cardigan tote bag ver cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
    </div>
    <div class="flex flex-wrap justify-center -m-4">
  
  
    <CoursesCard type="Government" img="https://images.pexels.com/photos/4271641/pexels-photo-4271641.jpeg?auto=compress&cs=tinysrgb&w=600" name="Mechanical Engineering" more_link="/courses/mechanical"/>
<CoursesCard type="Government" img="https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=600" name="Electronics Engineering" more_link="/courses/electronics"/>
<CoursesCard type="Aided" img="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600" name="Computer Science & Engineering" more_link="/courses/cse"/>
<CoursesCard type="Aided" img="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600" name="Information & Technology" more_link="/courses/it"/>
<CoursesCard type="Aided" img="https://images.pexels.com/photos/6755058/pexels-photo-6755058.jpeg?auto=compress&cs=tinysrgb&w=600" name="Instrumental Control" more_link="/courses/ic"/>
<CoursesCard type="Aided" img="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600" name="Modern Office Management" more_link="/courses/mom"/>
<CoursesCard type="Aided" img="https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=600" name="Post Graduate Diploma in Computer Application" more_link="/courses/pgdca"/>

      
    </div>
  </div>
</section>
   </>
  )
}

export default page