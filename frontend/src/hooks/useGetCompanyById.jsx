
import { setSingleCompany } from '@/features/companySlice';
import { COMPANY_API_END_POINT } from '@/utlis/constants';
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetCompanyById = (companyId) => {
    const dispatch = useDispatch();
    useEffect(() => {
        // console.log('companyId:', companyId);
        // console.log('dispatch:', dispatch);
        const fetchSingleCompany = async () => {
            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/getCompanyById/${companyId}`, { withCredentials: true });
                // console.log(res.data.data);
                if (res.data.success) {
                    dispatch(setSingleCompany(res.data.data));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleCompany();
    }, [companyId, dispatch])
}

export default useGetCompanyById