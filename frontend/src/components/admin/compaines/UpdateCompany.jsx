import { ArrowLeft, Loader2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button } from '../../ui/button'
import { Label } from '../../ui/label'
import { Input } from '../../ui/input'
import { COMPANY_API_END_POINT } from '@/utlis/constants'
import { useSelector } from 'react-redux'
import useGetCompanyById from '@/hooks/useGetCompanyById'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'sonner'

const UpdateCompany = () => {
    const companyId = useParams();
    useGetCompanyById(companyId.id);
    const company = useSelector(state => state.company.singleCompany);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [input, setInput] = useState({
        companyName: "",
        description: "",
        logo: "",
        websiteUrl: "",
        location: ""
    });

    const changeEventHandler = (e) => {
        if (e.target.name === "logo") {
            setInput({ ...input, [e.target.name]: e.target.files[0] });
        } else {
            setInput({ ...input, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("companyName", input.companyName);
        formData.append("description", input.description);
        formData.append("websiteUrl", input.websiteUrl);
        formData.append("location", input.location);
        if (input.logo) {
            formData.append("logo", input.logo);
        }

        try {
            setLoading(true);
            const res = await axios.put(`${COMPANY_API_END_POINT}/updateCompany/${company._id}`, formData, {
                withCredentials: true
            });

            if (res.data.success) {
                toast.success(res.data.message);
                setLoading(false);
                navigate(`/admin/companines`);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setInput({
            companyName: company.companyName || "",
            description: company.description || "",
            logo: company.logo || "",
            websiteUrl: company.websiteUrl || "",
            location: company.location || ""
        });
    }, [company]);

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h1 className="font-bold text-2xl text-gray-800 text-center mb-6">Update Company Details</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <Label className="text-gray-700 font-medium">Company Name</Label>
                            <Input
                                type="text"
                                name="companyName"
                                value={input.companyName}
                                onChange={changeEventHandler}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <Label className="text-gray-700 font-medium">Description</Label>
                            <Input
                                type="text"
                                name="description"
                                value={input.description}
                                onChange={changeEventHandler}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <Label className="text-gray-700 font-medium">Website</Label>
                            <Input
                                type="text"
                                name="websiteUrl"
                                value={input.websiteUrl}
                                onChange={changeEventHandler}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <Label className="text-gray-700 font-medium">Location</Label>
                            <Input
                                type="text"
                                name="location"
                                value={input.location}
                                onChange={changeEventHandler}
                                className="mt-2"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <Label className="text-gray-700 font-medium">Logo</Label>
                            <Input
                                type="file"
                                id="logo"
                                name="logo"
                                accept="image/*"
                                onChange={changeEventHandler}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    {loading ? (
                        <Button className="w-full bg-bg-[#159788] text-white py-3 rounded-lg flex justify-center items-center">
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait...
                        </Button>
                    ) : (
                        <Button type="submit" className="w-full bg-[#159788] text-white py-3 rounded-lg ">
                            Update Company
                        </Button>
                    )}
                </form>
                <div className="mt-6">
                    <Button onClick={() => navigate("/admin/companines")} variant="outline" className="w-full flex justify-center items-center gap-2 text-gray-500 font-semibold border border-gray-300 hover:bg-gray-100">
                        <ArrowLeft />
                        <span>Back</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default UpdateCompany;
