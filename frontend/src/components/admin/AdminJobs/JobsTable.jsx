import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { JOB_API_END_POINT } from '@/utlis/constants';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Edit, MoreHorizontal, User } from 'lucide-react';
import { toast } from 'sonner';

const JobsTable = ({ filter }) => {

    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();

    // Fetch companies from API

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/getAdminJobs`, {
                    withCredentials: true
                });
                // console.log("API Response:", res.data);
                console.log("Jobs Data:", res.data.data);
                if (res.data.success) {
                    setJobs(res.data.data);
                    // toast.success(res.data.message);
                }
            } catch (error) {
                console.error("Error fetching Jobs:", error);
            }
        }
        fetchJob();
    }, []);

    const filterJob = () => {
        return jobs.filter((job) => (job.title.toLowerCase().includes(filter.toLowerCase())) || (job.company.companyName.toLowerCase().includes(filter.toLowerCase())))
    }
    const filteredJobs = filterJob()


    return (
        <>
            <div className=''>
                <div className="p-4">
                    <h1 className="font-bold text-2xl mb-4">See Jobs</h1>
                    <Table className="w-full bg-white shadow rounded-lg overflow-hidden">
                        <TableCaption className="text-gray-500 mb-2">
                            A list of Jobs that have been made by you
                        </TableCaption>
                        <TableHeader className="bg-gray-100">
                            <TableRow>
                                <TableHead>Company Name</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                filteredJobs.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan="4" className="text-center py-3">No Jobs Available</TableCell>
                                    </TableRow>
                                ) :
                                    filteredJobs.map((job) => (

                                        <TableRow key={job._id} className="hover:bg-gray-50 cursor-pointer">
                                            <TableCell className="py-3">
                                                {job.company.companyName}
                                            </TableCell>
                                            <TableCell className="py-3">{job.title
                                            }</TableCell>
                                            <TableCell className="py-3">{job.createdAt.split("T")[0]}</TableCell>
                                            <TableCell className="py-3">{job.status
                                            }</TableCell>
                                            <TableCell className="py-3">
                                                <Popover>
                                                    <PopoverTrigger>
                                                        <MoreHorizontal />
                                                    </PopoverTrigger>
                                                    <PopoverContent>
                                                        <div onClick={() => navigate(`/admin/jobs/${job._id}`)} className='flex items-center gap-5 cursor-pointer'> <Edit />Edit</div>

                                                        <div onClick={() => navigate(`/admin/jobs/${job._id}/getApplicants`)} className='flex items-center gap-5 cursor-pointer mt-5'> <User />See Applicants</div>

                                                    </PopoverContent>
                                                </Popover>
                                            </TableCell>
                                        </TableRow>
                                    ))
                            }

                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default JobsTable
