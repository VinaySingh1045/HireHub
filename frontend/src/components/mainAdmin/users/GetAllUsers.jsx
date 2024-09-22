import useGetAllUsers from '@/hooks/useGetAllUsers'
import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const GetAllUsers = () => {

    const { users } = useGetAllUsers();
    return (
        <>
            <div className="min-h-[90vh] max-w-[1200px] mx-auto m">
                <div className="p-4">
                    <h1 className="font-bold text-2xl mb-4 ">See All users</h1>
                    <Table className="w-full bg-white shadow rounded-lg overflow-hidden">
                        <TableCaption className="text-gray-500 mb-2">
                            A list of users that have been LogedIn to your WebSite
                        </TableCaption>
                        <TableHeader className="bg-gray-100">
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>PhoneNo</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users?.length > 0 ? (
                                users?.map((item) => {
                                    return (
                                        <TableRow key={item._id} className="hover:bg-gray-50 cursor-pointer">
                                            <TableCell className="py-3">
                                                {item?.fullName || "N/A"}
                                            </TableCell>
                                            <TableCell className="py-3">
                                                {item?.email || "N/A"}
                                            </TableCell>
                                            <TableCell className="py-3">
                                                {item?.phoneno || "N/A"}
                                            </TableCell>
                                            <TableCell className="py-3 ">
                                                    { item?.role}     
                                            </TableCell>
                                            <TableCell className="py-3">
                                                {item?.createdAt?.split('T')[0]}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })
                            ) : (
                                <TableRow>
                                    <TableCell colSpan="6" className="text-center py-3">
                                        No  users Register
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

export default GetAllUsers
