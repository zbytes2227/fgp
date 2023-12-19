import React from "react";
import NoticesCard from "./NoticesCard";

const Objective = () => {
  return (

<section class="body-font">
  <div class="conauto flex bg-indigo-600 md:px-16 px-3 py-10 md:flex-row flex-col-reverse items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-5xl text-3xl mb-4 font-extrabold text-white">Welcome to Feroze Gandhi Polytechnic</h1>
      <p class="leading-relaxed text-white">Feroze Gandhi Polytechnic will strive to facilitate student placement-both for summer internships and final job placement. The development exhibition held in RaeBareli, U.P. in 1974 proved a historical step for technical development in this area. Industrialists and technical persons involved in the exhibition were so impressed that it was decided to start a Polytechnic institute at RaeBareli. </p>   <p class="mb-8 leading-relaxed text-white hidden md:block"> Shri Yashpal Kapoor, member Rajya Sabha, chaired the association which was made for this purpose. To remove defiviency of technical manpower, and under the umbrella of the Raebareli Polytechnic Association, The Raebareli Polytechnic was established in 1975; and under the G.O. No.: 2753 ED/18-GH-47-75 dated 28.08.1975 the Polytechnic was started. Inauguration of the First session: Sri Jamil Ahmed, the then works manager of the Allahabad Polytechnic, Allahabad, took over as the founder Principal on 09.09.1975 and classes of the first batch started on 29.09.1975.</p>
      <div class="flex justify-center mt-4">
        <button class="inline-flex bg-white border-0 py-2 px-6 focus:outline-none rounded-full text-lg">Read More</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-full">
     <div className="bg-white p-3 rounded-lg">
     {/* <h4 class="title-font sm:text-4xl text-3xl mb-4  font-extrabold text-center ">Photo Gallery</h4> */}
     {/* <img src="/im4.jpeg"/> */}
     <NoticesCard/>

     </div>
    </div>
  </div>
</section>

  );
};

export default Objective;
