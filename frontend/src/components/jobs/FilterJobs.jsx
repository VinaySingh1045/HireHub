import React from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'

const FilterJobs = () => {
    const filterData = [
        {
            filterType: "Location",
            array: ["Delhi NCR", "Surat", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
        },
        {
            filterType: "Industry",
            array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
        },
        {
            filterType: "Salary",
            array: ["0-40k", "42-1lakh", "1lakh to 5lakh" , "5lakh to 10lakh" , "10lakh && above"]
        },
    ]

    return (
        <div className="w-full bg-white p-6 rounded-md shadow-lg">
            <h1 className="font-bold text-xl mb-4">Filter Jobs</h1>
            <RadioGroup>
                {filterData.map((data, index) => (
                    <div key={index} className="mb-6">
                        <h2 className="font-semibold text-lg mb-3">{data.filterType}</h2>
                        {data.array.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-3 mb-2">
                                <RadioGroupItem value={item} />
                                <Label>{item}</Label>
                            </div>
                        ))}
                    </div>
                ))}
            </RadioGroup>
        </div>
    )
}

export default FilterJobs
