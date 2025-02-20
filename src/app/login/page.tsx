"use client";
import { useState } from "react";
import { users } from "@/app/data/users";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const user = users.find((u) => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem("user", JSON.stringify({ email: user.email }));

            window.dispatchEvent(new Event("storage"));

            router.push("/products");
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="container is-max-tablet">
            <div className="box mt-5">
                <h2 className="title has-text-centered">Login</h2>
                {error && <p className="notification is-danger">{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input
                                className="input"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input
                                className="input"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <button className="button is-primary is-fullwidth">Login</button>
                </form>
            </div>
        </div>
    );
}

