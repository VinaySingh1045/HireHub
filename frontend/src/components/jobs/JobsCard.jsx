import React from 'react';
import { Badge } from '../ui/badge';
import { Avatar } from '@radix-ui/react-avatar';
import { Button } from '../ui/button';
import { AvatarImage } from '../ui/avatar';
import { Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const JobsCard = ({ job }) => {
    const navigate = useNavigate();
    // const jobid = "jndajknjnldsnk";
    console.log("Logo URL: ", job?.company?.logo);

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
    };

    return (
        <>
            <div className='p-5 rounded-lg shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer mb-4'>
                <div className='flex items-center justify-between'>
                    <p className='text-sm text-gray-500'> {daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}  </p>
                    <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
                </div>

                <div className='flex items-center gap-2 my-2'>
                    <Button className="p-1" variant="outline" size="icon">
                        <Avatar className="w-25 h-25">
                            <AvatarImage
                                src={job.company.logo}
                                className="w-full h-full object-cover"
                                alt="Company Logo"
                            />
                        </Avatar>
                    </Button>

                    <div>
                        <h1 className='font-medium text-lg'>{job.company.companyName || "Company Name"}</h1>
                        <p className='text-sm text-gray-500'>{"India"}</p>
                    </div>
                </div>

                <div>
                    <h1 className='font-bold text-lg my-2'>{job.title || "Title"}</h1>
                    <p className='text-sm text-gray-600'>{job.description || "Description"}</p>
                </div>
                <div className='flex items-center gap-2 mt-4'>
                    <Badge className='text-blue-700 font-bold' variant="ghost">{job.location || "HR Positions"}</Badge>
                    <Badge className='text-[#F83002] font-bold' variant="ghost">{job.type || "Full-Time"}</Badge>
                    <Badge className='text-[#7209b7] font-bold' variant="ghost">{job.salary || "500000 LPA"}</Badge>
                </div>
                <div className='flex items-center gap-4 mt-4'>
                    <Button onClick={() => { navigate(`/jobs/description/${job?._id}`) }} variant="outline">Details</Button>
                    <Button className="bg-[#159788] text-white">Save For Later</Button>
                </div>
            </div>
        </>
    );
}

export default JobsCard;
