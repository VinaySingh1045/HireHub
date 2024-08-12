import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogoutIcon, UserIcon } from '@heroicons/react/outline';
import { Button } from '../ui/button';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utlis/constants';
import { setUser } from '@/features/authSlice';
import { toast } from 'sonner';


const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authUser = useSelector((state) => state.auth.user); // yaha pe state layenge aage


    // console.log('User state in Navbar:', authUser);


    const handleLogout = async () => {
        try {
            const res = await axios.post(`${USER_API_END_POINT}/logout`,
                {
                    withCredentials: true
                }
            )
            if (res.data.success) {
                dispatch(setUser(null))
                navigate("/")
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    return (
        <>
            <div className='bg-transparent'>
                <div className='flex items-center justify-between mx-auto max-w-7xl h-16  '>
                    <Link to={"/"}>
                        <div className='font-bold text-2xl cursor-pointer'>👜 HireHub</div>
                    </Link>
                    <div className='flex items-center gap-5'>
                        <ul className='flex gap-5 items-center font-bold'>
                            <li><NavLink to={"/"}
                                className={({ isActive }) =>
                                    `${isActive ? "text-orange-700" : "text-gray-700"}
                            block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >Home</NavLink></li>
                            <li><NavLink to={"/jobs"}
                                className={({ isActive }) =>
                                    `${isActive ? "text-orange-700" : "text-gray-700"}
                            block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >Jobs</NavLink></li>
                            <li><NavLink to={"/browser"}
                                className={({ isActive }) =>
                                    `${isActive ? "text-orange-700" : "text-gray-700"}
                            block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >Browser</NavLink></li>

                        </ul>

                        {
                            !authUser ? (
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
                                                <Button onClick={handleLogout} variant="link" className='text-[19px]'>Logout</Button>
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
