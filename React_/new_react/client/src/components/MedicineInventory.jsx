import { useState } from "react";
import { Plus, Search, Edit, Trash2 } from "lucide-react";

const MedicineInventory = () => {
    const [medicines, setMedicines] = useState([
        {
            id: 1,
            name: "Aspirin",
            category: "Pain Relief",
            stock: 100,
            unit: "tablets",
        },
        {
            id: 2,
            name: "Amoxicillin",
            category: "Antibiotics",
            stock: 50,
            unit: "capsules",
        },
        {
            id: 3,
            name: "Lisinopril",
            category: "Blood Pressure",
            stock: 75,
            unit: "tablets",
        },
    ]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleAddMedicine = () => {
        // Implement add medicine functionality
        console.log("Add medicine");
    };

    const handleEditMedicine = (id) => {
        // Implement edit medicine functionality
        console.log("Edit medicine", id);
    };

    const handleDeleteMedicine = (id) => {
        // Implement delete medicine functionality
        console.log("Delete medicine", id);
    };

    const filteredMedicines = medicines.filter((medicine) =>
        medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                    Medicine Inventory
                </h2>
                <button
                    onClick={handleAddMedicine}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
                >
                    <Plus className="w-5 h-5 mr-2" />
                    Add Medicine
                </button>
            </div>

            <div className="mb-4 relative">
                <input
                    type="text"
                    placeholder="Search medicines..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 pl-10 border rounded-md"
                />
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="py-2 px-4 text-left">Name</th>
                            <th className="py-2 px-4 text-left">Category</th>
                            <th className="py-2 px-4 text-left">Stock</th>
                            <th className="py-2 px-4 text-left">Unit</th>
                            <th className="py-2 px-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredMedicines.map((medicine) => (
                            <tr key={medicine.id} className="border-b">
                                <td className="py-2 px-4">{medicine.name}</td>
                                <td className="py-2 px-4">
                                    {medicine.category}
                                </td>
                                <td className="py-2 px-4">{medicine.stock}</td>
                                <td className="py-2 px-4">{medicine.unit}</td>
                                <td className="py-2 px-4">
                                    <button
                                        onClick={() =>
                                            handleEditMedicine(medicine.id)
                                        }
                                        className="text-blue-500 hover:text-blue-700 mr-2"
                                    >
                                        <Edit className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleDeleteMedicine(medicine.id)
                                        }
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MedicineInventory;
