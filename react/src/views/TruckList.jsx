import { PlusCircleIcon } from "@heroicons/react/24/outline";
import TButton from "../components/core/TButton";

function TruckList() {
    return (
        <>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Truck List</h1>
                </div>
                <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:px-8">
                    <TButton color="green" to="/truck/create">
                        <PlusCircleIcon className="h-6 w-6 mr-2" />
                        Create new
                    </TButton>
                </div>
            </header>

            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

                </div>
            </main>
        </>
    )
}

export default TruckList