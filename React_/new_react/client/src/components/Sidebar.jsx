import { LayoutDashboard, Users, PillIcon as Pills, Settings, Menu, Database, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const Sidebar = ({ className, onNavigate }) => {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", view: "dashboard" },
    { icon: Users, label: "Patients", view: "patients" },
    { icon: Database, label: "Medical Data", view: "medicalData" },
    { icon: FileText, label: "Invoices", view: "invoices" },
    { icon: Pills, label: "Medicine", view: "medicine" },
    { icon: Settings, label: "Settings", view: "settings" },
  ]

  return (
    <div className={cn("flex h-screen w-64 flex-col bg-slate-900", className)}>
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 px-6 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary"></div>
          <span className="text-lg font-semibold text-white">MediCare</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {menuItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className="w-full justify-start gap-3 text-slate-300 hover:text-white hover:bg-slate-800"
            onClick={() => onNavigate(item.view)}
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Button>
        ))}
      </nav>

      {/* Mobile menu button */}
      <Button variant="ghost" className="absolute top-3 right-4 lg:hidden text-slate-300">
        <Menu className="h-6 w-6" />
      </Button>
    </div>
  )
}

export default Sidebar

