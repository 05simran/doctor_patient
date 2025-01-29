import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Dashboard from "./components/Dashboard.jsx";
import PatientRecords from "./components/PatientRecords.jsx";
import NewPatientEntry from "./components/NewPatientEntry.jsx";
import PatientVisit from "./components/PatientVisit.jsx";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Router>
            <div className="min-h-screen bg-gray-100">
                <Routes>
                    <Route
                        path="/login"
                        element={
                            <Login setIsAuthenticated={setIsAuthenticated} />
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            <Signup setIsAuthenticated={setIsAuthenticated} />
                        }
                    />
                    <Route
                        path="/dashboard"
                        element={
                            isAuthenticated ? (
                                <Dashboard />
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route
                        path="/patients"
                        element={
                            isAuthenticated ? (
                                <PatientRecords />
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route
                        path="/new-patient"
                        element={
                            isAuthenticated ? (
                                <NewPatientEntry />
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route
                        path="/patient-visit/:id"
                        element={
                            isAuthenticated ? (
                                <PatientVisit />
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route path="/" element={<Navigate to="/dashboard" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
