import { Button } from '@/components/ui/button'
import useGetAllCompanies from '@/hooks/useGetAllCompanies';
import useGetJobById from '@/hooks/useGetJobById';
import { JOB_API_END_POINT } from '@/utlis/constants';
import axios from 'axios';
import { ArrowLeft, Loader2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';

const UpdatePostJobs = () => {

  const jobId = useParams()
  useGetJobById(jobId.id)
  const { singleJob } = useSelector(state => state.job)

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    requirements: '',
    salary: '',
    description: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(formData)

    try {
      setLoading(true)
      const res = await axios.put(`${JOB_API_END_POINT}/updateJob/${singleJob._id}`, formData, {
        withCredentials: true
      })

      if (res.data.success) {
        toast.success(res.data.message);
        setLoading(false);
        navigate(`/admin/jobs`);
      }

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }

  }

  useEffect(() => {
    setFormData({
      title: singleJob.title || "",
      description: singleJob.description || "",
      requirements: singleJob.requirements || "",
      salary: singleJob.salary || ""
    })
  }, [singleJob])


  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Update Job Here</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
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
              />
            </div>

            {loading ? (
              <Button className="w-full bg-bg-[#159788] text-white py-3 rounded-lg flex justify-center items-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait...
              </Button>
            ) : (
              <Button type="submit" className="w-full bg-[#159788] text-white py-3 rounded-lg ">
                Update Job
              </Button>
            )}
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

export default UpdatePostJobs
