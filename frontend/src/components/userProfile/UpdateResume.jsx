import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import React, { useState } from 'react'
import { Button } from "../ui/button"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utlis/constants";
import { setUser } from "@/features/authSlice";
import { toast } from "sonner";

const UpdateResume = ({ open, setOpen }) => {

    const { user } = useSelector((state) => state.auth);
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        resume: user?.resume || "",
    })

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.files[0] })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        const formData = new FormData();
        formData.append("resume", input.resume)

        try {
            const res = await axios.put(`${USER_API_END_POINT}/updateResume`, formData, {
                withCredentials: true
            })

            if (res.data.success) {
                dispatch(setUser(res.data.data))
                toast.success(res.data.message)
                setInput({ resume: "" })
                setOpen(false)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
        }
        setOpen(false)

    }

    return (
        <>
            <Dialog open={open}>
                <DialogContent onInteractOutside={() => setOpen(false)}>
                    <DialogHeader>
                        <DialogTitle>Update Resume</DialogTitle>
                        <Button onClick={() => setOpen(false)} className="absolute top-4 right-4 bg-[#159788]">X</Button>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} >
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
                                Resume
                            </label>
                            <input
                                type="file"
                                id="resume"
                                name="resume"
                                accept="image/*"
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
                            />
                        </div>

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

export default UpdateResume
