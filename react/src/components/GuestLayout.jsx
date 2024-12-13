import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UseStateContext } from '../context/ContextProvider';

function GuestLayout() {
    const { currentUser, userToken } = UseStateContext();

    if (userToken) {
        return <Navigate to='/' />
    }
    return (
        <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
             

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <Outlet />

                  
                </div>
            </div>
        </div>
    )
}

export default GuestLayout