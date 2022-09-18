import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

const Main = () => {
  return (
    <div className="w-full h-screen text-center bg-fixed bg-no-repeat bg-cover bg-[url('/img/main-cover.jpg')]">
      <div className="w-full h-screen bg-gray-700/40">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
          <div>
            <p className="text-sm tracking-widest uppercase text-white/80">
              Let&apos;s build something together
            </p>
            <h1 className="py-4 text-white/90">
              Hi, I&apos;m <span className="text-sky-500">Gabriel</span>
              <span className="ml-3">a</span>
            </h1>
            <h1 className="py-2 text-white/80 ">
              <Typewriter
                options={{
                  strings: ['Front-end Developer', 'UI Designer', 'Gamer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="py-4 text-white/90 sm:max-w-[70%] m-auto">
              Creating new things with high attention to details and always open
              to learn new skills. I like to craft beautiful frontend products
              with great user experience.
            </p>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
              <a
                href="https://www.linkedin.com/in/jamesgabrieldumaug/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer text-white/90 shadow-gray-400 hover:scale-110">
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                href="https://github.com/jgsamaaa"
                target="_blank"
                rel="noreferrer"
              >
                <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer text-white/90 shadow-gray-400 hover:scale-110">
                  <FaGithub />
                </div>
              </a>
              <Link href="/#contact">
                <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer text-white/90 shadow-gray-400 hover:scale-110">
                  <AiOutlineMail />
                </div>
              </Link>
              <Link href="/resume">
                <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer text-white/90 shadow-gray-400 hover:scale-110">
                  <BsFillPersonLinesFill />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
