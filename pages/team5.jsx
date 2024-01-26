import React from 'react';
import Header from './../components/Header';
import { FaTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import Link from 'next/link';
import { profileDetails } from '@/lib/Data';

const team5 = () => {
  return (
    <div className="pt-20">
      <Header />
      <div className="bg-gray-100 w-full">
        <div className="container mx-auto grid gap-6 w-full px-10 pt-10 md:grid-cols-2 lg:grid-cols-3">
          {/* cards  */}
          {profileDetails.map((details, index) => (
            <div className="relative mt-16 mb-32 " key={index}>
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src={details.image}
                      alt=""
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <h1 className="font-bold text-3xl text-center mb-1">
                    {details.fullName}
                  </h1>
                  <p className="text-gray-800 text-sm text-center">
                    {details.username}
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    {details.bio}
                  </p>
                  <div className=" w-full flex justify-center pt-5 pb-5 space-x-3">
                    <Link
                      className="bg-gray-300 shadow rounded-full flex items-center justify-center h-10 w-10 text-black"
                      href={details.github}
                    >
                      <FaGithub />
                    </Link>
                    <Link
                      className="bg-gray-300 shadow rounded-full flex items-center justify-center h-10 w-10 text-black"
                      href={details.twitter}
                    >
                      <FaTwitter />
                    </Link>
                    <Link
                      className="bg-gray-300 shadow rounded-full flex items-center justify-center h-10 w-10 text-black"
                      href={details.instagram}
                    >
                      <FaInstagram />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default team5;
