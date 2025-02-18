"use client";

import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

const InvoiceGenerator = ({ onSubmit }) => {
    const [invoice, setInvoice] = useState({
        invoiceNumber: "",
        patientName: "",
        date: format(new Date(), "yyyy-MM-dd"),
        amount: "",
        status: "Pending",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInvoice((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(invoice);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label
                    htmlFor="invoiceNumber"
                    className="block text-sm font-medium text-gray-700"
                >
                    Invoice Number
                </label>
                <input
                    id="invoiceNumber"
                    name="invoiceNumber"
                    type="text"
                    value={invoice.invoiceNumber}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                />
            </div>
            <div>
                <label
                    htmlFor="patientName"
                    className="block text-sm font-medium text-gray-700"
                >
                    Patient Name
                </label>
                <input
                    id="patientName"
                    name="patientName"
                    type="text"
                    value={invoice.patientName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                />
            </div>
            <div>
                <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700"
                >
                    Date
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <CalendarIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        id="date"
                        name="date"
                        type="date"
                        value={invoice.date}
                        onChange={handleInputChange}
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                        required
                    />
                </div>
            </div>
            <div>
                <label
                    htmlFor="amount"
                    className="block text-sm font-medium text-gray-700"
                >
                    Amount
                </label>
                <input
                    id="amount"
                    name="amount"
                    type="number"
                    step="0.01"
                    value={invoice.amount}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                />
            </div>
            <div>
                <label
                    htmlFor="status"
                    className="block text-sm font-medium text-gray-700"
                >
                    Status
                </label>
                <select
                    id="status"
                    name="status"
                    value={invoice.status}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                >
                    <option value="Pending">Pending</option>
                    <option value="Paid">Paid</option>
                    <option value="Overdue">Overdue</option>
                </select>
            </div>
            <div className="mt-6">
                <button
                    type="submit"
                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Generate Invoice
                </button>
            </div>
        </form>
    );
};

export default InvoiceGenerator;
