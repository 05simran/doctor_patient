import { useState } from "react";
import { UserPlus, Search, Filter, MoreVertical } from "lucide-react";
import AddEditPatientForm from "../patients/AddEditPatientForm";
import ViewPatientModal from "../patients/AddEditPatientForm";
import InvoiceGenerator from "../invoices/InvoiceGenerator";

const PatientsView = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [showAddEditForm, setShowAddEditForm] = useState(false);
    const [editingPatient, setEditingPatient] = useState(null);
    const [viewingPatient, setViewingPatient] = useState(null);
    const [deletingPatient, setDeletingPatient] = useState(null);
    const [patients, setPatients] = useState([
        {
            id: 1,
            name: "Sarah Johnson",
            age: 45,
            gender: "Female",
            phone: "+1 234-567-8900",
            condition: "Hypertension",
            lastVisit: "2023-05-15",
            status: "Active",
            email: "sarah.j@example.com",
            areaOfConcern: "Cardiovascular",
            symptoms: "Headaches, dizziness",
            problem: "High blood pressure",
            recommendedMedicine: "Lisinopril",
        },
        {
            id: 2,
            name: "Michael Chen",
            age: 32,
            gender: "Male",
            phone: "+1 234-567-8901",
            condition: "Diabetes Type 2",
            lastVisit: "2023-05-14",
            status: "Scheduled",
            email: "m.chen@example.com",
            areaOfConcern: "Endocrine",
            symptoms: "Increased thirst, frequent urination",
            problem: "Elevated blood sugar levels",
            recommendedMedicine: "Metformin",
        },
        {
            id: 3,
            name: "Emily Davis",
            age: 28,
            gender: "Female",
            phone: "+1 234-567-8902",
            condition: "Pregnancy",
            lastVisit: "2023-05-10",
            status: "Active",
            email: "e.davis@example.com",
            areaOfConcern: "Obstetrics",
            symptoms: "Morning sickness, fatigue",
            problem: "First trimester pregnancy",
            recommendedMedicine: "Prenatal vitamins",
        },
    ]);

    const [showInvoice, setShowInvoice] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState(null);

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case "active":
                return "bg-green-100 text-green-700";
            case "scheduled":
                return "bg-blue-100 text-blue-700";
            case "inactive":
                return "bg-gray-100 text-gray-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    const handleAddEditPatient = (patientData) => {
        if (editingPatient) {
            setPatients((prev) =>
                prev.map((p) =>
                    p.id === editingPatient.id
                        ? { ...patientData, id: p.id }
                        : p
                )
            );
        } else {
            setPatients((prev) => [
                ...prev,
                { ...patientData, id: prev.length + 1, status: "Active" },
            ]);
        }
        setShowAddEditForm(false);
        setEditingPatient(null);
    };

    const handleDeletePatient = () => {
        setPatients((prev) => prev.filter((p) => p.id !== deletingPatient.id));
        setDeletingPatient(null);
    };

    return (
        <div className="space-y-4 p-8">
            {showAddEditForm ? (
                <AddEditPatientForm
                    patient={editingPatient}
                    onSubmit={handleAddEditPatient}
                    onCancel={() => {
                        setShowAddEditForm(false);
                        setEditingPatient(null);
                    }}
                />
            ) : showInvoice ? (
                <InvoiceGenerator patient={selectedPatient} />
            ) : (
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="mb-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold">Patients</h2>
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                onClick={() => setShowAddEditForm(true)}
                            >
                                <UserPlus className="h-5 w-5" />
                                Add New Patient
                            </button>
                        </div>
                    </div>
                    <div>
                        {/* Search and Filter Bar */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-6">
                            <div className="relative flex-1">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                                <input
                                    placeholder="Search patients..."
                                    className="pl-8 w-full px-3 py-2 border rounded"
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                />
                            </div>
                            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
                                <Filter className="h-4 w-4" />
                                Filter
                            </button>
                        </div>

                        {/* Patients Table */}
                        <div className="rounded-md border">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="text-left py-2">Name</th>
                                        <th className="text-left py-2">Age</th>
                                        <th className="text-left py-2">
                                            Gender
                                        </th>
                                        <th className="text-left py-2 hidden md:table-cell">
                                            Phone
                                        </th>
                                        <th className="text-left py-2 hidden lg:table-cell">
                                            Condition
                                        </th>
                                        <th className="text-left py-2">
                                            Status
                                        </th>
                                        <th className="text-left py-2 w-[50px]"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {patients.map((patient) => (
                                        <tr key={patient.id}>
                                            <td className="py-2">
                                                <div>
                                                    <div className="font-medium">
                                                        {patient.name}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {patient.email}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-2">
                                                {patient.age}
                                            </td>
                                            <td className="py-2">
                                                {patient.gender}
                                            </td>
                                            <td className="py-2 hidden md:table-cell">
                                                {patient.phone}
                                            </td>
                                            <td className="py-2 hidden lg:table-cell">
                                                {patient.condition}
                                            </td>
                                            <td className="py-2">
                                                <span
                                                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(
                                                        patient.status
                                                    )}`}
                                                >
                                                    {patient.status}
                                                </span>
                                            </td>
                                            <td className="py-2">
                                                <button className="h-8 w-8 p-0">
                                                    <MoreVertical className="h-4 w-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {/* View Patient Modal */}
            {viewingPatient && (
                <ViewPatientModal
                    patient={viewingPatient}
                    isOpen={!!viewingPatient}
                    onClose={() => setViewingPatient(null)}
                />
            )}

            {/* Delete Patient Confirmation */}
            {deletingPatient && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-md p-6 w-96">
                        <h2 className="text-lg font-bold mb-2">
                            Are you sure?
                        </h2>
                        <p className="text-gray-600 mb-4">
                            This action cannot be undone. This will permanently
                            delete the patient record of {deletingPatient?.name}
                            .
                        </p>
                        <div className="flex justify-end">
                            <button
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded mr-2"
                                onClick={() => setDeletingPatient(null)}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-red-500 text-white rounded"
                                onClick={handleDeletePatient}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {showInvoice && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl">
                        <div className="mb-4">
                            <h2 className="text-lg font-bold">
                                Generate Invoice
                            </h2>
                            <p className="text-gray-600">
                                Generate an invoice for {selectedPatient?.name}
                            </p>
                        </div>
                        <InvoiceGenerator patient={selectedPatient} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PatientsView;
