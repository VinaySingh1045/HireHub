import { setLoading } from '@/features/authSlice'
import { USER_API_END_POINT } from '@/utlis/constants.js'
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const Signup = () => {

    const dispatch = useDispatch()
    const { loading } = useSelector(store => store.auth)
    const navigate = useNavigate()
    const [userData, setuserData] = useState({
        fullName: "",
        email: "",
        phoneno: "",
        password: "",
        role: "",
        avatar: ""
    })

    const handleChange = (e) => {
        if (e.target.name === "avatar") {
            setuserData({ ...userData, [e.target.name]: e.target.files[0] })
        } else {
            setuserData({ ...userData, [e.target.name]: e.target.value })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("User Data: ", userData)

        const formData = new FormData();
        formData.append("fullName", userData.fullName);
        formData.append("email", userData.email);
        formData.append("password", userData.password);
        formData.append("role", userData.role);
        formData.append("phoneno", userData.phoneno);
        if (userData.avatar) {
            formData.append("avatar", userData.avatar)
        }
        try {
            dispatch(setLoading(true))
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: {
                    'Content-Type': "multipart/form-data"
                },
                withCredentials: true,
            })
            if (res.data.success) {
                navigate("/login")
                toast.success(res.data.message)
            }


            // Check if the response status indicates success
            if (res.status === 200) {
                setuserData({
                    fullName: "",
                    email: "",
                    phoneno: "",
                    password: "",
                    role: "",
                    avatar: ""
                });
            }
        } catch (error) {
            console.log(error)
        }
        finally {
            dispatch(setLoading(false))
        }
    }

    return (
        <>
            <div className="flex justify-center items-center min-h-[90vh] bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md my-10">
                    <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={userData.fullName}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

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
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneno">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phoneno"
                                name="phoneno"
                                value={userData.phoneno}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your phone number"
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

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
                            <label className="inline-flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="role"
                                    value="jobSeeker"
                                    checked={userData.role === "jobSeeker"}
                                    onChange={handleChange}
                                    className="form-radio text-indigo-600 cursor-pointer"
                                    required
                                />
                                <span className="ml-2">JobSeeker</span>
                            </label>
                            <label className="inline-flex items-center ml-6 cursor-pointer">
                                <input
                                    type="radio"
                                    name="role"
                                    value="employer"
                                    checked={userData.role === "employer"}
                                    onChange={handleChange}
                                    className="form-radio text-indigo-600 cursor-pointer"
                                    required
                                />
                                <span className="ml-2">Employer</span>
                            </label>
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="avatar">
                                Profile Picture
                            </label>
                            <input
                                type="file"
                                id="avatar"
                                name="avatar"
                                accept="image/*"
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
                            />
                        </div>

                        {
                            loading ? (<div className="mb-6">
                                <button
                                    className="bg-indigo-600 text-white font-bold py-2 px-4 rounded w-full hover:bg-indigo-700 focus:outline-none focus:shadow-outline"
                                >
                                    Please wait
                                </button>
                            </div>) : (<div className="mb-6">
                                <button

                                    type="submit"
                                    className="bg-indigo-600 text-white font-bold py-2 px-4 rounded w-full hover:bg-indigo-700 focus:outline-none focus:shadow-outline"
                                >
                                    Signup
                                </button>
                            </div>)
                        }
                        
                    </form>

                    <div className="text-center">
                        <p className="text-gray-600">
                            Already have an account?
                            <Link to={"/login"} className="text-indigo-600 hover:text-indigo-800 ml-1">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
