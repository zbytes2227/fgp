import FacultyCard from '@/components/FacultyCard'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
<>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-3xl font-semibold title-font text-gray-900 tracking-widest underline">Experienced Faculty</h1>
    </div>
    <div className="flex flex-wrap -m-4 justify-center">

    <FacultyCard name="P.C. Katiyar" post="Head of Department, Mechanical Engineering" imgLink="/staff_images/591.jpg"/>

    <FacultyCard name="Ravindera Solanki" post="Lecturer, Mechanical Engineering" imgLink="/staff_images/8816.jpg"/>

    <FacultyCard name="S.K. Kannaujia" post="Head of Department, CSE, IT & PGDCA" imgLink="/staff_images/625.jpg"/>

    <FacultyCard name="Avneesh Verma" post="Lecturer, Mechanical Engineering & Hostel Warden" imgLink="/staff_images/715.jpg"/>
    
    <FacultyCard name="Chandrashekhar Saroj" post="Head of Department, MOM & SP" imgLink="/staff_images/10.jpg"/>
    
    <FacultyCard name="Nisheeth Upadhyay" post="Head of Department, Electronics" imgLink="/staff_images/972.jpg"/>

    <FacultyCard name="Shweta Verma" post="Lecturer, Electronics" imgLink="/staff_images/00.jpg"/>

    <FacultyCard name="Anjali Trivedi" post="Lecturer, Chemistry" imgLink="/staff_images/68.jpg"/>

    <FacultyCard name="Saumya Mishra" post="Lecturer, Electrical" imgLink="/staff_images/91.jpg"/>

    <FacultyCard name="Ashish Kumar" post="Lecturer, Mechanical" imgLink="/staff_images/95.jpg"/>

    <FacultyCard name="Dr. Mridul Pandey" post="Lecturer, Professional Communication" imgLink="/staff_images/mp01.png"/>

    <FacultyCard name="Renu Gautam" post="Head of Department, IC" imgLink="/staff_images/69.jpg"/>

    <FacultyCard name="Dr. Nitya Bajpai" post="Lecturer, CSE" imgLink="/staff_images/18.jpg"/>
    
    <FacultyCard name="Ratnesh Sonkar" post="Workshop Superitendant, NCC (Leftinent)" imgLink="/staff_images/926.jpg"/>

    <FacultyCard name="Ram Chandra" post="Workshop Instructor" imgLink="/staff_images/11.jpg"/>
    
    <FacultyCard name="Ganesh Mishra" post="Lecturer, Electronics" imgLink="/staff_images/53.jpg"/>

    <FacultyCard name="Ishrat Hussain" post="Lecturer, CSE" imgLink="/staff_images/823.jpg"/>

    <FacultyCard name="Sarita Srivastava" post="Lecturer, CSE" imgLink="/staff_images/26.jpg"/>

    <FacultyCard name="Apoorva Singh" post="Lecturer, CSE" imgLink="/staff_images/656.jpg"/>
    
    <FacultyCard name="Shweta Srivastava" post="Lecturer, CSE" imgLink="/staff_images/19.jpg"/>
    
    <FacultyCard name="Sonal Aman Verma" post="Programmer" imgLink="/staff_images/16.jpg"/>

    <FacultyCard name="Deepanjali Singh" post="Lecturer, Physics" imgLink="/staff_images/21.jpg"/>

    <FacultyCard name="Faqeha Siddiqui" post="Lecturer, CSE" imgLink="/staff_images/20.jpg"/>

    <FacultyCard name="Sushma Sahu" post="Lecturer, CSE" imgLink="/staff_images/17.jpg"/>

    <FacultyCard name="Anoop Shukla" post="Lecturer, Electronics" imgLink="/staff_images/716.jpg"/>

    <FacultyCard name="Deep Kumar Soni" post="Lecturer, CSE" imgLink="/staff_images/14.jpg"/>

    <FacultyCard name="Virendra Yadav" post="Lecturer, Electronics" imgLink="/staff_images/00.jpg"/>

    <FacultyCard name="Sandeep Kumar" post="Lecturer, IC" imgLink="/staff_images/00.jpg"/>
    
    <FacultyCard name="Sandhya Diwedi" post="Lecturer, Chemistry" imgLink="/staff_images/00.jpg"/>
    
    <FacultyCard name="Ashish Kumar" post="Programmer" imgLink="/staff_images/23.jpg"/>

    <FacultyCard name="Kiran Yadav" post="Lecturer, CSE" imgLink="/staff_images/617.jpg"/>

    <FacultyCard name="Abbas Zafri" post="T & P" imgLink="/staff_images/00.jpg"/>

    <FacultyCard name="Jitendra Kumar" post="Lecturer, Mathematics" imgLink="/staff_images/00.jpg"/>


    <div className="flex flex-col text-center w-full my-20">
      <h1 className="text-3xl font-semibold title-font text-gray-900 tracking-widest underline">Official Staff</h1>
    </div>
    <FacultyCard name="Rajendra Prasad" post="Senior Assistant" imgLink="/staff_images/00.jpg"/>
    <FacultyCard name="Jitendra Yadav" post="Accountant" imgLink="/staff_images/6.jpg"/>
    <FacultyCard name="Vinod Saroj" post="Cashier" imgLink="/staff_images/817.jpg"/>
    <FacultyCard name="Vinay Kumar Yadav" post="StonoGrapher" imgLink="/staff_images/00.jpg"/>
    <FacultyCard name="Rakesh Singh" post="Store Clerk" imgLink="/staff_images/15.jpg"/>
    <FacultyCard name="Narootam Singh" post="Library Assistant/Clerk" imgLink="/staff_images/7.jpg"/>
    </div>
  </div>
</section>
</>
  )
}

export default page