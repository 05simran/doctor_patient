import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus, Search, Filter, MoreVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import AddEditPatientForm from "./AddEditPatientForm"
import ViewPatientModal from "./ViewPatientModal"
import InvoiceGenerator from "../invoices/InvoiceGenerator"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const PatientsView = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [showAddEditForm, setShowAddEditForm] = useState(false)
  const [editingPatient, setEditingPatient] = useState(null)
  const [viewingPatient, setViewingPatient] = useState(null)
  const [deletingPatient, setDeletingPatient] = useState(null)
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
  ])

  const [showInvoice, setShowInvoice] = useState(false)
  const [selectedPatient, setSelectedPatient] = useState(null)

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-700"
      case "scheduled":
        return "bg-blue-100 text-blue-700"
      case "inactive":
        return "bg-gray-100 text-gray-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const handleAddEditPatient = (patientData) => {
    if (editingPatient) {
      setPatients((prev) => prev.map((p) => (p.id === editingPatient.id ? { ...patientData, id: p.id } : p)))
    } else {
      setPatients((prev) => [...prev, { ...patientData, id: prev.length + 1, status: "Active" }])
    }
    setShowAddEditForm(false)
    setEditingPatient(null)
  }

  const handleDeletePatient = () => {
    setPatients((prev) => prev.filter((p) => p.id !== deletingPatient.id))
    setDeletingPatient(null)
  }

  return (
    <div className="space-y-4 p-8">
      {showAddEditForm ? (
        <AddEditPatientForm
          patient={editingPatient}
          onSubmit={handleAddEditPatient}
          onCancel={() => {
            setShowAddEditForm(false)
            setEditingPatient(null)
          }}
        />
      ) : showInvoice ? (
        <InvoiceGenerator patient={selectedPatient} />
      ) : (
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Patients</CardTitle>
              <Button className="gap-2" onClick={() => setShowAddEditForm(true)}>
                <UserPlus className="h-5 w-5" />
                Add New Patient
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {/* Search and Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search patients..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>

            {/* Patients Table */}
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Age</TableHead>
                    <TableHead>Gender</TableHead>
                    <TableHead className="hidden md:table-cell">Phone</TableHead>
                    <TableHead className="hidden lg:table-cell">Condition</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {patients.map((patient) => (
                    <TableRow key={patient.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{patient.name}</div>
                          <div className="text-sm text-gray-500">{patient.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>{patient.age}</TableCell>
                      <TableCell>{patient.gender}</TableCell>
                      <TableCell className="hidden md:table-cell">{patient.phone}</TableCell>
                      <TableCell className="hidden lg:table-cell">{patient.condition}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(patient.status)}`}
                        >
                          {patient.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setViewingPatient(patient)}>View details</DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => {
                                setEditingPatient(patient)
                                setShowAddEditForm(true)
                              }}
                            >
                              Edit patient
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => {
                                setSelectedPatient(patient)
                                setShowInvoice(true)
                              }}
                            >
                              Generate Invoice
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600" onClick={() => setDeletingPatient(patient)}>
                              Delete patient
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* View Patient Modal */}
      <ViewPatientModal patient={viewingPatient} isOpen={!!viewingPatient} onClose={() => setViewingPatient(null)} />

      {/* Delete Patient Confirmation */}
      <AlertDialog open={!!deletingPatient} onOpenChange={() => setDeletingPatient(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the patient record of {deletingPatient?.name}.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeletePatient}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Dialog open={showInvoice} onOpenChange={setShowInvoice}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Generate Invoice</DialogTitle>
            <DialogDescription>Generate an invoice for {selectedPatient?.name}</DialogDescription>
          </DialogHeader>
          <InvoiceGenerator patient={selectedPatient} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default PatientsView

