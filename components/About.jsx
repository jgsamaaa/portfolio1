import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id="about" className="flex items-center w-full p-2 md:h-screen ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            / / I am not your average developer
          </p>
          <p className="py-2 text-gray-600">
            I am a person who is very optimistic in every trial that I might be
            facing and not afraid of being criticized. Fascinated with how
            intricate programming can be I was quickly drawn to learn it.
          </p>
          <p className="py-2 text-gray-600">I&rsquo;m James Gariel Dumaug, </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="flex items-center justify-center w-full h-auto p-4 m-auto shadow-xl shadow-gray-400 rounded-xl ">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
