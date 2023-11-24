import React from 'react'
import profileCharacter from '@/public/character.png'
import Image from 'next/image'

const AboutCoverSection = () => {
  return (
    <section className="w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light dark:text-light flex flex-col md:flex-row items-center justify-center text-dark">
      <div className="w-full md:w-1/2 h-full md:border-r-2 border-solid border-dark dark:border-light flex justify-center">
        <Image
          src={profileCharacter}
          alt="The Ai Barista"
          priority
          sizes=" (max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
          className="w-4/5 xs:w-3/4 md:w-full h-full object-contain object-center"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16">
        <h2 className="font-bold capitalize text-3xl xs:text-4xl sxl:text-5xl text-center lg:text-left">
          Powered by AI, Perfected by Experience
        </h2>
        <p className="font-medium capitalize mt-4 text-base">
          Hello, coffee enthusiasts and curious sippers! <br></br> Welcome to my
          corner of the web dedicated to all things coffee. My name is Austin
          Amento, and I've had the pleasure of immersing myself in the rich and
          aromatic world of coffee for over a dozen years. From the birth of the
          bean to the final brew, my journey in the coffee industry has been
          nothing short of transformative.<br /><br /> If you want to support the blog check
          out my etsy store{" "}
          <a
            href="https://theaibarista.etsy.com"
            className="!underline underline-offset-2 dark:hover:text-accentDark hover:text-accent transition-all ">
            here
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default AboutCoverSection