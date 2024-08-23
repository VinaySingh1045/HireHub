import React, { useState } from 'react'
import CompaniesTable from './CompaniesTable'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'

const Companies = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState("")

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                    <Input
                        className="w-full md:w-1/3 mb-4 md:mb-0"
                        placeholder="Filter by company name"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button
                        onClick={() => navigate("/admin/companines/create")}
                        className="w-full md:w-auto bg-[#159788] text-white py-2 px-6 rounded-lg hover:bg-[#138b77] transition-all duration-200"
                    >
                        New Company
                    </Button>
                </div>
                <CompaniesTable filter={input} />
            </div>
        </div>
    )
}

export default Companies
