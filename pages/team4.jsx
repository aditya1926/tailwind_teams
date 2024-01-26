import React from 'react';
import Header from './../components/Header';
import { FaFacebook } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa6';

import { FaGithub } from 'react-icons/fa6';

import Link from 'next/link';
import { profileDetails } from '@/lib/Data';

const team4 = () => {
  return (
    <div className="py-20 bg-white min-h-screen">
      <Header />
      <div className="grid gap-6 w-full px-10 pt-10 container mx-auto md:grid-cols-2 lg:grid-cols-4">
        {/* cards */}
        {profileDetails.slice(0, 4).map((details, index) => (
          <div className="w-full mb-6 px-6 " key={index}>
            <div className="flex flex-col">
              <img
                src={details.image}
                alt=""
                className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
              />

              <div className="text-center mt-6">
                <h1 className="text-gray-900 text-xl font-bold mb-1">
                  {details.fullName}
                </h1>
                <p className="text-gray-700 font-light mb-2">
                  {details.username}
                </p>
              </div>
              <div className="flex items-center justify-center opacity-80 hover:opacity:100 transition-opacity duration-300 space-x-3">
                <Link
                  href={details.github}
                  className="bg-sky-700 shadow rounded-full flex items-center justify-center h-9 w-9 text-white"
                >
                  <FaGithub />
                </Link>
                <Link
                  href={details.twitter}
                  className="bg-sky-700 shadow rounded-full flex items-center justify-center h-9 w-9 text-white"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href={details.facebook}
                  className="bg-sky-700 shadow rounded-full flex items-center justify-center h-9 w-9 text-white"
                >
                  <FaFacebook />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default team4;
