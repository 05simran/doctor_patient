import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

const PatientRecords = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetchPatients();
    }, []);

    const fetchPatients = async () => {
        // try {
        //     const response = await axios.get(
        //         "http://localhost:5000/api/patients"
        //     );
        //     setPatients(response.data);
        // } catch (error) {
        //     console.error("Error fetching patients:", error);
        // }
    };

    const deletePatient = async (id) => {
        // if (window.confirm("Are you sure you want to delete this patient?")) {
        //     try {
        //         await axios.delete(`http://localhost:5000/api/patients/${id}`);
        //         setPatients(patients.filter((patient) => patient._id !== id));
        //     } catch (error) {
        //         console.error("Error deleting patient:", error);
        //     }
        // }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Patient Records
                    </h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Age
                                        </th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Follow-up Date
                                        </th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {patients.map((patient) => (
                                        <tr key={patient._id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {patient.name}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">
                                                    {patient.age}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">
                                                    {patient.followUpDate ||
                                                        "N/A"}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <Link
                                                    to={`/edit-patient/${patient._id}`}
                                                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() =>
                                                        deletePatient(
                                                            patient._id
                                                        )
                                                    }
                                                    className="text-red-600 hover:text-red-900"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PatientRecords;
