import { ADMIN_API_END_POINT } from '@/utlis/constants';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { MoreHorizontal } from 'lucide-react';
import { toast } from 'sonner';

const GetPendingCompanines = () => {

    const [companies, setCompanies] = useState([]);

    // Fetch companies from API
    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                let res = await axios.get(`${ADMIN_API_END_POINT}/getPendingCompany`,
                    { withCredentials: true }
                )
                console.log(res.data.data)
                setCompanies(res.data.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCompanies();
    }, [])

    const handleStatusChange = async (status, id) => {
        try {
            const res = await axios.put(`${ADMIN_API_END_POINT}/status/${id}/updateCompanyStatus`, { status },
                { withCredentials: true }
            )
            console.log(res.data.data);
            if (res.data.success) {
                toast.success(res.data.message);
                setCompanies((prevCompanies) => prevCompanies.filter((company) => company._id !== id));

            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="min-h-[90vh] max-w-[1200px] mx-auto m">
                <div className="p-4">
                    <h1 className="font-bold text-2xl mb-4 ">See Pending Companies</h1>
                    <Table className="w-full bg-white shadow rounded-lg overflow-hidden">
                        <TableCaption className="text-gray-500 mb-2">
                            A list of Companies that have been applied to your Website
                        </TableCaption>
                        <TableHeader className="bg-gray-100">
                            <TableRow>
                                <TableHead>Company Name</TableHead>
                                <TableHead>CreatedBy</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>WebSiteUrl</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {companies?.length > 0 ? (
                                companies?.map((item) => {
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
                                                {item?.companyName || "N/A"}
                                            </TableCell>
                                            <TableCell className="py-3">
                                                {item?.userId?.fullName || "N/A"}
                                            </TableCell>
                                            <TableCell className="py-3">
                                                {item?.location || "N/A"}
                                            </TableCell>
                                            <TableCell className="py-3 text-blue-600">
                                                {
                                                    item?.websiteUrl ? (
                                                        <a href={item?.websiteUrl} target='_blank' rel="noopener noreferrer">
                                                            {item?.websiteUrl}
                                                        </a>
                                                    ) : (
                                                        "No WebsiteUrl Provided"
                                                    )
                                                }
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
                                        No Pending Companies
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

export default GetPendingCompanines
