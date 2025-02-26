"use client";

import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

const InvoiceGenerator = ({ patient }) => {
    const [invoice, setInvoice] = useState({
        patientName: patient?.name || "",
        medicine: "",
        amount: "",
        daysToTake: "",
        nextFollowUp: new Date(),
    });

    const [generatedInvoice, setGeneratedInvoice] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInvoice((prev) => ({ ...prev, [name]: value }));
    };

    const handleDateChange = (e) => {
        setInvoice((prev) => ({
            ...prev,
            nextFollowUp: new Date(e.target.value),
        }));
    };

    const generateInvoice = () => {
        const newInvoice = {
            ...invoice,
            invoiceNumber: Math.floor(100000 + Math.random() * 900000),
            date: new Date().toLocaleDateString(),
        };
        setGeneratedInvoice(newInvoice);
    };

    return (
        <div className="space-y-8">
            <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Generate Invoice</h2>
                <div className="space-y-4">
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
                            htmlFor="medicine"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Prescribed Medicine
                        </label>
                        <input
                            id="medicine"
                            name="medicine"
                            type="text"
                            value={invoice.medicine}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required
                        />
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
                            value={invoice.amount}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="daysToTake"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Days to Take Medicine
                        </label>
                        <input
                            id="daysToTake"
                            name="daysToTake"
                            type="number"
                            value={invoice.daysToTake}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="nextFollowUp"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Next Follow-up Date
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <CalendarIcon className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                id="nextFollowUp"
                                name="nextFollowUp"
                                type="date"
                                value={format(
                                    invoice.nextFollowUp,
                                    "yyyy-MM-dd"
                                )}
                                onChange={handleDateChange}
                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <button
                        onClick={generateInvoice}
                        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Generate Invoice
                    </button>
                </div>
            </div>

            {generatedInvoice && (
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-2xl font-bold mb-6">
                        Generated Invoice
                    </h2>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Invoice Detail
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Value
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    Invoice Number
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {generatedInvoice.invoiceNumber}
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    Date
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {generatedInvoice.date}
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    Patient Name
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {generatedInvoice.patientName}
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    Prescribed Medicine
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {generatedInvoice.medicine}
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    Amount
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    ${generatedInvoice.amount}
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    Days to Take Medicine
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {generatedInvoice.daysToTake} days
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    Next Follow-up Date
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {format(
                                        generatedInvoice.nextFollowUp,
                                        "PPP"
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="mt-6">
                        <button
                            onClick={() => window.print()}
                            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Print Invoice
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InvoiceGenerator;
