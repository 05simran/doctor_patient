import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../app.css";

const Signup = ({ setIsAuthenticated }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // TODO: Implement actual signup logic here
        console.log("Signup attempt with:", name, email, password);
        setIsAuthenticated(true);
        navigate("/dashboard");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
                <div className="text-center">
                    <img
                        className="mx-auto h-16 w-16 img-logo"
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="Healthcare Logo"
                    />

                    <h2 className="mt-4 text-2xl font-bold text-gray-800 mb-1">
                        Create Your Account
                    </h2>

                    <p className="text-sm text-gray-500 mb-1">
                        Join our system to manage patient records with ease.
                    </p>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Full Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="e.g., Dr. Jane Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="e.g., jane.doe@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Create a secure password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                <div className="text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-600 hover:underline">
                        Login here
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Signup;
