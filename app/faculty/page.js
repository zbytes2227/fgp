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
      <h1 class="text-3xl font-semibold title-font text-gray-900 tracking-widest underline">Faculty</h1>
    </div>
    <div class="flex flex-wrap -m-4">

    <FacultyCard name="Teacher Name" post="Comming" imgLink="/staff_images/1.jpg" qualification="Btech Mtech Mechanical"/>
    <FacultyCard name="Teacher Name" post="Comming" imgLink="/staff_images/2.jpg" qualification="Btech Mtech Mechanical"/>
    <FacultyCard name="Teacher Name" post="Comming" imgLink="/staff_images/3.jpg" qualification="Btech Mtech Mechanical"/>
    <FacultyCard name="Teacher Name" post="Comming" imgLink="/staff_images/4.jpg" qualification="Btech Mtech Mechanical"/>
    <FacultyCard name="Teacher Name" post="Comming" imgLink="/staff_images/5.jpg" qualification="Btech Mtech Mechanical"/>
    <FacultyCard name="Teacher Name" post="Comming" imgLink="/staff_images/6.jpg" qualification="Btech Mtech Mechanical"/>
    <FacultyCard name="Teacher Name" post="Comming" imgLink="/staff_images/7.jpg" qualification="Btech Mtech Mechanical"/>
    {/* <FacultyCard name="Teacher Name" post="Comming" imgLink="/staff_images/8.jpg" qualification="Btech Mtech Mechanical"/> */}
    <FacultyCard name="Teacher Name" post="Comming" imgLink="/staff_images/25.jpg" qualification="Btech Mtech Mechanical"/>
    <div class="flex flex-col text-center w-full my-20">
      <h1 class="text-3xl font-semibold title-font text-gray-900 tracking-widest underline">Official Staff</h1>
    </div>
    {/* <FacultyCard name="Teacher Name" post="Comming" imgLink="/staff_images/9.jpg" qualification="Btech Mtech Mechanical"/> */}
    <FacultyCard name="Teacher Name" post="Comming" imgLink="/staff_images/10.jpg" qualification="Btech Mtech Mechanical"/>
    <FacultyCard name="Teacher Name" post="Comming" imgLink="/staff_images/11.jpg" qualification="Btech Mtech Mechanical"/>
    {/* <FacultyCard name="Teacher Name" post="Comming" imgLink="/staff_images/12.jpg" qualification="Btech Mtech Mechanical"/> */}
    <FacultyCard name="Teacher Name" post="Comming" imgLink="/staff_images/13.jpg" qualification="Btech Mtech Mechanical"/>
    <FacultyCard name="Teacher Name" post="Comming" imgLink="/staff_images/14.jpg" qualification="Btech Mtech Mechanical"/>
    <FacultyCard name="Teacher Name" post="Comming" imgLink="/staff_images/15.jpg" qualification="Btech Mtech Mechanical"/>
    <FacultyCard name="Teacher Name" post="Comming" imgLink="/staff_images/16.jpg" qualification="Btech Mtech Mechanical"/>
    <FacultyCard name="Teacher Name" post="Comming" imgLink="/staff_images/17.jpg" qualification="Btech Mtech Mechanical"/>
    <FacultyCard name="Teacher Name" post="Comming" imgLink="/staff_images/18.jpg" qualification="Btech Mtech Mechanical"/>
    <FacultyCard name="Teacher Name" post="Comming" imgLink="/staff_images/19.jpg" qualification="Btech Mtech Mechanical"/>
    <FacultyCard name="Teacher Name" post="Comming" imgLink="/staff_images/20.jpg" qualification="Btech Mtech Mechanical"/>
    <FacultyCard name="Teacher Name" post="Comming" imgLink="/staff_images/21.jpg" qualification="Btech Mtech Mechanical"/>
    <FacultyCard name="Teacher Name" post="Comming" imgLink="/staff_images/22.jpg" qualification="Btech Mtech Mechanical"/>

   
    </div>
  </div>
</section>
</>
  )
}

export default page