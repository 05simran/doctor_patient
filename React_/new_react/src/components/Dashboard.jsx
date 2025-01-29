import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Dashboard
                    </h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                            <div className="flex flex-col items-center justify-center h-full">
                                <h2 className="text-2xl font-semibold mb-4">
                                    Quick Actions
                                </h2>
                                <div className="space-x-4">
                                    <Link
                                        to="/patients"
                                        className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        View Patients
                                    </Link>
                                    <Link
                                        to="/new-patient"
                                        className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        New Patient
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
