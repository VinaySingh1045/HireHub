import { ComputerIcon, Users2Icon } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import useGetPendingCompanies from '@/hooks/useGetPendingCompanies'
import useGetPendingJobs from '@/hooks/useGetPendingJobs'
import useGetAllUsers from '@/hooks/useGetAllUsers'
import useGetAllEmployer from '@/hooks/useGetAllEmployer'

const Dashboard = () => {

    const { companies } = useGetPendingCompanies();
    const { jobs } = useGetPendingJobs();
    const { users } = useGetAllUsers();
    const { empusers } = useGetAllEmployer();

    return (
        <>
            <div className='min-h-[90vh] bg-white'>
                <div className='text-center mx-auto text-3xl'>
                    <h1 className=' font-bold'>Dashboard</h1>
                    <p className='text-xl m-1'>Welcome to the admin dashboard.</p>
                </div>
                <hr className='h-2 border-gray-400' />

                <div className='grid grid-cols-2 w-[50%] mx-auto shadow-lg bg-gray-200'>
                    <div className='mx-4 my-4 w-72 bg-white shadow-lg h-60 flex flex-col justify-evenly'>
                        {/* Center Content */}
                        <div className='flex flex-col items-center justify-center'>
                            <div className='text-center'>
                                <div className='flex justify-center items-center '><Users2Icon className='text-blue-500 w-10 h-10 mb-2' /></div>
                                <p className='text-lg mt-1'>Total Registered Users</p>
                                <p className='mt-1'>{users?.length}</p>
                            </div>
                        </div>

                        {/* Button at the Bottom */}
                        <div className='p-4'>
                            <Button className='w-full bg-[#159788]'>See Details</Button>
                        </div>
                    </div>

                    <div className='mx-4 my-4 w-72 bg-white shadow-lg h-60 flex flex-col justify-evenly'>
                        {/* Center Content */}
                        <div className='flex flex-col items-center justify-center'>
                            <div className='text-center'>
                                <div className='flex justify-center items-center '><Users2Icon className='text-blue-500 w-10 h-10 mb-2' /></div>
                                <p className='text-lg mt-1'>Total Registered Employers</p>
                                <p className='mt-1'>{empusers.length}</p>
                            </div>
                        </div>

                        {/* Button at the Bottom */}
                        <div className='p-4'>
                            <Button className='w-full bg-[#159788]'>See Details</Button>
                        </div>
                    </div>
                    <div className='mx-4 my-4 w-72 bg-white shadow-lg h-60 flex flex-col justify-evenly'>
                        {/* Center Content */}
                        <div className='flex flex-col items-center justify-center'>
                            <div className='text-center'>
                                <div className='flex justify-center items-center '><ComputerIcon className='text-blue-500 w-10 h-10 mb-2' /></div>
                                <p className='text-lg mt-1'>Total Pending Companies</p>
                                <p className='mt-1'>{companies.pendingCompaniesCount || 0}</p>
                            </div>
                        </div>

                        {/* Button at the Bottom */}
                        <Link to={"/mainAdmin/dashboard/getPendingCompanies"}>
                            <div className='p-4'>
                                <Button className='w-full bg-[#159788]'>See Details</Button>
                            </div>
                        </Link>
                    </div>
                    <div className='mx-4 my-4 w-72 bg-white shadow-lg h-60 flex flex-col justify-evenly'>
                        {/* Center Content */}
                        <div className='flex flex-col items-center justify-center'>
                            <div className='text-center'>
                                <div className='flex justify-center items-center text-4xl mb-2 '>👜</div>
                                <p className='text-lg mt-1'>Total Pending Jobs</p>
                                <p className='mt-1'>{jobs?.length || 0}</p>
                            </div>
                        </div>

                        {/* Button at the Bottom */}
                        <Link to={"/mainAdmin/dashboard/getPendingJobs"}>
                            <div className='p-4'>
                                <Button className='w-full bg-[#159788]'>See Details</Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
