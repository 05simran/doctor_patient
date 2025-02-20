import { useState, useEffect } from "react";

const AddEditPatientForm = ({ patient, onSubmit, onCancel }) => {
    const [patientData, setPatientData] = useState(
        patient || {
            name: "",
            age: "",
            gender: "",
            phone: "",
            problem: "",
            medicines: [],
            symptoms: [],
            otherNotes: "",
        }
    );

    const [medicalData, setMedicalData] = useState([]);

    useEffect(() => {
        // Simulated medical data (replace with API call if needed)
        setMedicalData([
            {
                id: 1,
                problem: "Hypertension",
                medicines: ["Lisinopril", "Amlodipine"],
                symptoms: ["Headache", "Dizziness", "Shortness of breath"],
            },
            {
                id: 2,
                problem: "Diabetes Type 2",
                medicines: ["Metformin", "Gliclazide"],
                symptoms: ["Increased thirst", "Frequent urination", "Fatigue"],
            },
            {
                id: 3,
                problem: "Asthma",
                medicines: ["Albuterol", "Fluticasone"],
                symptoms: ["Wheezing", "Coughing", "Chest tightness"],
            },
        ]);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPatientData((prev) => ({ ...prev, [name]: value }));

        if (name === "problem") {
            const selectedProblem = medicalData.find(
                (item) => item.problem === value
            );
            if (selectedProblem) {
                setPatientData((prev) => ({
                    ...prev,
                    medicines: selectedProblem.medicines,
                    symptoms: selectedProblem.symptoms,
                }));
            } else {
                setPatientData((prev) => ({
                    ...prev,
                    medicines: [],
                    symptoms: [],
                }));
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = patient
                ? `http://localhost:5000/api/patients/${patient.id}`
                : "http://localhost:5000/api/patients";
            const method = patient ? "PUT" : "POST";

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(patientData),
            });

            if (!response.ok) {
                throw new Error("Failed to save patient");
            }

            const data = await response.json();
            onSubmit(data);
        } catch (error) {
            console.error("Error saving patient:", error);
        }
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                {patient ? "Edit Patient" : "Add New Patient"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={patientData.name}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="age"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Age
                        </label>
                        <input
                            id="age"
                            name="age"
                            type="number"
                            value={patientData.age}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label
                            htmlFor="gender"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Gender
                        </label>
                        <select
                            id="gender"
                            name="gender"
                            value={patientData.gender}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        >
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Phone
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={patientData.phone}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="problem"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Problem
                    </label>
                    <select
                        id="problem"
                        name="problem"
                        value={patientData.problem}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                        <option value="">Select problem</option>
                        {medicalData.map((item) => (
                            <option key={item.id} value={item.problem}>
                                {item.problem}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="medicines"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Medicines
                    </label>
                    <div className="mt-1 p-3 bg-gray-50 border border-gray-300 rounded-md min-h-[60px]">
                        {patientData.medicines.length > 0 ? (
                            patientData.medicines.map((medicine, index) => (
                                <span
                                    key={index}
                                    className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm mr-2 mb-2"
                                >
                                    {medicine}
                                </span>
                            ))
                        ) : (
                            <span className="text-gray-500">
                                No medicines selected
                            </span>
                        )}
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="symptoms"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Symptoms
                    </label>
                    <div className="mt-1 p-3 bg-gray-50 border border-gray-300 rounded-md min-h-[60px]">
                        {patientData.symptoms.length > 0 ? (
                            patientData.symptoms.map((symptom, index) => (
                                <span
                                    key={index}
                                    className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm mr-2 mb-2"
                                >
                                    {symptom}
                                </span>
                            ))
                        ) : (
                            <span className="text-gray-500">
                                No symptoms selected
                            </span>
                        )}
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="otherNotes"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Other Notes
                    </label>
                    <textarea
                        id="otherNotes"
                        name="otherNotes"
                        value={patientData.otherNotes}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                </div>

                <div className="flex justify-end space-x-2">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        {patient ? "Update Patient" : "Add Patient"}
                    </button>
                </div>

            </form>
        </div>
    );
};

export default AddEditPatientForm;








