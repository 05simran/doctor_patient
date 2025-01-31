import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Simulated database
const db = {
  problems: [],
  medications: [],
  symptoms: [],
}

const MedicalDataManager = () => {
  const [activeTab, setActiveTab] = useState("problems")
  const [newItem, setNewItem] = useState({ name: "", description: "" })
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(db[activeTab])
  }, [activeTab])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newItem.name && newItem.description) {
      const updatedItems = [...items, { ...newItem, id: Date.now() }]
      db[activeTab] = updatedItems
      setItems(updatedItems)
      setNewItem({ name: "", description: "" })
    }
  }

  return (
    <div className="space-y-4 p-8">
      <Card>
        <CardHeader>
          <CardTitle>Manage Medical Data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2 mb-4">
            <Button variant={activeTab === "problems" ? "default" : "outline"} onClick={() => setActiveTab("problems")}>
              Problems
            </Button>
            <Button
              variant={activeTab === "medications" ? "default" : "outline"}
              onClick={() => setActiveTab("medications")}
            >
              Medications
            </Button>
            <Button variant={activeTab === "symptoms" ? "default" : "outline"} onClick={() => setActiveTab("symptoms")}>
              Symptoms
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={newItem.description}
                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                required
              />
            </div>
            <Button type="submit">Add {activeTab.slice(0, -1)}</Button>
          </form>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default MedicalDataManager

