import { ADMIN_API_END_POINT } from '@/utlis/constants';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useGetAllEmployer = () => {
    const [empusers, setEmpUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const fetchUsers = async () => {
            try {
                const res = await axios.get(`${ADMIN_API_END_POINT}/getAllEmployerUsers`,
                    { withCredentials: true }
                )
                // console.log(res.data.data)
                setEmpUsers(res.data.data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchUsers();
    }, [])


    return { empusers }
}

export default useGetAllEmployer
