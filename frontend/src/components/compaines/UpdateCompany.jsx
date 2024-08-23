import { ArrowLeft, Loader2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { COMPANY_API_END_POINT } from '@/utlis/constants'
import { useSelector } from 'react-redux'
import useGetCompanyById from '@/hooks/useGetCompanyById'
import { useParams } from 'react-router-dom'

const UpdateCompany = () => {

    const companyId = useParams()
    useGetCompanyById(companyId.id)
    const company  = useSelector(state => state.company.singleCompany)
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState({
        companyName: "",
        description: "",
        logo: "",
        websiteUrl: "",
        location: ""
    })

    const changeEventHandler = (e) => {
        if (e.target.name === "logo") {
            setInput({ ...input, [e.target.name]: e.target.files[0] })
        }
        else {
            setInput({ ...input, [e.target.name]: e.target.value })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(input)
        const formData = new FormData();

        formData.append("companyName", input.companyName);
        formData.append("description", input.description);
        formData.append("websiteUrl", input.websiteUrl);
        formData.append("location", input.location);
        // formData.append("logo", input.logo);
        if (input.logo) {
            formData.append("logo", input.logo);
        }

        try {
            setLoading(true);
            const res = await axios.put(`${COMPANY_API_END_POINT}/updateCompany/${company._id}`, formData, {
                withCredentials: true
            })

            if (res.data.success) {
                toast.success(res.data.message)
                setLoading(false);
                navigate(`/admin/companines`)
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setInput({
            companyName: company.companyName || "",
            description: company.description || "",
            logo: company.logo || "",
            websiteUrl: company.websiteUrl || "",
            location: company.location || ""
        })
    }, [company])



    return (
        <>
            <div>
                <div className='max-w-xl mx-auto my-10'>
                    <form onSubmit={handleSubmit}>
                        <div className='flex items-center gap-5 p-8'>
                            <Button onClick={() => navigate("/admin/companies")} variant="outline" className="flex items-center gap-2 text-gray-500 font-semibold">
                                <ArrowLeft />
                                <span>Back</span>
                            </Button>
                            <h1 className='font-bold text-xl'>Company Setup</h1>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <Label>Company Name</Label>
                                <Input
                                    type="text"
                                    name="companyName"
                                    value={input.companyName}
                                    onChange={changeEventHandler}
                                />
                            </div>
                            <div>
                                <Label>Description</Label>
                                <Input
                                    type="text"
                                    name="description"
                                    value={input.description}
                                    onChange={changeEventHandler}
                                />
                            </div>
                            <div>
                                <Label>Website</Label>
                                <Input
                                    type="text"
                                    name="website"
                                    value={input.website}
                                    onChange={changeEventHandler}
                                />
                            </div>
                            <div>
                                <Label>Location</Label>
                                <Input
                                    type="text"
                                    name="location"
                                    value={input.location}
                                    onChange={changeEventHandler}
                                />
                            </div>
                            <div>
                                <Label>Logo</Label>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={changeEventHandler}
                                />
                            </div>
                        </div>
                        {
                            loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Update</Button>
                        }
                    </form>
                </div>

            </div>
        </>
    )
}

export default UpdateCompany
