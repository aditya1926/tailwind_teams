import React from 'react';
import Header from './../components/Header';

import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Link from 'next/link';
import { profileDetails } from '@/lib/Data';
const team3 = () => {
  return (
    <div className="py-20 bg-gray-100">
      <Header />
      <div className="container mt-14 mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Cards */}
          {profileDetails.map((details, index) => (
            <div key={index}>
              <div className="bg-white shadow rounded p-10">
                <div className=" flex items-center gap-5 mb-7">
                  <img
                    src={details.image}
                    alt=""
                    className="rounded-full h-16"
                  />
                  <div>
                    <span className="text-gray-500 block mb-1">
                      {details.username}
                    </span>
                    <h3 className="text-lg font-bold">{details.fullName}</h3>
                  </div>
                </div>
                <p className="text-lg font-light">{details.bio}</p>
                <div className="flex flex-wrap items-center justify-between gap-6 mt-5">
                  <button className="bg-sky-500 text-white rounded flex items-center gap-2 px-5 py-2.5">
                    View More
                    <FaLongArrowAltRight />
                  </button>
                  <div className="flex items-center gap-4">
                    <Link
                      href={details.facebook}
                      className="bg-blue-500 shadow-md rounded-full flex items-center justify-center h-8 w-8 text-white"
                    >
                      <FaFacebook />
                    </Link>
                    <Link
                      href={details.twitter}
                      className="bg-sky-500 shadow-md rounded-full flex items-center justify-center h-8 w-8 text-white"
                    >
                      <FaTwitter />
                    </Link>
                    <Link
                      href={details.instagram}
                      className="bg-pink-500 shadow-md rounded-full flex items-center justify-center h-8 w-8 text-white"
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

export default team3;
