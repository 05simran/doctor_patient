import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Simulated database access
const getOptions = (category) => {
  // In a real application, this would be an API call
  const db = {
    problems: [
      { id: 1, name: "Hypertension" },
      { id: 2, name: "Diabetes" },
      { id: 3, name: "Asthma" },
    ],
    medications: [
      { id: 1, name: "Lisinopril" },
      { id: 2, name: "Metformin" },
      { id: 3, name: "Albuterol" },
    ],
    symptoms: [
      { id: 1, name: "Headache" },
      { id: 2, name: "Fatigue" },
      { id: 3, name: "Shortness of breath" },
    ],
  }
  return db[category] || []
}

const AddEditPatientForm = ({ patient, onSubmit, onCancel }) => {
  const [patientData, setPatientData] = useState(
    patient || {
      name: "",
      age: "",
      gender: "",
      email: "",
      phone: "",
      problem: "",
      medication: "",
      symptoms: "",
      otherNotes: "",
    },
  )

  const [problems, setProblems] = useState([])
  const [medications, setMedications] = useState([])
  const [symptoms, setSymptoms] = useState([])

  useEffect(() => {
    setProblems(getOptions("problems"))
    setMedications(getOptions("medications"))
    setSymptoms(getOptions("symptoms"))
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setPatientData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(patientData)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>{patient ? "Edit Patient" : "Add New Patient"}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={patientData.name} onChange={handleInputChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" name="age" type="number" value={patientData.age} onChange={handleInputChange} required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Select
              name="gender"
              value={patientData.gender}
              onValueChange={(value) => setPatientData((prev) => ({ ...prev, gender: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={patientData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" value={patientData.phone} onChange={handleInputChange} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="problem">Problem</Label>
            <Select
              name="problem"
              value={patientData.problem}
              onValueChange={(value) => setPatientData((prev) => ({ ...prev, problem: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select problem" />
              </SelectTrigger>
              <SelectContent>
                {problems.map((problem) => (
                  <SelectItem key={problem.id} value={problem.name}>
                    {problem.name}
                  </SelectItem>
                ))}
                <SelectItem value="other">Other (specify in notes)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="medication">Medication</Label>
            <Select
              name="medication"
              value={patientData.medication}
              onValueChange={(value) => setPatientData((prev) => ({ ...prev, medication: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select medication" />
              </SelectTrigger>
              <SelectContent>
                {medications.map((medication) => (
                  <SelectItem key={medication.id} value={medication.name}>
                    {medication.name}
                  </SelectItem>
                ))}
                <SelectItem value="other">Other (specify in notes)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="symptoms">Symptoms</Label>
            <Select
              name="symptoms"
              value={patientData.symptoms}
              onValueChange={(value) => setPatientData((prev) => ({ ...prev, symptoms: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select symptoms" />
              </SelectTrigger>
              <SelectContent>
                {symptoms.map((symptom) => (
                  <SelectItem key={symptom.id} value={symptom.name}>
                    {symptom.name}
                  </SelectItem>
                ))}
                <SelectItem value="other">Other (specify in notes)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="otherNotes">Other Notes</Label>
            <Textarea
              id="otherNotes"
              name="otherNotes"
              value={patientData.otherNotes}
              onChange={handleInputChange}
              placeholder="Enter any additional information here..."
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">{patient ? "Update Patient" : "Add Patient"}</Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export default AddEditPatientForm

