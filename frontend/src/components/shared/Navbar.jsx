import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogoutIcon, UserIcon } from '@heroicons/react/outline';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const user = false; // yaha pe state layenge aage

    return (
        <>
            <div>
                <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                    <Link to={"/"}>
                        <div className='font-bold text-2xl cursor-pointer'>HireHub</div>
                    </Link>
                    <div className='flex items-center gap-5'>
                        <ul className='flex gap-5 items-center font-bold'>
                            <li>Home</li>
                            <li>Jobs</li>
                            <li>Browser</li>
                        </ul>

                        {
                            !user ? (
                                <div className='flex gap-2'>
                                    <Link to={"/login"}>
                                        <Button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 '>Login</Button>
                                    </Link>
                                    <Link to={"/signup"}>
                                        <Button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 '>Signup</Button>
                                    </Link>
                                </div>
                            ) : (

                                <Popover>
                                    <PopoverTrigger>
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                        </Avatar>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <div className='flex gap-4 items-center'>
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                            </Avatar>
                                            <div>
                                                <h2>Vinay Singh</h2>
                                                <p className='text-sm text-muted-foreground '>Bio: Lorem ipsum dolor sit.</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <UserIcon className="h-6 w-6 text-gray-500 mt-4 mx-2" />
                                            <p className='mt-4'>
                                                <Button variant="link" className='text-[19px]'>Your Profile</Button>
                                            </p>
                                        </div>
                                        <div className='flex items-center'>
                                            <LogoutIcon className="h-6 w-6 text-gray-500 mt-4 mx-2" />
                                            <p className='mt-4'>
                                                <Button variant="link" className='text-[19px]'>Logout</Button>
                                            </p>
                                        </div>
                                    </PopoverContent>
                                </Popover>

                            )
                        }
                    </div >
                </div >
            </div >
        </>
    )
}

export default Navbar
