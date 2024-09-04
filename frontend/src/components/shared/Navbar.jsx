import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Avatar, AvatarImage } from '../ui/avatar';
import { LogoutIcon, UserIcon, MenuIcon } from '@heroicons/react/outline';
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
    const authUser = useSelector((state) => state.auth.user);

    const handleLogout = async () => {
        try {
            const res = await axios.post(`${USER_API_END_POINT}/logout`, {}, {
                withCredentials: true
            });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error((error.response?.data?.message || "Logout failed"));
        }
    };

    return (
        <>
            <div className='bg-[#dcdcdc] sticky top-0 z-50 shadow-lg'>
                <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                    {
                        authUser && authUser.role === "jobSeeker" ?
                            <Link to={"/"}>
                                <div className='font-bold text-3xl cursor-pointer'>
                                    <span className='text-4xl'>👜</span> Hire<span className='text-[#159788]'>Hub</span>
                                </div>
                            </Link>
                            :
                            <Link to={"/admin/companines"}>
                                <div className='font-bold text-3xl cursor-pointer'>
                                    <span className='text-4xl'>👜</span> Hire<span className='text-[#159788]'>Hub</span>
                                </div>
                            </Link>
                    }
                    <div className='flex items-center gap-5'>
                        {/* Desktop Menu */}
                        <ul className='hidden md:flex gap-5 items-center font-bold'>
                            {authUser && authUser.role === "employer" ? (
                                <>
                                    <li><NavLink to={"/admin/companines"} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`}>Companies</NavLink></li>
                                    <li><NavLink to={"/admin/jobs"} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`}>Jobs</NavLink></li>
                                </>
                            ) : (
                                <>
                                    <li><NavLink to={"/"} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`}>Home</NavLink></li>
                                    <li><NavLink to={"/jobs"} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`}>Jobs</NavLink></li>
                                    {/* <li><NavLink to={"/browse"} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`}>Browse</NavLink></li> */}
                                    {
                                        authUser && authUser.role === "jobSeeker" &&
                                        <li><NavLink to={"/apply"} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`}>Applied Jobs</NavLink></li>
                                    }
                                </>
                            )}
                        </ul>

                        {/* Mobile Menu */}
                        <div className='md:hidden'>
                            <Popover>
                                <PopoverTrigger>
                                    <MenuIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
                                </PopoverTrigger>
                                <PopoverContent className='flex flex-col gap-2'>
                                    {authUser && authUser.role === "employer" ? (
                                        <>
                                            <ul>
                                                <li className='mx-3 mb-5' ><NavLink to={"/admin/companines"} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700 `}>Companies</NavLink></li>
                                                <li className='mx-3' ><NavLink to={"/admin/jobs"} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`}>Jobs</NavLink></li>
                                            </ul>
                                        </>
                                    ) : (
                                        <>
                                            <ul className=''>
                                                <li className='mx-3 mb-5'><NavLink to={"/"} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`}>Home</NavLink></li>
                                                <li className='mx-3 mb-5'><NavLink to={"/jobs"} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`}>Jobs</NavLink></li>
                                                {/* <li className='mx-3'><NavLink to={"/browse"} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`}>Browse</NavLink></li>
                                                 */}
                                                {
                                                    authUser && authUser.role === "jobSeeker" &&
                                                    <li><NavLink to={"/apply"} className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`}>Applied Jobs</NavLink></li>
                                                }
                                            </ul>
                                        </>
                                    )}
                                </PopoverContent>
                            </Popover>
                        </div>

                        {/* User Section */}
                        {!authUser ? (
                            <div className='flex gap-2'>
                                <Link to={"/login"}>
                                    <Button className='bg-[#159788]'>Login</Button>
                                </Link>
                                <Link to={"/signup"}>
                                    <Button className='bg-[#159788]'>Signup</Button>
                                </Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger>
                                    <Avatar>
                                        <AvatarImage src={authUser.avatar || "https://avatars.githubusercontent.com/u/124599?v=4"}
                                            alt={authUser.fullName || "Default Avatar"}
                                        />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <div className='flex gap-4 items-center'>
                                        <Avatar>
                                            <AvatarImage src={authUser.avatar || "https://avatars.githubusercontent.com/u/124599?v=4"}
                                                alt={authUser.fullName || "Default Avatar"}
                                            />
                                        </Avatar>
                                        <div>
                                            <h2>{authUser.fullName}</h2>
                                            <p className='text-sm text-muted-foreground'>Bio: {authUser.bio}.</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center'>
                                        <UserIcon className="h-6 w-6 text-gray-500 mt-4 mx-2" />
                                        <p className='mt-4'>
                                            <Button variant="link" className='text-[19px]'>
                                                <Link to={"/profile"}>Your Profile</Link>
                                            </Button>
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
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
