import { USER_API_END_POINT } from '@/utlis/constants';
import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AppliedJobsTable from '../appliedjob/AppliedJobsTable';
import { useNavigate } from 'react-router-dom';
import UpdateProfile from './UpdateProfile';

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="max-w-7xl mx-auto my-7 bg-white shadow-xl rounded-lg overflow-hidden relative">
        {/* Pencil Icon for Edit */}
        <div className="absolute top-4 right-4">
          <button onClick={() => { setOpen(true) }} className="text-gray-600 hover:text-gray-800">
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
            className="h-20 w-20 rounded-full object-cover shadow-md"
            src={user.avatar} // Replace with your image URL
            alt="https://via.placeholder.com/150"
          />
          <div className="ml-7">
            <h2 className="text-2xl font-bold text-gray-800">{user.fullName}</h2>
            <p className="text-sm text-gray-600 mt-1">
              {user.bio}
            </p>
          </div>
        </div>

        <div className="px-6 pb-6 border-b border-gray-200">

          <div className='flex items-center gap-3'>
            <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
              <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg></p>
            <p className="text-gray-700 font-medium">{user.email}</p>
          </div>
          <div className='flex items-center gap-3 mt-3'>
            <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
              <path d="M9.1585 5.71223L8.75584 4.80625C8.49256 4.21388 8.36092 3.91768 8.16405 3.69101C7.91732 3.40694 7.59571 3.19794 7.23592 3.08785C6.94883 3 6.6247 3 5.97645 3C5.02815 3 4.554 3 4.15597 3.18229C3.68711 3.39702 3.26368 3.86328 3.09497 4.3506C2.95175 4.76429 2.99278 5.18943 3.07482 6.0397C3.94815 15.0902 8.91006 20.0521 17.9605 20.9254C18.8108 21.0075 19.236 21.0485 19.6496 20.9053C20.137 20.7366 20.6032 20.3131 20.818 19.8443C21.0002 19.4462 21.0002 18.9721 21.0002 18.0238C21.0002 17.3755 21.0002 17.0514 20.9124 16.7643C20.8023 16.4045 20.5933 16.0829 20.3092 15.8362C20.0826 15.6393 19.7864 15.5077 19.194 15.2444L18.288 14.8417C17.6465 14.5566 17.3257 14.4141 16.9998 14.3831C16.6878 14.3534 16.3733 14.3972 16.0813 14.5109C15.7762 14.6297 15.5066 14.8544 14.9672 15.3038C14.4304 15.7512 14.162 15.9749 13.834 16.0947C13.5432 16.2009 13.1588 16.2403 12.8526 16.1951C12.5071 16.1442 12.2426 16.0029 11.7135 15.7201C10.0675 14.8405 9.15977 13.9328 8.28011 12.2867C7.99738 11.7577 7.85602 11.4931 7.80511 11.1477C7.75998 10.8414 7.79932 10.457 7.90554 10.1663C8.02536 9.83828 8.24905 9.56986 8.69643 9.033C9.14586 8.49368 9.37058 8.22402 9.48939 7.91891C9.60309 7.62694 9.64686 7.3124 9.61719 7.00048C9.58618 6.67452 9.44362 6.35376 9.1585 5.71223Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg></p>
            <p className="text-gray-700 font-medium mt-1">{user.phoneno}</p>
          </div>
        </div>

        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-gray-800 text-lg font-semibold">Skills</h3>
          <div className="flex flex-wrap mt-2 gap-2">
            {user.skills.map((item, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-1 rounded"
              >
                {item}
              </span>
            ))}
          </div>
        </div>


        <div className="px-6 py-4">
          <h3 className="text-gray-800 text-lg font-semibold">Resume</h3>
          <ul className="mt-2">
            <li>
              <a
                target="_blank"
                href={user.resume}
                className="text-blue-500 hover:underline"
              >
                {user.resume ? user.resume : "No Resume"}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto bg-white rounded-lg mt-7 shadow-xl p-6 mb-5 ">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Applied Jobs</h3>
        <AppliedJobsTable />
      </div>

      <div>
        <UpdateProfile open={open} setOpen={setOpen} />
      </div>

    </>
  );
};

export default Profile;
