import FacultyCard from '@/components/FacultyCard'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
<>
<Navbar/>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-12 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile you probably havent heard of them.</p>
    </div>
    <div class="flex flex-wrap -m-4">

    <FacultyCard name="Mr. Vinod Dohre" post="Principal" imgLink="https://dummyimage.com/200x200" qualification="Btech Mtech Mechanical"/>
    <FacultyCard name="Mr. Person" post="HOD, IC" imgLink="https://dummyimage.com/200x200" qualification="Btech Mtech Mechanical"/>
    <FacultyCard name="Mr. Vinod Dohre" post="Principal" imgLink="https://dummyimage.com/200x200" qualification="Btech Mtech Mechanical"/>
    <FacultyCard name="Mr. Vinod Dohre" post="Principal" imgLink="https://dummyimage.com/200x200" qualification="Btech Mtech Mechanical"/>
    <FacultyCard name="Mr. Vinod Dohre" post="Principal" imgLink="https://dummyimage.com/200x200" qualification="Btech Mtech Mechanical"/>
    <FacultyCard name="Mr. Vinod Dohre" post="Principal" imgLink="https://dummyimage.com/200x200" qualification="Btech Mtech Mechanical"/>
   

   
    </div>
  </div>
</section>
</>
  )
}

export default page