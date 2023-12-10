import Image from 'next/image'
import React from 'react'
import NoticesCard from './NoticesCard'

const Hero2 = () => {
  return (
    <div className="container mx-auto border mt-6">
    <div className="flex flex-col lg:flex-row p-2">
     <NoticesCard/>
      <div className="border-3 w-full lg:w-2/3">
        <div className="flex lg:flex-row flex-col justify-around">
          <div className="rounded-xl bg-white p-2 shadow-lg border w-full md:w-2/4 m-1">
            <h4 class="block font-sans text-xl  antialiased text-center font-semibold leading-snug tracking-normal text-inherit mb-1">
              Founder Desk
            </h4>
            <div className="flex items-center flex-col p-1 m-1">
              <Image
                src={"/fg.jpg"}
                alt="gh"
                className="rounded-md m-2 mx-auto"
                height={100}
                width={160}
              />
              <p className="p-2 text-center">
                <strong>Feroze Gandhi</strong>
                <br /> Member of the Indian Parliament <br />
                12 September 1912
                <br />
                Indian National Congress
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-white p-2 shadow-lg border w-full md:w-2/4 m-1">
            <h4 class="block font-sans text-xl  antialiased text-center font-semibold leading-snug tracking-normal text-inherit mb-1">
              Principal Desk
            </h4>
            <div className="flex items-center flex-col p-1 m-1">
              <Image
                src={"/principal.png"}
                alt="gh"
                className="rounded-md m-2 mx-auto"
                height={100}
                width={160}
              />
              <p className="p-2 text-center">
                <strong>Vinod Dohre [Principal]</strong>
                <br /> Feroze Gandhi Polytechnic <br />
                98766857868
                <br />
                2019-Present
                <br />
                principal@fgp.org.in
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero2