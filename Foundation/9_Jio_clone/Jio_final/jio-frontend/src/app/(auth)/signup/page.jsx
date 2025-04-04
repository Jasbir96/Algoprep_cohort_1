"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { api, ENDPOINT } from "@/lib/api";
import { useRouter } from "next/navigation";
import { LucideLoader2 } from "lucide-react";
import { useDispatch,useSelector } from "react-redux";
import { userLoggedInDetails } from "@/redux/userSlice";
import { toast } from "sonner";

export default function LoginForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user);
    if (userData.isLoggedIn) {
        return router.push("/");
    }

    const onSubmit = async () => {
        try {
            setLoading(true);
            // if there is any 400/500 -> error throw
            const res = await api.post(ENDPOINT.signup, {
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
            });
            if (res.data.status === "success") {
                dispatch(userLoggedInDetails(res.data.user));
                router.push("/");
            } else {
                console.log("message", res.data.message);
            }
            if (res.data) {
                toast("Account Created!");
            }
        } catch (err) {
            console.log("err: ", err.response.data.message);
            toast("Something went wrong");
        } finally {
            setLoading(false);
        }
    };





    return (
        <div className="h-screen flex items-center justify-center">
            <Card className=" w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-xl">Sign Up</CardTitle>
                    <CardDescription>
                        Enter your information to create an account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="confirm-password">Confirm Password</Label>
                            <Input
                                id="confirm-password"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <Button onClick={onSubmit} className="w-full">
                            Create an account
                            {loading && (
                                <LucideLoader2 className="animate-spin ml-2 w-4 h-4" />
                            )}
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Already have an account?{" "}
                        <Link href="/login" className="underline">
                            Sign in
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
