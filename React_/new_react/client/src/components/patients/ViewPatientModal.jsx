import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

const ViewPatientModal = ({ patient, isOpen, onClose }) => {
  if (!patient) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Patient Details</DialogTitle>
        </DialogHeader>
        <ScrollArea className="mt-8 max-h-[60vh] pr-4">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Name</h4>
              <p>{patient.name}</p>
            </div>
            <div>
              <h4 className="font-semibold">Age</h4>
              <p>{patient.age}</p>
            </div>
            <div>
              <h4 className="font-semibold">Gender</h4>
              <p>{patient.gender}</p>
            </div>
            <div>
              <h4 className="font-semibold">Email</h4>
              <p>{patient.email}</p>
            </div>
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p>{patient.phone}</p>
            </div>
            <div>
              <h4 className="font-semibold">Condition</h4>
              <p>{patient.condition}</p>
            </div>
            <div>
              <h4 className="font-semibold">Area of Concern</h4>
              <p>{patient.areaOfConcern}</p>
            </div>
            <div>
              <h4 className="font-semibold">Symptoms</h4>
              <p>{patient.symptoms}</p>
            </div>
            <div>
              <h4 className="font-semibold">Problem Description</h4>
              <p>{patient.problem}</p>
            </div>
            <div>
              <h4 className="font-semibold">Recommended Medicine</h4>
              <p>{patient.recommendedMedicine}</p>
            </div>
            <div>
              <h4 className="font-semibold">Last Visit</h4>
              <p>{patient.lastVisit}</p>
            </div>
            <div>
              <h4 className="font-semibold">Status</h4>
              <p>{patient.status}</p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

export default ViewPatientModal

