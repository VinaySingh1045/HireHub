import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import axios from 'axios';
import { COMPANY_API_END_POINT } from '@/utlis/constants';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setSingleCompany } from '@/features/companySlice';

const CreateCompanies = () => {

    const [companyName, setCompanyName] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(companyName);
        try {
            const res = await axios.post(`${COMPANY_API_END_POINT}/compRegister`,
                { companyName }, // Ensure the key matches the server's expected field name
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                });

            if (res.data.success) {
                dispatch(setSingleCompany(res.data.data))
                toast.success(res.data.message);
                const companyId = res.data.data._id;
                navigate(`/admin/companines/${companyId}`);
            }
        } catch (error) {
            console.log(error);
            if (error.response && error.response.status === 401) {
                toast.error("Company Name is Required.");
            }
        }
    };

    return (
        <>
            <div className='max-w-4xl mx-auto'>
                <div className='my-10'>
                    <h1 className='font-bold text-2xl'>Your Company Name</h1>
                    <p className='text-gray-500'>What would you like to give your company name? You can change it later anytime.</p>
                </div>

                <Label>Company Name</Label>
                <Input
                    type="text"
                    className="my-2"
                    placeholder="Google, Microsoft, etc."
                    value={companyName} // Add the value prop to make it controlled
                    onChange={(e) => setCompanyName(e.target.value)}
                />
                <div className='flex items-center gap-2 my-10'>
                    <Button variant="outline" onClick={() => navigate("/admin/companines")}>Cancel</Button>
                    <Button onClick={handleSubmit}>Continue</Button>
                </div>
            </div>
        </>
    );
};

export default CreateCompanies;
