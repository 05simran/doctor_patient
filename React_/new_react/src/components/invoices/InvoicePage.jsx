import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Plus, Printer, Eye } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import InvoiceGenerator from "./InvoiceGenerator"

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
]

const InvoicePage = () => {
  const [invoices, setInvoices] = useState(mockInvoices)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedInvoice, setSelectedInvoice] = useState(null)

  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleNewInvoice = (newInvoice) => {
    setInvoices([...invoices, { ...newInvoice, id: invoices.length + 1, status: "Pending" }])
  }

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "paid":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "overdue":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-4 p-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold">Invoices</CardTitle>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                New Invoice
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>Generate New Invoice</DialogTitle>
                <DialogDescription>Fill in the details to generate a new invoice.</DialogDescription>
              </DialogHeader>
              <InvoiceGenerator onSubmit={handleNewInvoice} />
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search invoices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice #</TableHead>
                <TableHead>Patient Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInvoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.invoiceNumber}</TableCell>
                  <TableCell>{invoice.patientName}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(invoice.status)}`}>
                      {invoice.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" onClick={() => setSelectedInvoice(invoice)} className="mr-2">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => window.print()}>
                      <Printer className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {selectedInvoice && (
        <Dialog open={!!selectedInvoice} onOpenChange={() => setSelectedInvoice(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>Invoice Details</DialogTitle>
            </DialogHeader>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Invoice Number</TableCell>
                  <TableCell>{selectedInvoice.invoiceNumber}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Patient Name</TableCell>
                  <TableCell>{selectedInvoice.patientName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Date</TableCell>
                  <TableCell>{selectedInvoice.date}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Amount</TableCell>
                  <TableCell>${selectedInvoice.amount.toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Status</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(selectedInvoice.status)}`}
                    >
                      {selectedInvoice.status}
                    </span>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="flex justify-end space-x-2 mt-4">
              <Button onClick={() => window.print()}>Print Invoice</Button>
              <Button variant="outline" onClick={() => setSelectedInvoice(null)}>
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

export default InvoicePage

