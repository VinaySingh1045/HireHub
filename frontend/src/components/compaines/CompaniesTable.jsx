import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit, MoreHorizontal } from 'lucide-react';

const CompaniesTable = () => {
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
                            <TableRow className="hover:bg-gray-50 cursor-pointer">
                                <TableCell className="py-3">
                                    <Avatar>
                                        <AvatarImage className="w-40" src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=1190&height=800&name=image8-2.jpg" />
                                    </Avatar>
                                </TableCell>
                                <TableCell className="py-3">Google</TableCell>
                                <TableCell className="py-3">19-8-2024</TableCell>
                                <TableCell className="py-3">
                                    <Popover>
                                        <PopoverTrigger>
                                            <MoreHorizontal/>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <div className='flex items-center gap-5 cursor-pointer'> <Edit/>Edit</div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default CompaniesTable
