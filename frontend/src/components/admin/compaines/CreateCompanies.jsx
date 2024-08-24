import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import axios from 'axios';
import { COMPANY_API_END_POINT } from '@/utlis/constants';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
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
                { companyName },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                });

            if (res.data.success) {
                dispatch(setSingleCompany(res.data.data));
                toast.success(res.data.message);
                const companyId = res.data.data._id;
                navigate(`/admin/companines/${companyId}`);
            }
        } catch (error) {
            console.log(error);
            if (error.response && error.response.status === 401) {
                toast.error("Company Name is Required.");
            } else if (error.response && error.response.status === 409) {
                toast.error("Company already Registered.");
            }
        }
    };

    return (
        <>
            <div className='min-h-[90vh] flex items-center justify-center bg-gray-100'>
                <div className='bg-white shadow-lg rounded-lg p-8 w-full max-w-lg'>
                    <div className='mb-8 text-center'>
                        <h1 className='font-bold text-3xl text-gray-800 mb-2'>Your Company Name</h1>
                        <p className='text-gray-500'>What would you like to name your company? You can change it later anytime.</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <Label className='block text-gray-700 font-semibold'>Company Name</Label>
                        <Input
                            type="text"
                            className="mt-2 mb-6 p-3 border border-gray-300 rounded-lg w-full focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Google, Microsoft, etc."
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                        <div className='flex justify-between items-center'>
                            <Button
                                variant="outline"
                                onClick={() => navigate("/admin/companines")}
                                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-200 text-gray-600"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                className="px-4 py-2 bg-[#159788] text-white rounded-lg "
                            >
                                Continue
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateCompanies;
