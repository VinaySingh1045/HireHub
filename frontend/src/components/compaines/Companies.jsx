import React, { useState } from 'react'
import CompaniesTable from './CompaniesTable'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'

const Companies = () => {

    const navigate = useNavigate()
    const [input, setInput] = useState("")
    return (
        <>
            <div>
                <div className='max-w-6xl mx-auto my-10'>
                    <div className='flex items-center justify-between my-5'>
                        <Input
                            className="w-fit"
                            placeholder="Filter by name"
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <Button onClick={() => navigate("/admin/companines/create")} className="bg-[#159788]">New Company</Button>
                    </div>
                    <CompaniesTable />
                </div>
            </div>
        </>
    )
}

export default Companies
