import { Link } from "react-router-dom";
import { FaUserPlus, FaUsers } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
            <div className="w-full max-w-6xl bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
                    Dashboard
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* View Patients Card */}
                    <Link
                        to="/patients"
                        className="group block bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-lg shadow-md transform transition hover:scale-105"
                    >
                        <div className="flex items-center space-x-4">
                            <FaUsers className="text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">
                                    View Patients
                                </h2>
                                <p className="text-sm text-gray-200">
                                    See all registered patients.
                                </p>
                            </div>
                        </div>
                    </Link>

                    {/* New Patient Card */}
                    <Link
                        to="/new-patient"
                        className="group block bg-green-500 hover:bg-green-600 text-white p-6 rounded-lg shadow-md transform transition hover:scale-105"
                    >
                        <div className="flex items-center space-x-4">
                            <FaUserPlus className="text-4xl" />
                            <div>
                                <h2 className="text-xl font-semibold">
                                    New Patient
                                </h2>
                                <p className="text-sm text-gray-200">
                                    Register a new patient.
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
