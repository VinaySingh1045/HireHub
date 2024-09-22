import { Button } from '@/components/ui/button'
import useGetCompanyById from '@/hooks/useGetCompanyById'
import { JOB_API_END_POINT } from '@/utlis/constants'
import axios from 'axios'
import { ArrowLeft } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'

const AddJobsByCompanyId = () => {

    const [companyName, setCompanyName] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        title: '',
        requirements: '',
        description: '',
        companyId: '',
        salary: '',
        location: '',
        jobType: '',
        experienceLevel: '',
        positionsAvailable: '',

    })

    const companyId = useParams()
    // console.log(companyId.id)
    useGetCompanyById(companyId.id);
    const { singleCompany } = useSelector(state => state.company)
    // console.log("SingleCompany ", singleCompany)
    // setCompanyName(singleCompany.companyName)

    useEffect(() => {
        setCompanyName(singleCompany.companyName)
    }, [singleCompany])


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const res = await axios.post(`${JOB_API_END_POINT}/addJobsByCompanyId/${companyId.id}`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            })
            // console.log(res.data.data)

            if (res.data.success) {
                setFormData(res.data.data)
                toast.success(res.data.message);
                setLoading(false);
                navigate("/admin/jobs")
            }
        } catch (error) {
            console.log(error)
            if (error.response.status === 405) {
                toast.error("Company is not approved yet. Jobs can only be added for approved companies.");
                navigate("/admin/companines")
            } else if (error.response.status === 403) {
                toast.error("Your company has been rejected. You cannot add jobs.");
                navigate("/admin/companines")
            }
        }

    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add Job Here</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div>
                            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="companyName">
                                Company Name
                            </label>
                            <input
                                id="companyName"
                                name="companyName"
                                value={companyName}
                                // onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows="4"
                                required
                                disabled
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="title">
                                Job Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter job title"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="requirements">
                                Requirements
                            </label>
                            <input
                                id="requirements"
                                name="requirements"
                                value={formData.requirements}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter job requirements"
                                rows="4"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="salary">
                                Salary
                            </label>
                            <input
                                type="text"
                                id="salary"
                                name="salary"
                                value={formData.salary}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter salary"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="location">
                                Location
                            </label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter location"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="description">
                                Job Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter job description"
                                rows="4"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-medium text-gray-700 mb-2">Job Type</label>
                            <select
                                id="jobType"
                                name="jobType"
                                value={formData.jobType}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="">Select Job type</option>
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="experienceLevel">
                                Experience Level
                            </label>
                            <input
                                type="text"
                                id="experienceLevel"
                                name="experienceLevel"
                                value={formData.experienceLevel}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter experience level"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="positionsAvailable">
                                Positions Available
                            </label>
                            <input
                                type="text"
                                id="positionsAvailable"
                                name="positionsAvailable"
                                value={formData.positionsAvailable}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter Position Available"
                                required
                            />
                        </div>


                        {
                            loading ?
                                <Button
                                    type="submit"
                                    className="w-full py-3 bg-[#159788] text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Please Wait...
                                </Button>
                                :
                                <Button
                                    type="submit"
                                    className="w-full py-3 bg-[#159788] text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Add Job
                                </Button>
                        }
                        <Button onClick={() => navigate("/admin/jobs")} variant="outline" className="w-full flex justify-center items-center gap-2 text-gray-500 font-semibold border border-gray-300 hover:bg-gray-100">
                            <ArrowLeft />
                            <span>Back</span>
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddJobsByCompanyId
