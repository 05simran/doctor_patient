import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const InvoiceGenerator = ({ patient }) => {
  const [invoice, setInvoice] = useState({
    patientName: patient?.name || "",
    medicine: "",
    amount: "",
    daysToTake: "",
    nextFollowUp: new Date(),
  })

  const [generatedInvoice, setGeneratedInvoice] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInvoice((prev) => ({ ...prev, [name]: value }))
  }

  const handleDateChange = (date) => {
    setInvoice((prev) => ({ ...prev, nextFollowUp: date }))
  }

  const generateInvoice = () => {
    const newInvoice = {
      ...invoice,
      invoiceNumber: Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleDateString(),
    }
    setGeneratedInvoice(newInvoice)
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Generate Invoice</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="patientName">Patient Name</Label>
            <Input
              id="patientName"
              name="patientName"
              value={invoice.patientName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="medicine">Prescribed Medicine</Label>
            <Input id="medicine" name="medicine" value={invoice.medicine} onChange={handleInputChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              name="amount"
              type="number"
              value={invoice.amount}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="daysToTake">Days to Take Medicine</Label>
            <Input
              id="daysToTake"
              name="daysToTake"
              type="number"
              value={invoice.daysToTake}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nextFollowUp">Next Follow-up Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={`w-full justify-start text-left font-normal ${
                    !invoice.nextFollowUp && "text-muted-foreground"
                  }`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {invoice.nextFollowUp ? format(invoice.nextFollowUp, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={invoice.nextFollowUp} onSelect={handleDateChange} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={generateInvoice}>Generate Invoice</Button>
        </CardFooter>
      </Card>

      {generatedInvoice && (
        <Card>
          <CardHeader>
            <CardTitle>Generated Invoice</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Invoice Detail</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Invoice Number</TableCell>
                  <TableCell>{generatedInvoice.invoiceNumber}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Date</TableCell>
                  <TableCell>{generatedInvoice.date}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Patient Name</TableCell>
                  <TableCell>{generatedInvoice.patientName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Prescribed Medicine</TableCell>
                  <TableCell>{generatedInvoice.medicine}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Amount</TableCell>
                  <TableCell>${generatedInvoice.amount}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Days to Take Medicine</TableCell>
                  <TableCell>{generatedInvoice.daysToTake} days</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Next Follow-up Date</TableCell>
                  <TableCell>{format(generatedInvoice.nextFollowUp, "PPP")}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <Button onClick={() => window.print()}>Print Invoice</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}

export default InvoiceGenerator

