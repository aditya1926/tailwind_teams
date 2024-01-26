import React from 'react';
import Header from './../components/Header';
import { FaFacebook } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import Link from 'next/link';
import { profileDetails } from '@/lib/Data';
const team1 = () => {
  return (
    <div className="py-20 bg-gray-50">
      <Header />
      <div className="container mt-14 px-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* //Cards */}
          {profileDetails.slice(0, 3).map((details, index) => (
            <div className="bg-white shadow rounded-md text-center" key={index}>
              <img src={details.background} alt="" />
              <img
                src={details.image}
                alt=""
                className="rounded-full shadow-md border-4 border-white h-28 mx-auto -mt-14"
              />
              <div className="p-7">
                <p className="font-medium text-gray-500">{details.username}</p>
                <h3 className="text-xl font-bold mb-2">{details.fullName}</h3>
                <p className="text-gray-500">{details.bio}</p>
                <div className="flex items-center justify-center gap-4 mt-7">
                  <Link
                    href={details.github}
                    className=" bg-black shadow rounded-full flex items-center justify-center h-9 w-9 text-white"
                  >
                    <FaGithub />
                  </Link>
                  <Link
                    href={details.facebook}
                    className=" bg-blue-700 shadow rounded-full flex items-center justify-center h-9 w-9 text-white"
                  >
                    <FaFacebook />
                  </Link>
                  <Link
                    href={details.twitter}
                    className=" bg-sky-500 shadow rounded-full flex items-center justify-center h-9 w-9 text-white"
                  >
                    <FaTwitter />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default team1;
