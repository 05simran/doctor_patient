import { useState } from "react";
import Sidebar from "./components/Sidebar";
import PatientsView from "./components/patients/PatientsView";
import MedicalDataManager from "./components/medical/MedicalDataManager";
import InvoicePage from "./components/invoices/InvoicePage";
import { Users, PillIcon as Pills, CalendarDays, Activity } from "lucide-react";

const Dashboard = () => {
    const [currentView, setCurrentView] = useState("dashboard");

    const stats = [
        {
            title: "Total Patients",
            value: "2,350",
            icon: Users,
            trend: "+12.5%",
        },
        {
            title: "Available Medicines",
            value: "1,250",
            icon: Pills,
            trend: "+5.2%",
        },
        {
            title: "Appointments",
            value: "48",
            icon: CalendarDays,
            trend: "+8.1%",
        },
        {
            title: "Active Treatments",
            value: "154",
            icon: Activity,
            trend: "+2.5%",
        },
    ];

    const renderContent = () => {
        switch (currentView) {
            case "patients":
                return <PatientsView />;
            case "medicalData":
                return <MedicalDataManager />;
            case "invoices":
                return <InvoicePage />;
            default:
                return (
                    <div className="space-y-6">
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
                                        {stat.trend} from last month
                                    </p>
                                </div>
                            ))}
                        </div>
                        {/* Add more dashboard content here */}
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
