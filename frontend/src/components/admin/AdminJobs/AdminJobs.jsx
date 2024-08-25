import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import JobsTable from './JobsTable'

const AdminJobs = () => {

    const navigate = useNavigate()
    const [input, setInput] = useState("")

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                    <Input
                        className="w-full md:w-1/3 mb-4 md:mb-0"
                        placeholder="Search by Job title"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button
                        onClick={() => navigate("/admin/jobs/create")}
                        className="w-full md:w-auto bg-[#159788] text-white py-2 px-6 rounded-lg hover:bg-[#138b77] transition-all duration-200"
                    >
                        Add New Job
                    </Button>
                    
                </div>
                <JobsTable filter={input} />
            </div>
        </div>
    </>
  )
}

export default AdminJobs
