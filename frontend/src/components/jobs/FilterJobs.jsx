import React, { useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterJob, setSearchJob } from '@/features/jobSlice';
// import useGetAllJobs from '@/hooks/useGetAllJobs';

const FilterJobs = () => {
    const [selectedValue, setSelectedValue] = useState("");
    const { allJobs } = useSelector(state => state.job)
    const dispatch = useDispatch();

    // useGetAllJobs();

    const handleSelect = (value) => {
        
        dispatch(setSearchJob(""));

        if (value === "All Jobs") {
            console.log("Selected value");
            // If the same value is clicked again, deselect it
            setSelectedValue(""); // Update state to reflect deselection
            dispatch(setFilterJob(""));
            // Reset the filter
        } else {
            setSelectedValue(value);
            dispatch(setFilterJob(value));
        }
    };

    useEffect(() => {
        return () => {
            dispatch(setFilterJob(""));
        };
    }, [dispatch]);

    const filterData = [
        {
            filterType: "Company",
            array: ["Strontium", "Infosis", "Amazon", "Microsoft", "Google"]
        },
        {
            filterType: "Industry",
            array: ["Frontend Developer", "Backend Developer", "FullStack Developer", "React Developer", "Node Developer"]
        },
        {
            filterType: "Location",
            array: ["Delhi", "Surat", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
        },
    ];

    return (
        <div className="w-full bg-gray-200 p-6 rounded-md shadow-lg">
            <h1 className="font-bold text-xl mb-4">Filter Jobs</h1>
            <label className="inline-flex items-center font-bold text-xl cursor-pointer">
                <input type="radio" value="All Jobs" checked={selectedValue === ""}
                    onChange={() => handleSelect("All Jobs")} className="form-radio text-indigo-600 cursor-pointer" required />
                <span className="ml-2 my-3">All Jobs</span>
            </label>
            <RadioGroup value={selectedValue} onValueChange={handleSelect}>
                {filterData.map((data, index) => (
                    <div key={index} className="mb-6">
                        <h2 className="font-semibold text-lg mb-3">{data.filterType}</h2>
                        {data.array.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-3 mb-2">
                                <RadioGroupItem
                                    value={item}
                                    checked={item === selectedValue} // Ensure the radio button reflects the selected state
                                />
                                <Label>{item}</Label>
                            </div>
                        ))}
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
};

export default FilterJobs;
