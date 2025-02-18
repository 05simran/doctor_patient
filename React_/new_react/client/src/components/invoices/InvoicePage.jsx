"use client";

import { useState } from "react";
import { Search, Plus, Printer, Eye, Edit } from "lucide-react";
import InvoiceGenerator from "./InvoiceGenerator";
import GeneratedInvoice from "./GeneratedInvoice";

// Mock data for invoices
const mockInvoices = [
    {
        id: 1,
        invoiceNumber: "INV-001",
        patientName: "John Doe",
        date: "2023-05-20",
        amount: 150.0,
        status: "Paid",
    },
    {
        id: 2,
        invoiceNumber: "INV-002",
        patientName: "Jane Smith",
        date: "2023-05-21",
        amount: 200.0,
        status: "Pending",
    },
    {
        id: 3,
        invoiceNumber: "INV-003",
        patientName: "Bob Johnson",
        date: "2023-05-22",
        amount: 175.0,
        status: "Overdue",
    },
];

const InvoicePage = () => {
    const [invoices, setInvoices] = useState(mockInvoices);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedInvoice, setSelectedInvoice] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [showInvoiceGenerator, setShowInvoiceGenerator] = useState(false);

    const filteredInvoices = invoices.filter(
        (invoice) =>
            invoice.patientName
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            invoice.invoiceNumber
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
    );

    const handleNewInvoice = (newInvoice) => {
        setInvoices([
            ...invoices,
            { ...newInvoice, id: invoices.length + 1, status: "Pending" },
        ]);
    };

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case "paid":
                return "bg-green-100 text-green-800";
            case "pending":
                return "bg-yellow-100 text-yellow-800";
            case "overdue":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    const handleView = (invoice) => {
        setSelectedInvoice(invoice);
        setIsEditing(false);
    };

    const handleEdit = (invoice) => {
        setSelectedInvoice(invoice);
        setIsEditing(true);
    };

    const handleCloseModal = () => {
        setSelectedInvoice(null);
        setIsEditing(false);
    };

    return (
        <div className="space-y-4 p-8">
            <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">Invoices</h2>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-600"
                        onClick={() => setShowInvoiceGenerator(true)}
                    >
                        <Plus className="h-4 w-4" />
                        New Invoice
                    </button>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search invoices..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border rounded-md"
                        />
                    </div>
                </div>
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="text-left">Invoice #</th>
                            <th className="text-left">Patient Name</th>
                            <th className="text-left">Date</th>
                            <th className="text-left">Amount</th>
                            <th className="text-left">Status</th>
                            <th className="text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredInvoices.map((invoice) => (
                            <tr key={invoice.id} className="border-t">
                                <td className="py-2 font-medium">
                                    {invoice.invoiceNumber}
                                </td>
                                <td className="py-2">{invoice.patientName}</td>
                                <td className="py-2">{invoice.date}</td>
                                <td className="py-2">
                                    ${invoice.amount.toFixed(2)}
                                </td>
                                <td className="py-2">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                                            invoice.status
                                        )}`}
                                    >
                                        {invoice.status}
                                    </span>
                                </td>
                                <td className="py-2 text-right">
                                    <button
                                        className="text-blue-600 hover:text-blue-800 mr-2"
                                        onClick={() => handleView(invoice)}
                                    >
                                        <Eye className="h-4 w-4 inline" />
                                    </button>
                                    <button
                                        className="text-yellow-600 hover:text-yellow-800 mr-2"
                                        onClick={() => handleEdit(invoice)}
                                    >
                                        <Edit className="h-4 w-4 inline" />
                                    </button>
                                    <button
                                        className="text-gray-600 hover:text-gray-800"
                                        onClick={() => handleView(invoice)}
                                    >
                                        <Printer className="h-4 w-4 inline" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedInvoice && (
                <GeneratedInvoice
                    invoice={selectedInvoice}
                    onClose={handleCloseModal}
                    isEditing={isEditing}
                />
            )}

            {showInvoiceGenerator && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto">
                        <h2 className="text-2xl font-bold mb-4">
                            Generate Invoice
                        </h2>
                        <InvoiceGenerator
                            onSubmit={(newInvoice) => {
                                handleNewInvoice(newInvoice);
                                setShowInvoiceGenerator(false);
                            }}
                        />
                        <button
                            onClick={() => setShowInvoiceGenerator(false)}
                            className="mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InvoicePage;
