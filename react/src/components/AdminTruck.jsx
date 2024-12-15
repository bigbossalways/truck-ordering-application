import React, { useEffect, useState } from 'react'
import axiosClient from "../axios";
import { Link, Links } from "react-router-dom";

import { UseStateContext } from '../context/ContextProvider';

function AdminTruck() {
    const { currentUser, userToken, setCurrentUser, setUserToken } = UseStateContext();
    const [trucks, setTrucks] = useState([])

    if (!userToken) {
        return <Navigate to='login' />
    }
    if (!currentUser.is_admin == true) {
        return <Navigate to='/dashbaord' />
    }
    useEffect(() => {
        getTrucks();
    }, []);

    const getTrucks = () => {
        setLoading(true)
        axiosClient.get('/trucks')
            .then(({ data }) => {
                setTrucks(data.data)
            })
            .catch(() => {
                console.log(error);
            })
    }

    return (
        <div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Location
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Weight
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Created At
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {trucks.map(truck => (<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {truck.title}
                        </th>
                        <td className="px-6 py-4">
                            {truck.location}
                        </td>
                        <td className="px-6 py-4">
                            {truck.weight}
                        </td>
                        <td className="px-6 py-4">
                            {truck.created_at}
                        </td>

                        <td className="px-6 py-4">
                            <Link href={route('truck.edit', truck.id)} className="text-blue-500">
                                Edit
                            </Link>
                        </td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminTruck