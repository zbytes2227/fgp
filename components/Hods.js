import React from 'react'
import HodCard from './HodCard'

const Hods = () => {
  return (
    <section class="text-gray-600 body-font border">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-col text-center w-full mb-10">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Our Team
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify
            </p>
          </div>

          <div class="flex flex-wrap -m-2">
            <HodCard />
            <HodCard />
            <HodCard />
            <HodCard />
            <HodCard />
            <HodCard />
          </div>
        </div>
      </section>
  )
}

export default Hods