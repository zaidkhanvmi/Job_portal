import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        setEmailError("");
        setPasswordError("");

        let valid = true;

        if (!email) {
            setEmailError("Email is required");
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Please enter a valid email");
            valid = false;
        }

        if (!password) {
            setPasswordError("Password is required");
            valid = false;
        }

        if (valid) {
            navigate("/");
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#f5f7fb] px-4">
            {/* Outer card */}
            <div className="w-full max-w-4xl rounded-3xl bg-white shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

                {/* Left panel – green welcome */}
                <div className="relative flex flex-col gap-5 items-center justify-center text-center bg-gradient-to-br from-[#4d179a]
                to-[#4d179a] via-[#4d179a] px-6 py-10 text-white">
                    {/* Logo (optional) */}
                    <div className="flex items-center gap-2">
                        <div className="max-w-2xl md:w-[290px] rounded-lg flex items-center justify-center text-xs font-semibold">
                            <img src="/logo.png" alt="" />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-3">
                            Welcome Back!
                        </h2>
                        <p className="text-sm md:text-base text-center max-w-xs opacity-90 mb-8">
                            To keep connected with us please login with your personal info.
                        </p>
                    </div>
                </div>

                {/* Right panel – white sign in form */}
                <div className="flex flex-col justify-center px-8 py-10 md:px-10">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#4d179a] text-center mb-2">
                        Sign In
                    </h2>
                    <p className="text-xs text-gray-500 text-center mb-8">
                        or use your email for registration:
                    </p>

                    <form id="login-form" onSubmit={handleLogin} className="space-y-5">
                        {/* Email */}
                        <div>
                            <input
                                type="text"
                                className="h-11 w-full rounded-sm border border-gray-200 px-4 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4d179a]/40 focus:border-[#4d179a]"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {emailError && (
                                <p className="text-xs text-red-500 mt-1">{emailError}</p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <input
                                type="password"
                                className="h-11 w-full rounded-sm border border-gray-200 px-4 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4d179a]/40 focus:border-[#4d179a]"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {passwordError && (
                                <p className="text-xs text-red-500 mt-1">{passwordError}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[#4d179a] px-6 py-2.5 text-sm font-semibold tracking-wide text-white shadow-md hover:brightness-110 active:brightness-95 transition-all"
                        >
                            SIGN IN
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;