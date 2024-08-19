import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utlis/constants'
import { toast } from 'sonner'
import { setUser } from '@/features/authSlice'

const UpdateProfile = ({ open, setOpen }) => {
    const { user } = useSelector((state) => state.auth);
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        fullName: user?.fullName || "",
        bio: user?.bio || "",
        phoneno: user?.phoneno || "",
        skills: user?.skills?.join(', ') || "",
        // avatar: user?.avatar || "",
    });

    const handleChange = (e) => {
        // if (e.target.name === "avatar") {
        //     setInput({ ...input, [e.target.name]: e.target.files[0] })
        // } else {
            setInput({ ...input, [e.target.name]: e.target.value })
        // }
    }
    // console.log("User data:", user);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("fullName", input.fullName);
        formData.append("bio", input.bio);
        formData.append("phoneno", input.phoneno);
        formData.append("skills", input.skills);

        // if (input.avatar) {
        //     formData.append("avatar", input.avatar);
        // }

        setLoading(true)

        try {
            const res = await axios.put(`${USER_API_END_POINT}/updateDetails`, formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    withCredentials: true
                }
            )
            // Log the full response data for debugging
            console.log("Full Response Data:", res.data.data);

            if (res.data.success) {
                dispatch(setUser(res.data.data));
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
        finally {
            setLoading(false)
        }
        setOpen(false)
        console.log(input)

    }

    return (
        <>
            <Dialog open={open} >
                <DialogContent className="" onInteractOutside={() => setOpen(false)}>
                    <DialogHeader>
                        <DialogTitle>Update Profile</DialogTitle>
                        <Button onClick={() => setOpen(false)} className="absolute top-4 right-4 bg-[#159788]">X</Button>
                    </DialogHeader>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={input.fullName || ""}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">
                                Bio
                            </label>
                            <input
                                type="text"
                                id="bio"
                                name="bio"
                                value={input.bio || ""}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your Bio"
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
                                value={input.phoneno || ""}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="skill">
                                Skills
                            </label>
                            <input
                                type="text"
                                id="skills"
                                name="skills"
                                value={input.skills || ""}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your skills"
                            />
                        </div>
{/* 
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
                        </div> */}

                        {
                            loading ? (<div className="mb-6">
                                <Button
                                    className="bg-[#159788] text-white font-bold py-2 px-4 rounded w-full"
                                >
                                    Please wait...
                                </Button>
                            </div>) : (<div className="mb-6">
                                <Button
                                    type="submit"
                                    className="bg-[#159788] text-white font-bold py-2 px-4 rounded w-full"
                                >
                                    Update
                                </Button>
                            </div>)
                        }

                    </form>

                </DialogContent>
            </Dialog>

        </>
    )
}

export default UpdateProfile
