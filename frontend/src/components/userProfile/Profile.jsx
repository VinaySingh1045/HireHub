import { USER_API_END_POINT } from '@/utlis/constants';
import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {

  const { user } = useSelector((state) => state.auth)

  return (
    <div className="max-w mx-10 my-7 bg-[#edeaea]  shadow-xl rounded-lg overflow-hidden relative">
      {/* Pencil Icon for Edit */}
      <div className="absolute top-4 right-4">
        <button className="text-gray-600 hover:text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l2.651 2.65-12.72 12.72-4.13.457.457-4.13L16.862 4.487z"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-center p-6">
        <img
          className="h-16 w-16 rounded-full object-cover"
          src="https://via.placeholder.com/150" // Replace with your image URL
          alt="Profile"
        />
        <div className="">
          <div className='ml-7'>
            <h2 className="text-xl font-semibold text-gray-800">{user.fullName}</h2>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <div className=" px-6">
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-600">{user.phoneno}</p>
      </div>

      <div className="px-6 py-4">
        <h3 className="text-gray-700 text-sm font-medium">Skills</h3>
        <div className="flex flex-wrap mt-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            Html
          </span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            Css
          </span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            Javascript
          </span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            Reactjs
          </span>
        </div>
      </div>

      <div className="px-6 py-4">
        <h3 className="text-gray-700 text-sm font-medium">Resume</h3>
        <ul className="mt-2">
          <li>
            <a
              target='blank'
              href={user.resume}
              className="text-blue-500 hover:underline"
            >
              {user.resume}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
