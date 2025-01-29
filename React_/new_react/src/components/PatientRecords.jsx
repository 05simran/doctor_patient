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
        //     const response = await axios.get("http://localhost:5000/api/patients");
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
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
            <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Patient Records
                </h1>

                {patients.length === 0 ? (
                    <p className="text-center text-gray-500">
                        No patient records found.
                    </p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                            <thead className="bg-indigo-600 text-white">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-semibold">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold">
                                        Age
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold">
                                        Follow-up Date
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {patients.map((patient, index) => (
                                    <tr
                                        key={patient._id}
                                        className={
                                            index % 2 === 0
                                                ? "bg-gray-50"
                                                : "bg-white"
                                        }
                                    >
                                        <td className="px-6 py-4 text-gray-800">
                                            {patient.name}
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">
                                            {patient.age}
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">
                                            {patient.followUpDate || "N/A"}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <Link
                                                to={`/edit-patient/${patient._id}`}
                                                className="text-blue-600 hover:text-blue-800 mr-4"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    deletePatient(patient._id)
                                                }
                                                className="text-red-600 hover:text-red-800"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PatientRecords;
