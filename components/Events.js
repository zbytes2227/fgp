"use client"
import React from 'react'
import NoticesCard from './NoticesCard'
import { Carousel } from '@material-tailwind/react'
import Temp from './Temp'

const Events = () => {
  return (
    <section class="body-font">
    <div class="conauto flex bg-indigo-600 px-1 md:px-16 py-1 md:flex-row flex-col justify-center items-center">
      {/* <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-white">Our Vision</h1>
        <p class="mb-8 leading-relaxed text-white">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.Copper mug try-hard pitchfork pour-ld-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        <div class="flex justify-center">
          <button class="inline-flex bg-white border-0 py-2 px-6 focus:outline-none rounded-full text-lg">Read More</button>
        </div>
      </div> */}


      {/* <div class="lg:max-w-lg lg:w-full md:w-1/2 w-full">
       <div className="bg-white p-3 m-6 rounded-lg">
       <h4 class="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-center ">Photo Gallery</h4>
       <img src="/im4.jpeg"/>
       </div>
      </div> */}

      <div class="lg:w-1/2 lg:w-full md:w-1/2 w-full">
       <div className="bg-white p-3 m-6 rounded-lg">
        

       <h4 class="title-font sm:text-4xl text-2xl md:mb-4 mb-2 font-extrabold text-center ">Upcoming Site</h4>

       <Carousel
            className="md:h-80 h-50 bg-gray-400"
            autoplay={true}
            loop={true}
            transition={{ duration: 1 }}
          >
          
        <Temp/>
        <Temp/>
        <Temp/>
            </Carousel>

      
       </div>
      </div>


      <div class="lg:1/2 lg:w-full md:w-1/2 w-full">
       <div className="bg-white p-3 m-6 rounded-lg">
       <h4 class="title-font sm:text-4xl text-2xl md:mb-4 mb-2 font-extrabold text-center ">Photo Gallery</h4>
       <Carousel
            className="md:h-80 h-50"
            autoplay={true}
            loop={true}
            transition={{ duration: 1 }}
          >
            <img
              src="https://dummyimage.com/900x480"
              alt="image 1"
              className="h-full w-full object-cover"
            />  
            <img
            src="https://dummyimage.com/900x480"
            alt="image 1"
            className="h-full w-full object-cover"
          />

            </Carousel>
       </div>
      </div>
    </div>
  </section>
  )
}

export default Events