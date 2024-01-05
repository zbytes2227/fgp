"use client"
import ContactCard from '@/components/ContactCard'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
  <>
  <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
<ContactCard/>
  </div>
</section>
  <Footer/>
  </>
  )
}

export default page