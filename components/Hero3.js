import Image from "next/image";
import React from "react";
import NoticesCard from "./NoticesCard";

const Hero3 = () => {
  return (
    <section class="text-gray-600 body-font" id="temp">
      <div class="contauto flex md:px-16 px-5 py-12 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-justify items-center text-justify">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-semibold text-center text-gray-900">
            Late. Feroze Gandhi
          </h1>
          <p class="mb-8 leading-relaxed font-medium text-md">
            Feroze Gandhi was an Indian politician, journalist, and a key figure
            in the Indian National Congress. Born on September 12, 1912, in
            Bombay (present-day Mumbai), Feroze Gandhi was the husband of former
            Prime Minister Indira Gandhi and the father of Rajiv Gandhi, who
            also became the Prime Minister of India. Feroze Gandhi initially
            worked as a journalist and later entered politics. He served as a
            Member of Parliament (MP) and made significant contributions to the
            political landscape. Feroze Gandhi is remembered for his efforts in
            exposing corruption, particularly through his investigation of the
            Mundhra scandal, which led to his reputation as a crusader against
            corruption in public life. His untimely death at the age of 48 in
            1960 marked the end of a promising political career. Feroze Gandhi
            is remembered for his advocacy for transparency and ethical
            governance in Indian politics, leaving a lasting impact on the
            countrys political discourse.
          </p>
          <div class="flex justify-center">
            <a
              href="https://en.wikipedia.org/wiki/Feroze_Gandhi"
              class="inline-flex text-white bg-indigo-500 border-0 mb-1 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Read More
            </a>
            {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">More</button> */}
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-center">
          <Image
            height={360}
            width={360}
            class="object-cover object-center rounded-xl"
            alt="hero"
            src="/image/fg.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero3;
