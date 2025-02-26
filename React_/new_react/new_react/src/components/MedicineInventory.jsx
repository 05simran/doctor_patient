import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus } from "lucide-react"

const MedicineInventory = () => {
  const medicines = [
    {
      id: 1,
      name: "Amoxicillin",
      category: "Antibiotics",
      stock: 500,
      unit: "tablets",
      supplier: "PharmaCorp",
      status: "In Stock",
    },
    // Add more medicine data here
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Medicine Inventory</h2>
        <Button className="gap-2">
          <Plus className="h-5 w-5" />
          Add New Medicine
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {medicines.map((medicine) => (
              <TableRow key={medicine.id}>
                <TableCell className="font-medium">{medicine.name}</TableCell>
                <TableCell>{medicine.category}</TableCell>
                <TableCell>{medicine.stock}</TableCell>
                <TableCell>{medicine.unit}</TableCell>
                <TableCell>{medicine.supplier}</TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-700">
                    {medicine.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default MedicineInventory

