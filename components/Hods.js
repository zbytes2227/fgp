import React from 'react'
import CoursesCard from './CoursesCard'


const Hods = () => {
  return (
<section className="text-gray-600 body-font overflow-hidden" id='temp'>
  <div className="contai md:px-16 px-6 py-12 mxuto">
    <div className="flex flex-col text-center w-full mb-8">
      <h1 className="sm:text-4xl text-3xl font-semibold title-font mb-2 text-gray-900">Courses Offered</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">We offer a variety of technical courses. These courses provide practical knowledge.</p>
    </div>
    <div className="flex flex-wrap justify-center -m-4">
  
<CoursesCard type="Government" img="/courses/mech.png" name="Mechanical Engineering" more_link="/courses/mechanical"/>
<CoursesCard type="Government" img="/courses/electronics.png" name="Electronics Engineering" more_link="/courses/electronics"/>
<CoursesCard type="Aided" img="/courses/cs.png" name="Computer Science & Engineering" more_link="/courses/cse"/>
<CoursesCard type="Aided" img="/courses/it.png" name="Information & Technology" more_link="/courses/it"/>
<CoursesCard type="Aided" img="/courses/ic.png" name="Instrumentation & Control" more_link="/courses/ic"/>
<CoursesCard type="Aided" img="/courses/mom.png" name="Modern Office Management and Secretarial practice" more_link="/courses/mom"/>
<CoursesCard type="Aided" img="/courses/pgdca.png" name="Post Graduate Diploma in Computer Application" more_link="/courses/pgdca"/>

      
    </div>
  </div>
</section>
  )
}

export default Hods