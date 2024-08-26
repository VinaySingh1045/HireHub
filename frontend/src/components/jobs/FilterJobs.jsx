import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import { useDispatch } from 'react-redux';
import { setFilterJob } from '@/features/jobSlice';

const FilterJobs = () => {

    const [selectedValue, setSelectedValue] = useState("");
    const dispatch = useDispatch();


    const handleSelect = (value) => {
        if (value === selectedValue) {
            // If the same value is clicked again, deselect it
            setSelectedValue("");
            dispatch(setFilterJob("")); // Reset the filter
          } else {
            setSelectedValue(value);
            dispatch(setFilterJob(value));
            // console.log("value: " , value);
          }
    }
    useEffect(() => {
        return () => {
          dispatch(setFilterJob(""))
        }
      }, [])


    const filterData = [
        {
            filterType: "Company",
            array: ["Strontium", "Infosis", "Amazon", "Microsoft", "Google"]
        },
        {
            filterType: "Industry",
            array: ["Frontend Developer", "Backend Developer", "FullStack Developer","React Developer", "Node Developer"]
        },
        {
            filterType: "Location",
            array: ["Delhi", "Surat", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
        },
    ]

    return (
        <div className="w-full bg-gray-200 p-6 rounded-md shadow-lg">
            <h1 className="font-bold text-xl mb-4">Filter Jobs</h1>
            <RadioGroup value={selectedValue} onValueChange={handleSelect}>
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
