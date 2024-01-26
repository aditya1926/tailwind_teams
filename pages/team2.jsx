import React from 'react';
import Header from './../components/Header';
import { FaTwitter } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import Link from 'next/link';
import { profileDetails } from '@/lib/Data';

const team2 = () => {
  return (
    <div className="py-20 bg-gray-100">
      <Header />
      <div className="container mx-auto">
        <div className="grid gap-6 w-full px-10 mt-10 md:grid-cols-2 xl:grid-cols-4">
          {/* Cards */}
          {profileDetails.slice(0, 4).map((details, index) => (
            <div
              className="flex flex-col justify-center px-8 mx-6 my-12 text-center rounded-md shadow-md bg-white text-gray-800"
              key={index}
            >
              <img
                src={details.image}
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover bg-gray-500 rounded-full"
              />
              <div className=" flex-1 my-4">
                <p className="text-xl font-bold">{details.fullName}</p>
                <h3 className="text-md">{details.username}</h3>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2 ">
                <Link
                  href={details.github}
                  className="bg-black flex items-center justify-center shadow rounded-full h-8 w-8 text-white"
                >
                  <FaGithub />
                </Link>
                <Link
                  href={details.facebook}
                  className="bg-blue-700 flex items-center justify-center shadow rounded-full h-8 w-8 text-white"
                >
                  <FaFacebook />
                </Link>
                <Link
                  href={details.twitter}
                  className="bg-sky-500 flex items-center justify-center shadow rounded-full h-8 w-8 text-white"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href={details.instagram}
                  className="bg-pink-500 flex items-center justify-center shadow rounded-full h-8 w-8 text-white"
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default team2;
