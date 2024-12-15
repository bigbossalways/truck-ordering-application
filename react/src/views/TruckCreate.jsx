import React, { useState } from 'react'
import TButton from "../components/core/TButton";

function TruckCreate() {
    const [truck, setTruck] = useState({
        title: '',
        description: '',
        location: '',
        size: '',
        weight: '',
    })

    const submitTruck = (ev) => {
        ev.preventDefault();
    }

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
                {/*Description*/}
                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Description
                    </label>
                    {/* <pre>{ JSON.stringify(truck, undefined, 2) }</pre> */}
                    <textarea
                        name="description"
                        id="description"
                        value={truck.description || ""}
                        onChange={(ev) =>
                            setTruck({ ...truck, description: ev.target.value })
                        }
                        placeholder="Describe your truck"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    ></textarea>
                </div>
                {/*Description*/}

                {/*Location*/}
                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="location"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Shipment Location
                    </label>
                    <input
                        type="text"
                        name="location"
                        id="location"
                        value={truck.location}
                        onChange={(ev) =>
                            setTruck({ ...truck, location: ev.target.value })
                        }
                        placeholder="Shipment Location"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                {/*Location*/}

                {/*Size*/}
                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="size"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Shipment Size
                    </label>
                    <input
                        type="number"
                        name="size"
                        id="size"
                        value={truck.size}
                        onChange={(ev) =>
                            setTruck({ ...truck, size: ev.target.value })
                        }
                        placeholder="Shipment Size"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                {/*Size*/}

                {/*Weight*/}
                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="weight"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Shipment Weight
                    </label>
                    <input
                        type="text"
                        name="weight"
                        id="weight"
                        value={truck.weight}
                        onChange={(ev) =>
                            setTruck({ ...truck, weight: ev.target.value })
                        }
                        placeholder="Shipment Weight"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                {/*Weight*/}

                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <TButton>Save</TButton>
                </div>
            </form>
        </div>
    )
}

export default TruckCreate