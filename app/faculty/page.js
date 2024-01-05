import FacultyCard from '@/components/FacultyCard'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
<>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-12 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-3xl font-semibold title-font text-gray-900 tracking-widest underline">Experienced Faculty</h1>
    </div>
    <div class="flex flex-wrap -m-4 justify-center">

    <FacultyCard name="P.C Katiyar" post="Head of Department, Mechanical Engineering" imgLink="/staff_images/591.jpg"/>

    <FacultyCard name="Ravindera Solanki" post="Lecturer, Mechanical Engineering" imgLink="/staff_images/8816.jpg"/>

    <FacultyCard name="SK Kannaujia" post="Head of Department, CSE & IT" imgLink="/staff_images/625.jpg"/>

    <FacultyCard name="Avneesh Verma" post="Lecturer, Mechanical Engineering & Hostel Warden" imgLink="/staff_images/00.jpg"/>
    
    <FacultyCard name="Chandrashekhar Saroj" post="Head of Department, MOM" imgLink="/staff_images/10.jpg"/>
    
    <FacultyCard name="Nitish Upadhyay" post="Head of Department, Electronics" imgLink="/staff_images/972.jpg"/>

    <FacultyCard name="Shweta Verma" post="Lecturer, Electronics" imgLink="/staff_images/00.jpg"/>

    <FacultyCard name="Anjali Trivedi" post="Lecturer, Chemistry" imgLink="/staff_images/68.jpg"/>

    <FacultyCard name="Saumya Mishra" post="Lecturer, Electrical" imgLink="/staff_images/91.jpg"/>

    <FacultyCard name="Ashish Kumar" post="Lecturer, Mechanical" imgLink="/staff_images/95.jpg"/>

    <FacultyCard name="Dr. Mridul Pandey" post="Lecturer, Professional Communication" imgLink="/staff_images/mp01.png"/>

    <FacultyCard name="Renu Gautam" post="Head of Department, IC" imgLink="/staff_images/69.jpg"/>

    <FacultyCard name="Dr. Nitya Bajpai" post="Head of Department, PGDCA" imgLink="/staff_images/18.jpg"/>
    
    <FacultyCard name="Ratnesh Sonkar" post="Workshop Superitendant, NCC Officer" imgLink="/staff_images/926.jpg"/>

    <FacultyCard name="Ram Chandra" post="Workshop Instructor" imgLink="/staff_images/11.jpg"/>
    
    <FacultyCard name="Ganesh Mishra" post="Lecturer, Electronics" imgLink="/staff_images/53.jpg"/>

    <FacultyCard name="Ishrat Hussain" post="Lecturer, CSE" imgLink="/staff_images/823.jpg"/>

    <FacultyCard name="Sarita Srivastava" post="Lecturer, CSE" imgLink="/staff_images/26.jpg"/>

    <FacultyCard name="Apoorva Singh" post="Lecturer, CSE" imgLink="/staff_images/656.jpg"/>
    
    <FacultyCard name="Shweta Srivastava" post="Lecturer, CSE" imgLink="/staff_images/19.jpg"/>
    
    <FacultyCard name="Sonal Aman Verma" post="Lecturer, CSE" imgLink="/staff_images/16.jpg"/>

    <FacultyCard name="Depanjali Singh" post="Lecturer, CSE" imgLink="/staff_images/21.jpg"/>

    <FacultyCard name="Faquea Siddaqui" post="Lecturer, CSE" imgLink="/staff_images/20.jpg"/>

    <FacultyCard name="Sushma Sahu" post="Lecturer, CSE" imgLink="/staff_images/17.jpg"/>

    <FacultyCard name="Anoop Shukla" post="Lecturer, Electronics" imgLink="/staff_images/00.jpg"/>

    <FacultyCard name="Deep Kumar Soni" post="Lecturer, CSE" imgLink="/staff_images/14.jpg"/>

    <FacultyCard name="Virendra Yadav" post="Lecturer, Electronics" imgLink="/staff_images/00.jpg"/>

    <FacultyCard name="Sandeep Kumar" post="Lecturer, IC" imgLink="/staff_images/00.jpg"/>
    
    <FacultyCard name="Ashish Kumar" post="Lecturer, CSE" imgLink="/staff_images/23.jpg"/>

    <FacultyCard name="Ashish Kumar" post="Lecturer, CSE" imgLink="/staff_images/00.jpg"/>


    <div class="flex flex-col text-center w-full my-20">
      <h1 class="text-3xl font-semibold title-font text-gray-900 tracking-widest underline">Official Staff</h1>
    </div>
    <FacultyCard name="Rajendra Prasad" post="Clerk" imgLink="/staff_images/00.jpg"/>
    <FacultyCard name="Jitendra Yadav" post="Accountant" imgLink="/staff_images/6.jpg"/>
    <FacultyCard name="Vinod Saroj" post="Cashier" imgLink="/staff_images/00.jpg"/>
    <FacultyCard name="Vinay Kumar Yadav" post="StonoGrapher" imgLink="/staff_images/00.jpg"/>
    <FacultyCard name="Rakesh Singh" post="Store Manager" imgLink="/staff_images/15.jpg"/>
    <FacultyCard name="Narvottam Singh" post="Librarian" imgLink="/staff_images/7.jpg"/>
    </div>
  </div>
</section>
</>
  )
}

export default page