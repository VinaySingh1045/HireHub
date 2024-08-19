import React from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

const JobsDescription = () => {
    const isApplied = false
    return (
        <div className='max-w-7xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg'>
            <div className='flex items-center justify-between mb-6'>
                <div>
                    <h1 className='text-3xl font-bold text-gray-900'>Job Title</h1>
                    <div className='flex items-center gap-4 mt-3'>
                        <Badge className='text-blue-700 font-semibold bg-blue-100' variant="ghost">12 Positions</Badge>
                        <Badge className='text-red-700 font-semibold bg-red-100' variant="ghost">Part-time</Badge>
                        <Badge className='text-purple-700 font-semibold bg-purple-100' variant="ghost">4322232 LPA</Badge>
                    </div>
                </div>
                <Button
                    disabled={isApplied}
                    className={`px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ${isApplied ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#159788] hover:bg-[#0f172ae6]'}`}>
                    {isApplied ? 'Already Applied' : 'Apply Now'}
                </Button>
            </div>
            <h2 className='text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4'>Job Description</h2>
            <div className='text-lg text-gray-700 space-y-3'>
                <p><span className='font-bold text-gray-900'>Role:</span> <span className='pl-4'>Title</span></p>
                <p><span className='font-bold text-gray-900'>Location:</span> <span className='pl-4'>Surat</span></p>
                <p><span className='font-bold text-gray-900'>Description:</span> <span className='pl-4'>Job description goes here...</span></p>
                <p><span className='font-bold text-gray-900'>Experience:</span> <span className='pl-4'>X years</span></p>
                <p><span className='font-bold text-gray-900'>Salary:</span> <span className='pl-4'>4322232 LPA</span></p>
                <p><span className='font-bold text-gray-900'>Total Applicants:</span> <span className='pl-4'>Number of applicants</span></p>
                <p><span className='font-bold text-gray-900'>Posted Date:</span> <span className='pl-4'>Time/date</span></p>
            </div>
        </div>
    )
}

export default JobsDescription
