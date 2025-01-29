import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const NewPatientEntry = () => {
    const [patient, setPatient] = useState({
        name: "",
        dateOfBirth: "",
        age: "",
        gender: "",
        contactNumber: "",
        medicalHistory: "",
        allergies: "",
        currentMedications: "",
        pastSurgeries: "",
        bloodGroup: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatient((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     await axios.post("http://localhost:5000/api/patients", patient);
        //     navigate("/patients");
        // } catch (error) {
        //     console.error("Error creating patient:", error);
        // }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        New Patient Entry
                    </h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6 bg-white p-6 rounded-lg shadow"
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={patient.name}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="dateOfBirth"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Date of Birth
                                </label>
                                <input
                                    type="date"
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    value={patient.dateOfBirth}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="age"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Age
                                </label>
                                <input
                                    type="number"
                                    id="age"
                                    name="age"
                                    value={patient.age}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="gender"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Gender
                                </label>
                                <select
                                    id="gender"
                                    name="gender"
                                    value={patient.gender}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option value="">Select gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label
                                    htmlFor="contactNumber"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Contact Number
                                </label>
                                <input
                                    type="tel"
                                    id="contactNumber"
                                    name="contactNumber"
                                    value={patient.contactNumber}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="medicalHistory"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Medical History
                                </label>
                                <textarea
                                    id="medicalHistory"
                                    name="medicalHistory"
                                    value={patient.medicalHistory}
                                    onChange={handleChange}
                                    rows={3}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                ></textarea>
                            </div>
                            <div>
                                <label
                                    htmlFor="allergies"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Allergies
                                </label>
                                <input
                                    type="text"
                                    id="allergies"
                                    name="allergies"
                                    value={patient.allergies}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="currentMedications"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Current Medications
                                </label>
                                <textarea
                                    id="currentMedications"
                                    name="currentMedications"
                                    value={patient.currentMedications}
                                    onChange={handleChange}
                                    rows={3}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                ></textarea>
                            </div>
                            <div>
                                <label
                                    htmlFor="pastSurgeries"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Past Surgeries/Procedures
                                </label>
                                <textarea
                                    id="pastSurgeries"
                                    name="pastSurgeries"
                                    value={patient.pastSurgeries}
                                    onChange={handleChange}
                                    rows={3}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                ></textarea>
                            </div>
                            <div>
                                <label
                                    htmlFor="bloodGroup"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Blood Group
                                </label>
                                <input
                                    type="text"
                                    id="bloodGroup"
                                    name="bloodGroup"
                                    value={patient.bloodGroup}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Create Patient
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default NewPatientEntry;
