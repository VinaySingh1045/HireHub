import { ADMIN_API_END_POINT } from '@/utlis/constants';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useGetAllUsers = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const fetchUsers = async () => {
            try {
                const res = await axios.get(`${ADMIN_API_END_POINT}/getAllUsers`,
                    { withCredentials: true }
                )
                // console.log(res.data.data)
                setUsers(res.data.data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchUsers();
    }, [])


    return { users }
}

export default useGetAllUsers
