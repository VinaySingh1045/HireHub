import { ADMIN_API_END_POINT } from '@/utlis/constants';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { MoreHorizontal } from 'lucide-react';
import { toast } from 'sonner';
const GetPendingJobs = () => {

    const [jobs, setJobs] = useState([]);

    // Fetch Jobs from API
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                let res = await axios.get(`${ADMIN_API_END_POINT}/getPendingJob`,
                    { withCredentials: true }
                )
                console.log(res.data.data)
                setJobs(res.data.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchJobs();
    }, [])

    const handleStatusChange = async (status, id) => {
        try {
            const res = await axios.put(`${ADMIN_API_END_POINT}/status/${id}/updateJobStatus`, { status },
                { withCredentials: true }
            )
            console.log(res.data.data);
            if (res.data.success) {
                toast.success(res.data.message);
                setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <div className="min-h-[90vh] max-w-[1200px] mx-auto m">
                <div className="p-4">
                    <h1 className="font-bold text-2xl mb-4 ">See Pending Jobs</h1>
                    <Table className="w-full bg-white shadow rounded-lg overflow-hidden">
                        <TableCaption className="text-gray-500 mb-2">
                            A list of Pending Jobs that have been applied to your Company
                        </TableCaption>
                        <TableHeader className="bg-gray-100">
                            <TableRow>
                                <TableHead>Company Name</TableHead>
                                <TableHead>CreatedBy</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Requriements</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {jobs?.length > 0 ? (
                                jobs?.map((item) => {
                                    
                                    return (
                                        <TableRow key={item._id} className="hover:bg-gray-50 cursor-pointer">
                                            <TableCell className="py-3">
                                                {item?.company?.companyName || "N/A"}
                                            </TableCell>
                                            <TableCell className="py-3">
                                                {item?.createdBy?.fullName || "N/A"}
                                            </TableCell>
                                            <TableCell className="py-3">
                                                {item?.location || "N/A"}
                                            </TableCell>
                                            <TableCell className="py-3 ">
                                                    { item?.title}     
                                            </TableCell>
                                            <TableCell className="py-3 ">
                                                    { item?.requirements}     
                                            </TableCell>
                                            <TableCell className="py-3">
                                                {item?.createdAt?.split('T')[0]}
                                            </TableCell>
                                            <TableCell className="py-3">
                                                <Popover>
                                                    <PopoverTrigger>
                                                        <MoreHorizontal />
                                                    </PopoverTrigger>
                                                    <PopoverContent>
                                                        {/* {console.log('Popover Opened for:', item._id)} */}
                                                        <div
                                                            onClick={() => handleStatusChange("Accepted", item._id)}
                                                            className="flex items-center justify-center gap-5 cursor-pointer hover:bg-gray-100"
                                                        >
                                                            Accepted
                                                        </div>
                                                        <div
                                                            onClick={() => handleStatusChange("Rejected", item._id)}
                                                            className="flex items-center justify-center hover:bg-gray-100 gap-5 cursor-pointer mt-5"
                                                        >
                                                            Rejected
                                                        </div>
                                                    </PopoverContent>
                                                </Popover>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })
                            ) : (
                                <TableRow>
                                    <TableCell colSpan="6" className="text-center py-3">
                                        No Pending Jobs
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>

                    </Table>
                </div>
            </div>
        </>
    )
}

export default GetPendingJobs
