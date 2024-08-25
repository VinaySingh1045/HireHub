import { Button } from '@/components/ui/button'
import useGetAllCompanies from '@/hooks/useGetAllCompanies';
import { ArrowLeft } from 'lucide-react';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UpdatePostJobs = () => {

  useGetAllCompanies();
  const { AllCompanies } = useSelector(state => state.company)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    requirements: '',
    salary: '',
    company: '',
    location: '',
    description: '',
    jobType: '',
    experienceLevel: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  } 

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add Job Here</h2>
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

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Job Type</label>
              <select
                id="jobType"
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className="w-full px-4 py-2 border cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="company">
                Select Company
              </label>
              <select
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">
                  Select Company
                </option>
                {
                  AllCompanies &&
                  AllCompanies.map((company, index) => (
                    <>
                      <option className='' key={index} value={company.companyName}>
                        {company.companyName}
                      </option>
                    </>
                  ))
                }
              </select>
            </div>

            <Button
              type="submit"
              className="w-full py-3 bg-[#159788] text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add Job
            </Button>
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
