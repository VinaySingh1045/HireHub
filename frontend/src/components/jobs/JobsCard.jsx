import React from 'react';
import { Badge } from '../ui/badge';
import { Avatar } from '@radix-ui/react-avatar';
import { Button } from '../ui/button';
import { AvatarImage } from '../ui/avatar';
import { Bookmark } from 'lucide-react';

const JobsCard = () => {
    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
    };

    return (
        <>
            <div className='bg-[#ebf4f5] p-10 max-h-[650px] mb-4'>
                <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 overflow-y-auto max-h-[600px] pr-3 '>
                    <div className='p-5 rounded-lg shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer mb-2'>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm text-gray-500'>5 days ago</p>
                            <Button variant="outline" className="rounded-full" size="icon"><Bookmark/></Button>
                        </div>

                        <div className='flex items-center gap-2 my-2'>
                            <Button className="p-6" variant="outline" size="icon">
                                <Avatar>
                                    <AvatarImage src="" />
                                </Avatar>
                            </Button>
                            <div>
                                <h1 className='font-medium text-lg'>Company Name</h1>
                                <p className='text-sm text-gray-500'>India</p>
                            </div>
                        </div>

                        <div>
                            <h1 className='font-bold text-lg my-2'>Title</h1>
                            <p className='text-sm text-gray-600'>Description</p>
                        </div>
                        <div className='flex items-center gap-2 mt-4'>
                            <Badge className='text-blue-700 font-bold' variant="ghost">HR Positions</Badge>
                            <Badge className='text-[#F83002] font-bold' variant="ghost">Full-Time</Badge>
                            <Badge className='text-[#7209b7] font-bold' variant="ghost">500000 LPA</Badge>
                        </div>
                        <div className='flex items-center gap-4 mt-4'>
                            <Button variant="outline">Details</Button>
                            <Button className="bg-[#159788] text-white">Save For Later</Button>
                        </div>
                    </div>
                    <div className='p-5 rounded-lg shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer'>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm text-gray-500'>5 days ago</p>
                            <Button variant="outline" className="rounded-full" size="icon"><Bookmark/></Button>
                        </div>

                        <div className='flex items-center gap-2 my-2'>
                            <Button className="p-6" variant="outline" size="icon">
                                <Avatar>
                                    <AvatarImage src="" />
                                </Avatar>
                            </Button>
                            <div>
                                <h1 className='font-medium text-lg'>Company Name</h1>
                                <p className='text-sm text-gray-500'>India</p>
                            </div>
                        </div>

                        <div>
                            <h1 className='font-bold text-lg my-2'>Title</h1>
                            <p className='text-sm text-gray-600'>Description</p>
                        </div>
                        <div className='flex items-center gap-2 mt-4'>
                            <Badge className='text-blue-700 font-bold' variant="ghost">HR Positions</Badge>
                            <Badge className='text-[#F83002] font-bold' variant="ghost">Full-Time</Badge>
                            <Badge className='text-[#7209b7] font-bold' variant="ghost">500000 LPA</Badge>
                        </div>
                        <div className='flex items-center gap-4 mt-4'>
                            <Button variant="outline">Details</Button>
                            <Button className="bg-[#159788] text-white">Save For Later</Button>
                        </div>
                    </div>
                    <div className='p-5 rounded-lg shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer'>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm text-gray-500'>5 days ago</p>
                            <Button variant="outline" className="rounded-full" size="icon"><Bookmark/></Button>
                        </div>

                        <div className='flex items-center gap-2 my-2'>
                            <Button className="p-6" variant="outline" size="icon">
                                <Avatar>
                                    <AvatarImage src="" />
                                </Avatar>
                            </Button>
                            <div>
                                <h1 className='font-medium text-lg'>Company Name</h1>
                                <p className='text-sm text-gray-500'>India</p>
                            </div>
                        </div>

                        <div>
                            <h1 className='font-bold text-lg my-2'>Title</h1>
                            <p className='text-sm text-gray-600'>Description</p>
                        </div>
                        <div className='flex items-center gap-2 mt-4'>
                            <Badge className='text-blue-700 font-bold' variant="ghost">HR Positions</Badge>
                            <Badge className='text-[#F83002] font-bold' variant="ghost">Full-Time</Badge>
                            <Badge className='text-[#7209b7] font-bold' variant="ghost">500000 LPA</Badge>
                        </div>
                        <div className='flex items-center gap-4 mt-4'>
                            <Button variant="outline">Details</Button>
                            <Button className="bg-[#159788] text-white">Save For Later</Button>
                        </div>
                    </div>
                    <div className='p-5 rounded-lg shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer'>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm text-gray-500'>5 days ago</p>
                            <Button variant="outline" className="rounded-full" size="icon"><Bookmark/></Button>
                        </div>

                        <div className='flex items-center gap-2 my-2'>
                            <Button className="p-6" variant="outline" size="icon">
                                <Avatar>
                                    <AvatarImage src="" />
                                </Avatar>
                            </Button>
                            <div>
                                <h1 className='font-medium text-lg'>Company Name</h1>
                                <p className='text-sm text-gray-500'>India</p>
                            </div>
                        </div>

                        <div>
                            <h1 className='font-bold text-lg my-2'>Title</h1>
                            <p className='text-sm text-gray-600'>Description</p>
                        </div>
                        <div className='flex items-center gap-2 mt-4'>
                            <Badge className='text-blue-700 font-bold' variant="ghost">HR Positions</Badge>
                            <Badge className='text-[#F83002] font-bold' variant="ghost">Full-Time</Badge>
                            <Badge className='text-[#7209b7] font-bold' variant="ghost">500000 LPA</Badge>
                        </div>
                        <div className='flex items-center gap-4 mt-4'>
                            <Button variant="outline">Details</Button>
                            <Button className="bg-[#159788] text-white">Save For Later</Button>
                        </div>
                    </div>
                    <div className='p-5 rounded-lg shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer'>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm text-gray-500'>5 days ago</p>
                            <Button variant="outline" className="rounded-full" size="icon"><Bookmark/></Button>
                        </div>

                        <div className='flex items-center gap-2 my-2'>
                            <Button className="p-6" variant="outline" size="icon">
                                <Avatar>
                                    <AvatarImage src="" />
                                </Avatar>
                            </Button>
                            <div>
                                <h1 className='font-medium text-lg'>Company Name</h1>
                                <p className='text-sm text-gray-500'>India</p>
                            </div>
                        </div>

                        <div>
                            <h1 className='font-bold text-lg my-2'>Title</h1>
                            <p className='text-sm text-gray-600'>Description</p>
                        </div>
                        <div className='flex items-center gap-2 mt-4'>
                            <Badge className='text-blue-700 font-bold' variant="ghost">HR Positions</Badge>
                            <Badge className='text-[#F83002] font-bold' variant="ghost">Full-Time</Badge>
                            <Badge className='text-[#7209b7] font-bold' variant="ghost">500000 LPA</Badge>
                        </div>
                        <div className='flex items-center gap-4 mt-4'>
                            <Button variant="outline">Details</Button>
                            <Button className="bg-[#159788] text-white">Save For Later</Button>
                        </div>
                    </div>
                    <div className='p-5 rounded-lg shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer'>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm text-gray-500'>5 days ago</p>
                            <Button variant="outline" className="rounded-full" size="icon"><Bookmark/></Button>
                        </div>

                        <div className='flex items-center gap-2 my-2'>
                            <Button className="p-6" variant="outline" size="icon">
                                <Avatar>
                                    <AvatarImage src="" />
                                </Avatar>
                            </Button>
                            <div>
                                <h1 className='font-medium text-lg'>Company Name</h1>
                                <p className='text-sm text-gray-500'>India</p>
                            </div>
                        </div>

                        <div>
                            <h1 className='font-bold text-lg my-2'>Title</h1>
                            <p className='text-sm text-gray-600'>Description</p>
                        </div>
                        <div className='flex items-center gap-2 mt-4'>
                            <Badge className='text-blue-700 font-bold' variant="ghost">HR Positions</Badge>
                            <Badge className='text-[#F83002] font-bold' variant="ghost">Full-Time</Badge>
                            <Badge className='text-[#7209b7] font-bold' variant="ghost">500000 LPA</Badge>
                        </div>
                        <div className='flex items-center gap-4 mt-4'>
                            <Button variant="outline">Details</Button>
                            <Button className="bg-[#159788] text-white">Save For Later</Button>
                        </div>
                    </div>
                    <div className='p-5 rounded-lg shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer'>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm text-gray-500'>5 days ago</p>
                            <Button variant="outline" className="rounded-full" size="icon"><Bookmark/></Button>
                        </div>

                        <div className='flex items-center gap-2 my-2'>
                            <Button className="p-6" variant="outline" size="icon">
                                <Avatar>
                                    <AvatarImage src="" />
                                </Avatar>
                            </Button>
                            <div>
                                <h1 className='font-medium text-lg'>Company Name</h1>
                                <p className='text-sm text-gray-500'>India</p>
                            </div>
                        </div>

                        <div>
                            <h1 className='font-bold text-lg my-2'>Title</h1>
                            <p className='text-sm text-gray-600'>Description</p>
                        </div>
                        <div className='flex items-center gap-2 mt-4'>
                            <Badge className='text-blue-700 font-bold' variant="ghost">HR Positions</Badge>
                            <Badge className='text-[#F83002] font-bold' variant="ghost">Full-Time</Badge>
                            <Badge className='text-[#7209b7] font-bold' variant="ghost">500000 LPA</Badge>
                        </div>
                        <div className='flex items-center gap-4 mt-4'>
                            <Button variant="outline">Details</Button>
                            <Button className="bg-[#159788] text-white">Save For Later</Button>
                        </div>
                    </div>

                    {/* Add more job cards here... */}

                </div>
            </div>
        </>
    );
}

export default JobsCard;
