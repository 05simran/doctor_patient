
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AddEditPatientForm from "./AddEditPatientForm";
import ViewPatientModal from "./ViewPatientModal";

const PatientsView = () => {
    const [patients, setPatients] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [editingPatient, setEditingPatient] = useState(null);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetchPatients();
    }, []);

    const fetchPatients = async () => {
        const response = await fetch("http://localhost:5000/api/patients");
        const data = await response.json();
        setPatients(data);
    };

    const handleAddEditPatient = async (patientData) => {
        const method = editingPatient ? "PUT" : "POST";
        const url = editingPatient ? `"http://localhost:5000/api/patients/${editingPatient._id}` : "http://localhost:5000/api/patients";
        await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(patientData),
        });
        fetchPatients();
        setShowForm(false);
        setEditingPatient(null);
    };

    const handleDeletePatient = async (id) => {
        await fetch(`/api/patients/${id}`, { method: "DELETE" });
        fetchPatients();
    };

    return (
        <div className="space-y-4 p-8">
            {showForm ? (
                <AddEditPatientForm patient={editingPatient} onSubmit={handleAddEditPatient} onCancel={() => setShowForm(false)} />
            ) : (
                <Card>
                    <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                            <CardTitle>Patients</CardTitle>
                            <Button onClick={() => { setEditingPatient(null); setShowForm(true); }}>Add New Patient</Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Input
                            placeholder="Search patients..."
                            className="mb-4"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Age</TableHead>
                                    <TableHead>Gender</TableHead>
                                    <TableHead>Condition</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {patients.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase())).map((patient) => (
                                    <TableRow key={patient._id}>
                                        <TableCell>{patient.name}</TableCell>
                                        <TableCell>{patient.age}</TableCell>
                                        <TableCell>{patient.gender}</TableCell>
                                        <TableCell>{patient.problem}</TableCell>
                                        <TableCell>
                                            <Button onClick={() => setSelectedPatient(patient)}>View</Button>
                                            <Button onClick={() => { setEditingPatient(patient); setShowForm(true); }}>Edit</Button>
                                            <Button onClick={() => handleDeletePatient(patient._id)}>Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            )}
            {selectedPatient && <ViewPatientModal patient={selectedPatient} isOpen={!!selectedPatient} onClose={() => setSelectedPatient(null)} />}
        </div>
    );
};

export default PatientsView;
