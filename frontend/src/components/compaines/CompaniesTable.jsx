import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit, MoreHorizontal } from 'lucide-react';
import axios from 'axios';
import { COMPANY_API_END_POINT } from '@/utlis/constants';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const CompaniesTable = ({ filter }) => {

    const [companies, setCompanies] = useState([]);
    const navigate = useNavigate();

    // Fetch companies from API

    useEffect(() => {
        const fetchCompany = async () => {
            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/getCompany`, {
                    withCredentials: true
                });
                // console.log("API Response:", res.data);
                console.log("Companies Data:", res.data.data);
                if (res.data.success) {
                    setCompanies(res.data.data);
                    // toast.success(res.data.message);
                }
            } catch (error) {
                console.error("Error fetching companies:", error);
            }
        }
        fetchCompany();
    }, []);

    const filterCompany = () => {
        return companies.filter((company) => (company.companyName.toLowerCase().includes(filter.toLowerCase())))
    }
    const filteredCompanies = filterCompany()

    return (
        <>
            <div className=''>
                <div className="p-4">
                    <h1 className="font-bold text-2xl mb-4">See Companies</h1>
                    <Table className="w-full bg-white shadow rounded-lg overflow-hidden">
                        <TableCaption className="text-gray-500 mb-2">
                            A list of Companies that have been applied to your business
                        </TableCaption>
                        <TableHeader className="bg-gray-100">
                            <TableRow>
                                <TableHead>Logo</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                filteredCompanies.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan="4" className="text-center py-3">No Companies Available</TableCell>
                                    </TableRow>
                                ) :
                                filteredCompanies.map((company) => (

                                        <TableRow key={company._id} className="hover:bg-gray-50 cursor-pointer">
                                            <TableCell className="py-3">
                                                <Avatar>
                                                    <AvatarImage className="w-40" src={company.logo} />
                                                </Avatar>
                                            </TableCell>
                                            <TableCell className="py-3">{company.companyName
                                            }</TableCell>
                                            <TableCell className="py-3">{company.createdAt}</TableCell>
                                            <TableCell className="py-3">
                                                <Popover>
                                                    <PopoverTrigger>
                                                        <MoreHorizontal />
                                                    </PopoverTrigger>
                                                    <PopoverContent>
                                                        <div onClick={() => navigate(`/admin/companines/${company._id}`)} className='flex items-center gap-5 cursor-pointer'> <Edit />Edit</div>
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

export default CompaniesTable
