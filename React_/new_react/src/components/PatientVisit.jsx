import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PatientVisit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [symptoms, setSymptoms] = useState("");
    const [diagnosis, setDiagnosis] = useState("");
    const [prescription, setPrescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement actual visit record creation logic here
        console.log("New visit record:", {
            patientId: id,
            symptoms,
            diagnosis,
            prescription,
        });
        navigate("/patients");
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Patient Visit
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
                                    htmlFor="symptoms"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Symptoms
                                </label>
                                <textarea
                                    id="symptoms"
                                    value={symptoms}
                                    onChange={(e) =>
                                        setSymptoms(e.target.value)
                                    }
                                    required
                                    rows={3}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                ></textarea>
                            </div>
                            <div>
                                <label
                                    htmlFor="diagnosis"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Diagnosis
                                </label>
                                <textarea
                                    id="diagnosis"
                                    value={diagnosis}
                                    onChange={(e) =>
                                        setDiagnosis(e.target.value)
                                    }
                                    required
                                    rows={3}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                ></textarea>
                            </div>
                            <div>
                                <label
                                    htmlFor="prescription"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Prescription
                                </label>
                                <textarea
                                    id="prescription"
                                    value={prescription}
                                    onChange={(e) =>
                                        setPrescription(e.target.value)
                                    }
                                    required
                                    rows={3}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Save Visit Record
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PatientVisit;
