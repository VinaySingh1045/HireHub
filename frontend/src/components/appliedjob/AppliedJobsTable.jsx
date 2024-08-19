import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';

const AppliedJobsTable = () => {
    return (
        <>
            <div className=''>
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
                            <TableRow className="hover:bg-gray-50 cursor-pointer">
                                <TableCell className="py-3">19-8-2024</TableCell>
                                <TableCell className="py-3">Frontend</TableCell>
                                <TableCell className="py-3">Google</TableCell>
                                <TableCell className="py-3">
                                    <Badge variant="success">Selected</Badge>
                                </TableCell>
                            </TableRow>
                            <TableRow className="hover:bg-gray-50 cursor-pointer">
                                <TableCell className="py-3">19-8-2024</TableCell>
                                <TableCell className="py-3">Frontend</TableCell>
                                <TableCell className="py-3">Google</TableCell>
                                <TableCell className="py-3">
                                    <Badge variant="success">Selected</Badge>
                                </TableCell>
                            </TableRow>
                            <TableRow className="hover:bg-gray-50 cursor-pointer">
                                <TableCell className="py-3">19-8-2024</TableCell>
                                <TableCell className="py-3">Frontend</TableCell>
                                <TableCell className="py-3">Google</TableCell>
                                <TableCell className="py-3">
                                    <Badge variant="success">Selected</Badge>
                                </TableCell>
                            </TableRow>
                            <TableRow className="hover:bg-gray-50 cursor-pointer">
                                <TableCell className="py-3">19-8-2024</TableCell>
                                <TableCell className="py-3">Frontend</TableCell>
                                <TableCell className="py-3">Google</TableCell>
                                <TableCell className="py-3">
                                    <Badge variant="success">Selected</Badge>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>

    );
};

export default AppliedJobsTable;
