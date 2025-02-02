import { useState } from "react";
import Sidebar from "./components/Sidebar";
import PatientsView from "./components/patients/PatientsView";
import MedicalDataManager from "./components/medical/MedicalDataManager";
import InvoicePage from "./components/invoices/InvoicePage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
                                <Card key={stat.title}>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            {stat.title}
                                        </CardTitle>
                                        <stat.icon className="h-4 w-4 text-muted-foreground" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">
                                            {stat.value}
                                        </div>
                                        <p className="text-xs text-green-500">
                                            {stat.trend} from last month
                                        </p>
                                    </CardContent>
                                </Card>
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
