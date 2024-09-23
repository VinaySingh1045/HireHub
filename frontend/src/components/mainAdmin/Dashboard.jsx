import { ComputerIcon, Users2Icon } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import useGetPendingCompanies from '@/hooks/useGetPendingCompanies';
import useGetPendingJobs from '@/hooks/useGetPendingJobs';
import useGetAllUsers from '@/hooks/useGetAllUsers';
import useGetAllEmployer from '@/hooks/useGetAllEmployer';
import useGetAllJobSeeker from '@/hooks/useGetAllJobSeeker';

const Dashboard = () => {
    const { companies } = useGetPendingCompanies();
    const { jobs } = useGetPendingJobs();
    const { jobSeekerUsers } = useGetAllJobSeeker();
    const { empusers } = useGetAllEmployer();

    return (
        <div className='min-h-screen bg-gray-200 py-8'>
            <div className='text-center mb-8'>
                <h1 className='text-4xl font-bold'>Dashboard</h1>
                <p className='text-xl mt-2'>Welcome to the admin dashboard.</p>
            </div>
            <hr className='h-2 border-gray-400 mb-6' />

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-11/12 mx-auto'>
                <div className='bg-white shadow-lg rounded-lg p-4 flex flex-col items-center'>
                    <Users2Icon className='text-blue-500 w-10 h-10 mb-2' />
                    <p className='text-lg mt-1'>Total Registered JobSeeker</p>
                    <p className='mt-1 text-2xl font-bold'>{jobSeekerUsers?.length}</p>
                    <Link to={"/mainAdmin/dashboard/getAllJobSeekerUsers"}>
                        <Button className='w-full bg-[#159788] mt-4'>See Details</Button>
                    </Link>
                </div>

                <div className='bg-white shadow-lg rounded-lg p-4 flex flex-col items-center'>
                    <Users2Icon className='text-blue-500 w-10 h-10 mb-2' />
                    <p className='text-lg mt-1'>Total Registered Employers</p>
                    <p className='mt-1 text-2xl font-bold'>{empusers.length}</p>
                    <Link to={"/mainAdmin/dashboard/getAllEmployers"}>
                        <Button className='w-full bg-[#159788] mt-4'>See Details</Button>
                    </Link>
                </div>

                <div className='bg-white shadow-lg rounded-lg p-4 flex flex-col items-center'>
                    <ComputerIcon className='text-blue-500 w-10 h-10 mb-2' />
                    <p className='text-lg mt-1'>Total Pending Companies</p>
                    <p className='mt-1 text-2xl font-bold'>{companies.pendingCompaniesCount || 0}</p>
                    <Link to={"/mainAdmin/dashboard/getPendingCompanies"}>
                        <Button className='w-full bg-[#159788] mt-4'>See Details</Button>
                    </Link>
                </div>

                <div className='bg-white shadow-lg rounded-lg p-4 flex flex-col items-center'>
                    <div className='text-4xl mb-2'>👜</div>
                    <p className='text-lg mt-1'>Total Pending Jobs</p>
                    <p className='mt-1 text-2xl font-bold'>{jobs?.length || 0}</p>
                    <Link to={"/mainAdmin/dashboard/getPendingJobs"}>
                        <Button className='w-full bg-[#159788] mt-4'>See Details</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
