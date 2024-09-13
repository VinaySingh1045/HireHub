import { store } from '@/app/store'
import { setLoading, setUser } from '@/features/authSlice'
import { USER_API_END_POINT } from '@/utlis/constants'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { Button } from '../ui/button'

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, user } = useSelector(store => store.auth)
    // const { user } = useSelector(store => store.auth)
    // const authUser = useSelector((state)=>state.auth.user)
    const [userData, setuserData] = useState({
        email: "",
        password: "",
        role: "",
    })

    const handleChange = (e) => {
        setuserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            dispatch(setLoading(true))
            const res = await axios.post(`${USER_API_END_POINT}/login`, userData, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })

            console.log("Login Response:", res.data.data.user);

            if (res.data.success) {
                const userInfo = res.data.data.user
                dispatch(setUser(userInfo))
                // navigate("/")
                toast.success(res.data.message)

                // Check the user's role and navigate accordingly
                if (userInfo && userInfo.role === "jobSeeker") {
                    navigate("/");
                } else if (userInfo && userInfo.role === "employer") {
                    navigate("/admin/companines");
                }
                else if (userInfo && userInfo.role === "admin"){
                    navigate("/mainAdmin/dashboard");    
                }

            }

            if (res.status === 200) {
                setuserData({
                    email: "",
                    password: "",
                    role: "",
                })
            }
        } catch (error) {
            console.log(error)
            if (error.response && error.response.status === 401) {
                toast.error("Incorrect email or password. Please try again.");
            }
            else if (error.response && error.response.status === 403) {
                toast.error("User does not exist with current role.");
            }
            else if (error.response &&  error.response.status === 400) {
                toast.error("Email Doesn't exists.");
            }
            else {
                toast.error("An error occurred. Please try again later.");
            }
        }
        finally {
            dispatch(setLoading(false))
        }
    }
    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [])


    return (
        <>

            <div className="flex justify-center items-center min-h-[90vh] bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md my-10">
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={userData.email}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={userData.password}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <span className="block text-gray-700 text-sm font-bold mb-2">Role</span>
                            <label className="inline-flex items-center cursor-pointer">
                                <input type="radio" name="role" value="jobSeeker" checked={userData.role === "jobSeeker"} onChange={handleChange} className="form-radio text-indigo-600 cursor-pointer" required />
                                <span className="ml-2">JobSeeker</span>
                            </label>
                            <label className="inline-flex items-center ml-6 cursor-pointer">
                                <input type="radio" name="role" value="employer" checked={userData.role === "employer"} onChange={handleChange} className="form-radio text-indigo-600 cursor-pointer" required />
                                <span className="ml-2">Employer</span>
                            </label>
                            <label className="inline-flex items-center ml-6 cursor-pointer">
                                <input type="radio" name="role" value="admin" checked={userData.role === "admin"} onChange={handleChange} className="form-radio text-indigo-600 cursor-pointer" required />
                                <span className="ml-2">Admin</span>
                            </label>
                        </div>

                        {
                            loading ? <div className="mb-6 flex items-center"> <Button className="bg-[#159788] text-white font-bold py-2 px-4 rounded w-full">
                                Please wait </Button>
                            </div> : <div className="mb-6">
                                <Button
                                    type="submit"
                                    className="bg-[#159788] text-white font-bold py-2 px-4 rounded w-full"
                                >
                                    Login
                                </Button>
                            </div>
                        }


                    </form>

                    <div className="text-center">
                        <p className="text-gray-600">
                            Not an account?
                            <Link to="/signup" className="text-indigo-600 hover:text-indigo-800 ml-1">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
