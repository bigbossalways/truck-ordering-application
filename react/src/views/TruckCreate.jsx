import React, { useState } from 'react'

function TruckCreate() {
    const [truck, setTruck] = useState({
        title: '',
        description: '',
        location: '',
        size: '',
        weight: '',
    })
    const submitTruck = (ev) => { }

    return (
        <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:px-8">
            <form action='#' method="post" onSubmit={submitTruck}>
                {/*Title*/}
                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Shipment Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={truck.title}
                        onChange={(ev) =>
                            setTruck({ ...truck, title: ev.target.value })
                        }
                        placeholder="Shipment Title"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                {/*Title*/}
            </form>
        </div>
    )
}

export default TruckCreate