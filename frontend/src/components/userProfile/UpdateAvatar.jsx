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
import axios from "axios";
import { toast } from "sonner";
import { setUser } from "@/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { USER_API_END_POINT } from "@/utlis/constants";

const UpdateAvatar = ({ open, setOpen }) => {

    const { user } = useSelector((state) => state.auth);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const [input, setInput] = useState({
        avatar: user?.avatar || "https://avatars.githubusercontent.com/u/124599?v=4",
    })

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.files[0] })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // TODO: Update Avatar in the database

        const formData = new FormData();
        formData.append("avatar", input.avatar)

        try {
            const res = await axios.put(`${USER_API_END_POINT}/updateAvatar`, formData, {
                withCredentials: true
            })

            if (res.data.success) {
                dispatch(setUser(res.data.data))
                toast.success(res.data.message)
                setInput({ avatar: "" })
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
                <DialogContent
                    onInteractOutside={() => setOpen(false)}
                    className="flex gap-8 p-8 h-auto max-w-lg md:max-w-2xl"
                    style={{ minHeight: "400px" }}
                >
                    <div className="w-1/2 flex items-center justify-center border-r pr-6">
                        {user?.avatar ? (
                            <img
                                src={user.avatar || "https://avatars.githubusercontent.com/u/124599?v=4"}
                                alt="Profile Avatar"
                                className="w-64 object-cover shadow-lg"
                            />
                        ) : (
                            <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-gray-500 text-sm">No Image</span>
                            </div>
                        )}
                    </div>
                    <div className="w-1/2">
                        <DialogHeader>
                            <DialogTitle className="text-xl font-bold text-gray-800">
                                Update Profile Photo
                            </DialogTitle>
                            <Button
                                onClick={() => setOpen(false)}
                                className="absolute top-4 right-4 bg-[#159788]  text-white p-4 rounded-full"
                            >
                                X
                            </Button>
                        </DialogHeader>

                        <form onSubmit={handleSubmit} className="mt-4">
                            <div className="mb-6">
                                <label
                                    className="block text-gray-700 mt-20 font-bold mb-2"
                                    htmlFor="avatar"
                                >
                                    Upload New Photo
                                </label>
                                <input
                                    type="file"
                                    id="avatar"
                                    name="avatar"
                                    accept="image/*"
                                    onChange={handleChange}
                                    className=" mt-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
                                />
                            </div>

                            {loading ? (
                                <div className="mb-6">
                                    <Button className="bg-[#159788] text-white font-bold py-2 px-4 rounded w-full">
                                        Please wait...
                                    </Button>
                                </div>
                            ) : (
                                <div className="mb-6">
                                    <Button
                                        type="submit"
                                        className="bg-[#159788] text-white font-bold py-2 px-4 rounded w-full"
                                    >
                                        Update
                                    </Button>
                                </div>
                            )}
                        </form>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default UpdateAvatar
