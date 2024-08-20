import React, { useEffect, useState } from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { JOB_API_END_POINT } from '@/utlis/constants';
import { setSingleJob } from '@/features/jobSlice';

const JobsDescription = () => {
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const jobId = params.id;
    const { singleJob } = useSelector((state) => state.job);
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const isApplied = singleJob?.application?.some(application => application.applicant === user?._id) || false;

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/getJobById/${jobId}`, {
                    withCredentials: true,
                });
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.data));
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchSingleJob();
    }, [jobId, dispatch, user?._id]);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    return (
        <>
            <div className="max-w-7xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
                {singleJob ? (
                    <>
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">{singleJob.title}</h1>
                                <div className="flex items-center gap-4 mt-3">
                                    <Badge className="text-blue-700 font-semibold bg-blue-100" variant="ghost">
                                        {singleJob.location}
                                    </Badge>
                                    <Badge className="text-red-700 font-semibold bg-red-100" variant="ghost">
                                        {singleJob.jobType}
                                    </Badge>
                                    <Badge className="text-purple-700 font-semibold bg-purple-100" variant="ghost">
                                        {singleJob.salary} LPA
                                    </Badge>
                                </div>
                            </div>
                            <Button
                                disabled={isApplied}
                                className={`px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ${isApplied ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#159788] hover:bg-[#0f172ae6]'
                                    }`}
                            >
                                {isApplied ? 'Already Applied' : 'Apply Now'}
                            </Button>
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
                            {singleJob.description}
                        </h2>
                        <div className="text-lg text-gray-700 space-y-3">
                            <p>
                                <span className="font-bold text-gray-900">Role:</span>
                                <span className="pl-4">{singleJob.title}</span>
                            </p>
                            <p>
                                <span className="font-bold text-gray-900">Location:</span>
                                <span className="pl-4">{singleJob.location}</span>
                            </p>
                            <p>
                                <span className="font-bold text-gray-900">Description:</span>
                                <span className="pl-4">{singleJob.description}</span>
                            </p>
                            <p>
                                <span className="font-bold text-gray-900">Experience:</span>
                                <span className="pl-4">{singleJob.experienceLevel} years</span>
                            </p>
                            <p>
                                <span className="font-bold text-gray-900">Salary:</span>
                                <span className="pl-4">{singleJob.salary} LPA</span>
                            </p>
                            <p>
                                <span className="font-bold text-gray-900">Total Applicants:</span>
                                <span className="pl-4">{singleJob.application?.length || 0}</span>
                            </p>
                            <p>
                                <span className="font-bold text-gray-900">Posted Date:</span>
                                <span className="pl-4">{singleJob.createdAt?.split("T")[0]}</span>
                            </p>
                        </div>
                    </>
                ) : (
                    <div className="text-center text-gray-500">Job not found</div>
                )}

                <Link to={"/jobs"}>
                    <Button className="mt-4 bg-[#159788]">Back to Jobs</Button>
                </Link>

            </div>
        </>
    );
};

export default JobsDescription;
