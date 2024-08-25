import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { APPLICATION_API_END_POINT } from '@/utlis/constants';
import axios from 'axios';
import { Edit, MoreHorizontal } from 'lucide-react';
import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';


const ApplicantTable = () => {
    const { AllApplicants } = useSelector((state) => state.applicant);
    // console.log('AllApplicants State:', AllApplicants);

    const handleStatusChange = async (status, id) => {
        // console.log(status, id);

        try {
            const res = await axios.put(`${APPLICATION_API_END_POINT}/status/${id}/updateStatus`, { status },
                {
                    withCredentials: true
                });
            console.log(res.data.data);
            if (res.data.success) {
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <div className="">
                <div className="p-4">
                    <h1 className="font-bold text-2xl mb-4">See Applicants</h1>
                    <Table className="w-full bg-white shadow rounded-lg overflow-hidden">
                        <TableCaption className="text-gray-500 mb-2">
                            A list of Applicants that have applied to your Job
                        </TableCaption>
                        <TableHeader className="bg-gray-100">
                            <TableRow>
                                <TableHead>FullName</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Contact</TableHead>
                                <TableHead>Resume</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {AllApplicants?.application?.length > 0 ? (
                                AllApplicants?.application?.map((item) => {
                                    // Debugging each field
                                    // console.log('FullName:', item?.applicant?.fullName);
                                    // console.log('Email:', item?.applicant?.email);
                                    // console.log('Phone:', item?.applicant?.phoneno);
                                    // console.log('Resume:', item?.applicant?.resume);
                                    // console.log('CreatedAt:', item?.createdAt);
                                    // console.log('ID:', item._id);

                                    return (
                                        <TableRow key={item._id} className="hover:bg-gray-50 cursor-pointer">
                                            <TableCell className="py-3">
                                                {item?.applicant?.fullName || "N/A"}
                                            </TableCell>
                                            <TableCell className="py-3">
                                                {item?.applicant?.email || "N/A"}
                                            </TableCell>
                                            <TableCell className="py-3">
                                                {item?.applicant?.phoneno || "N/A"}
                                            </TableCell>
                                            <TableCell className="py-3">
                                                {item?.applicant?.resume ? (
                                                    <a
                                                        href={item?.applicant?.resume}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 truncate block max-w-xs"
                                                        style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                                                        title={item?.applicant?.resume}
                                                    >
                                                        {item?.applicant?.resume}
                                                    </a>
                                                ) : (
                                                    <span className="text-gray-500">Not Submitted</span>
                                                )}
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
                                        No Applicant Applied
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>

                    </Table>
                </div>
            </div>
        </>
    );
};

export default ApplicantTable;
