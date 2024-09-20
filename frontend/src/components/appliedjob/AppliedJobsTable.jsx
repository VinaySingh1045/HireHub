import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import axios from 'axios';
import { APPLICATION_API_END_POINT } from '@/utlis/constants';
import { Button } from '../ui/button';
import { MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AppliedJobsTable = () => {

    const [applied, setApplied] = useState([])

    useEffect(() => {
        const fetchedApplicantJob = async () => {
            try {
                const res = await axios.get(`${APPLICATION_API_END_POINT}/getAppliedJob`, {
                    withCredentials: true
                })
                console.log("Job: ", res.data.data)
                if (res.data.success) {
                    setApplied(res.data.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchedApplicantJob();
    }, [])


    return (
        <>
            <div className='min-h-screen'>
                <div className='max-w-6xl mx-auto'>
                    <div className="p-4">
                        <h1 className="font-bold text-2xl mb-4">Applied Jobs</h1>
                        <Table className="w-full bg-white shadow rounded-lg overflow-hidden">
                            <TableCaption className="text-gray-500 mb-2">
                                A list of jobs that have been applied to your application
                            </TableCaption>
                            <TableHeader className="bg-gray-100">
                                <TableRow>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Job Role</TableHead>
                                    <TableHead>Company</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    applied.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan="4" className="text-center py-3">No Applied Jobs Available</TableCell>
                                        </TableRow>
                                    ) :
                                        applied.map((job) => (
                                            <TableRow key={job?._id} className="hover:bg-gray-50 cursor-pointer">
                                                <TableCell className="py-3">{job.createdAt.split("T")[0]}</TableCell>
                                                <TableCell className="py-3">{job?.job?.title}</TableCell>
                                                <TableCell className="py-3">{job?.job?.company?.companyName}</TableCell>
                                                <TableCell className="py-3">
                                                    <Badge className={`${job?.status === "rejected" ? 'bg-red-400' : job.status === 'pending' ? 'bg-gray-400' : 'bg-green-400'}`}>{job.status.toUpperCase()}</Badge>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                            </TableBody>
                        </Table>
                    </div>
                    <div>
                        <Link to={"/jobs"}>
                            <Button className=" bg-[#159788] ml-4 mb-7">Apply More </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>

    );
};

export default AppliedJobsTable;
