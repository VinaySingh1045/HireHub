import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import ApplicantTable from './ApplicantTable'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { APPLICATION_API_END_POINT } from '@/utlis/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setAllApplicants } from '@/features/applicantSlice';
import { ArrowLeft } from 'lucide-react';

const GetApplicants = () => {

    const { AllApplicants } = useSelector(state => state.applicant)
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // Fetch applicants from API
    useEffect(() => {
        const fetchApplicants = async () => {
            try {
                const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/getApplicant`, {
                    withCredentials: true,
                })
                console.log(res.data.data)
                if (res.data.success) {
                    dispatch(setAllApplicants(res.data.data))
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchApplicants();
    }, [])

    return (
        <>
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
                    <h1 className='font-bold text-xl my-5'>Applicants {AllApplicants?.application.length}</h1>
                    <ApplicantTable />


                    <Button onClick={() => navigate("/admin/jobs")} variant="outline" className="w-full flex justify-center items-center gap-2 text-gray-500 font-semibold border border-gray-300 hover:bg-gray-100">
                        <ArrowLeft />
                        <span>Back</span>
                    </Button>
                </div>
                {/*  {applicants?.applications?.length} */}
            </div>
        </>
    )
}

export default GetApplicants
