import { setAllCompanies } from '@/features/companySlice';
import { COMPANY_API_END_POINT } from '@/utlis/constants';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

const useGetAllCompanies = () => {

    const [companies, setCompanies] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {

        const fetchCompanies = async () => {

            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/getCompany `,
                    {
                        withCredentials: true
                    }
                )
                // console.log(res.data.data);

                if(res.data.success){
                    setCompanies(res.data.data)
                    dispatch(setAllCompanies(res.data.data))
                    // toast.success(res.data.success)
                }

            } catch (error) {

            }
        }
        fetchCompanies();
    }, [])


}

export default useGetAllCompanies
