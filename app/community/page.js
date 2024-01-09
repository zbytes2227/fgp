import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: "Code Crafters | FGP, Raebareli",
  description: "Code Crafters is a community of students from Feroze Gandhi Polytechnic College, dedicated to the development of high-end coding projects. ",
};

const page = () => {
  return (
    <>
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-col px-5 py-14 justify-center items-center">
    <Image height={300} width={300} className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-xl border-2 border" alt="hero" src="/image/community_logo.png"/>
    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Code Crafter Community</h1>
      <p className="mb-8 leading-relaxed">Code Crafters is a community of students from Feroze Gandhi Polytechnic College, dedicated to the development of high-end coding projects. As a community of computer science and information technology students, Code Crafters members collaborate and share knowledge to enhance their skills in software development. The community aims to provide a platform for students to learn and practice coding skills, exchange ideas and knowledge, and build a supportive community. Code Crafters encourages its members to work on innovative projects, both individually and in groups, to develop practical skills and explore new technologies.</p>
     
      {/* <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p> */}
      <div className="flex">
        <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg>
          <a href='https://chat.whatsapp.com/GUUD95pNB6mBthNoiA3yfT' className="ml-4 flex items-start flex-col leading-none">
            <span className="text-xs text-gray-600 mb-1">Join our</span>
            <span className="title-font font-medium">WhatsApp Group</span>
          </a>
        </button>
        <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center ml-4 hover:bg-gray-200 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M16 8a8 8 0 0 1-7.022 7.94l1.902-7.098a3 3 0 0 0 .05-1.492A3 3 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8M0 8a8 8 0 0 0 7.927 8l1.426-5.321a3 3 0 0 1-.723.255 3 3 0 0 1-1.743-.147 3 3 0 0 1-1.043-.7L.633 4.876A8 8 0 0 0 0 8m5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a3 3 0 0 0-1.252.243 2.99 2.99 0 0 0-1.81 2.59M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
</svg>
          <a href='https://code-crafters-fgp.vercel.app/' className="ml-4 flex items-start flex-col leading-none">
            <span className="text-xs text-gray-600 mb-1">Check our</span>
            <span className="title-font font-medium">Community Website</span>
          </a>
        </button>
      </div>
    </div>
  </div>
</section>
<Footer/>
    </>
  )
}

export default page