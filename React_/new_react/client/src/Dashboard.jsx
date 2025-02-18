import { useState } from "react";
import Sidebar from "./components/Sidebar";
import PatientsView from "./components/patients/PatientsView";
import MedicalDataManager from "./components/medical/MedicalDataManager";
import InvoicePage from "./components/invoices/InvoicePage";
import MedicineInventory from "./components/MedicineInventory";
import {
    Users,
    DollarSign,
    CalendarDays,
    Activity,
    TrendingUp,
} from "lucide-react";

const Dashboard = () => {
    const [currentView, setCurrentView] = useState("dashboard");

    const stats = [
        {
            title: "Patients Visited Today",
            value: "24",
            icon: Users,
            trend: "+20% from yesterday",
        },
        {
            title: "Amount Collected Today",
            value: "$2,350",
            icon: DollarSign,
            trend: "+15% from yesterday",
        },
        {
            title: "Patients This Month",
            value: "487",
            icon: CalendarDays,
            trend: "+8.1% from last month",
        },
        {
            title: "Active Treatments",
            value: "154",
            icon: Activity,
            trend: "+2.5% from last week",
        },
    ];

    const commonProblems = [
        { problem: "Hypertension", count: 78 },
        { problem: "Diabetes", count: 65 },
        { problem: "Respiratory Infections", count: 52 },
        { problem: "Arthritis", count: 45 },
        { problem: "Anxiety Disorders", count: 39 },
    ];

    const renderContent = () => {
        switch (currentView) {
            case "patients":
                return <PatientsView />;
            case "medicalData":
                return <MedicalDataManager />;
            case "invoices":
                return <InvoicePage />;
            case "medicine":
                return <MedicineInventory />;
            default:
                return (
                    <div className="space-y-6">
                        <h1 className="text-2xl font-bold text-gray-800 mb-6">
                            Dashboard Overview
                        </h1>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat) => (
                                <div
                                    key={stat.title}
                                    className="bg-white rounded-lg shadow p-6"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-sm font-medium text-gray-500">
                                            {stat.title}
                                        </h3>
                                        <stat.icon className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <div className="text-2xl font-bold">
                                        {stat.value}
                                    </div>
                                    <p className="text-xs text-green-500">
                                        {stat.trend}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                Common Problems This Month
                            </h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Problem
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Patient Count
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Trend
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {commonProblems.map((item, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {item.problem}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {item.count}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    <span className="flex items-center text-green-500">
                                                        <TrendingUp className="h-4 w-4 mr-1" />
                                                        {Math.floor(
                                                            Math.random() * 10
                                                        ) + 1}
                                                        %
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar onNavigate={setCurrentView} />
            <div className="flex-1 overflow-auto">
                <div className="p-8">{renderContent()}</div>
            </div>
        </div>
    );
};

export default Dashboard;
