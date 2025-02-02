import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart } from "lucide-react";

const AuthPage = ({ onAuth }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            onAuth();
        }, 1000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <div className="w-full max-w-md px-4">
                <div className="flex justify-center mb-8">
                    <div className="flex items-center gap-2">
                        <Heart className="h-8 w-8 text-primary" />
                        <h1 className="text-2xl font-bold">MediCare</h1>
                    </div>
                </div>

                <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-4">
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="register">Register</TabsTrigger>
                    </TabsList>

                    <TabsContent value="login">
                        <Card>
                            <CardHeader>
                                <CardTitle>Welcome back</CardTitle>
                                <CardDescription>
                                    Enter your credentials to access your
                                    account
                                </CardDescription>
                            </CardHeader>
                            <form onSubmit={handleSubmit}>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Input
                                            type="email"
                                            placeholder="doctor@example.com"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Input
                                            type="password"
                                            placeholder="••••••••"
                                            required
                                        />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        className="w-full"
                                        type="submit"
                                        disabled={isLoading}
                                    >
                                        {isLoading
                                            ? "Signing in..."
                                            : "Sign in"}
                                    </Button>
                                </CardFooter>
                            </form>
                        </Card>
                    </TabsContent>

                    <TabsContent value="register">
                        <Card>
                            <CardHeader>
                                <CardTitle>Create an account</CardTitle>
                                <CardDescription>
                                    Enter your details to create your account
                                </CardDescription>
                            </CardHeader>
                            <form onSubmit={handleSubmit}>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Input
                                            placeholder="Dr. John Doe"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Input
                                            type="email"
                                            placeholder="doctor@example.com"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Input
                                            placeholder="Medical License Number"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Input
                                            type="password"
                                            placeholder="••••••••"
                                            required
                                        />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        className="w-full"
                                        type="submit"
                                        disabled={isLoading}
                                    >
                                        {isLoading
                                            ? "Creating account..."
                                            : "Create account"}
                                    </Button>
                                </CardFooter>
                            </form>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default AuthPage;
