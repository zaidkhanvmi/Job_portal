// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const navigate = useNavigate();

//     // State to manage form values and error messages
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [passwordError, setPasswordError] = useState('');

//     const handleLogin = (e) => {
//         e.preventDefault();

//         setEmailError('');
//         setPasswordError('');

//         let valid = true;

//         if (!email) {
//             setEmailError('Email is required');
//             valid = false;
//         } else if (!/\S+@\S+\.\S+/.test(email)) {
//             setEmailError('Please enter a valid email');
//             valid = false;
//         }

//         if (!password) {
//             setPasswordError('Password is required');
//             valid = false;
//         }
//         if (valid) {
//             navigate('/');
//         }
//     };

//     return (
//         <div className='relative flex flex-col justify-center w-full h-screen lg:flex-row sm:p-0'>

//             <div className='flex flex-col flex-1 p-5'>
//                 <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
//                     <div>
//                         <div className="mb-5 sm:mb-8">
//                             <h1 className="mb-2 font-semibold text-gray-800 text-title-sm sm:text-title-md">Sign In</h1>
//                             <p className="text-sm text-gray-500 dark:text-gray-400">Enter your email and password to sign in!</p>
//                         </div>
//                     </div>
//                     <form onSubmit={handleLogin}>
//                         <div className="space-y-6">
//                             <div>
//                                 <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
//                                     Email <span className="text-red-500">*</span>
//                                 </label>
//                                 <div>
//                                     <input
//                                         type="text"
//                                         className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800"
//                                         name="email"
//                                         placeholder='info@gmail.com'
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                     />
//                                     {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
//                                 </div>
//                             </div>

//                             <div>
//                                 <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
//                                     Password <span className="text-red-500">*</span>
//                                 </label>
//                                 <div>
//                                     <input
//                                         type="password"
//                                         className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800"
//                                         name="password"
//                                         placeholder='Enter your password'
//                                         value={password}
//                                         onChange={(e) => setPassword(e.target.value)}
//                                     />
//                                     {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
//                                 </div>
//                             </div>

//                             <div>
//                                 <button
//                                     type="submit"
//                                     className='inline-flex items-center bg-primary-color justify-center gap-2 rounded-lg font-medium select-none px-4 py-2.5 text-sm text-white shadow-md hover:shadow-lg hover:brightness-110 active:brightness-95 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 active:scale-95 transition-all duration-150 ease-in-out w-full'>
//                                     Sign in
//                                 </button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>

//             <div className='bg-[#161950] items-center hidden w-full h-full lg:w-1/2 bg-brand-950 dark:bg-white/5 lg:grid bg-repeat'>
//                 <div className="relative flex items-center justify-center z-1">
//                     <div className='absolute right-0 top-0 -z-1 w-full max-w-[250px] xl:max-w-[450px]'>
//                         <img src="/loginBg.svg" alt="" />
//                     </div>
//                     <div className="absolute bottom-0 left-0 -z-1 w-full max-w-[250px] rotate-180 xl:max-w-[450px]">
//                         <img src="/loginBg.svg" alt="" />
//                     </div>
//                     <div className='flex flex-col items-center max-w-xs'>
//                         <img src="/logo.png" alt="" />
//                         <p className='text-center text-gray-400 dark:text-white/60 mt-2'>Your digital partner for every marketing execution.</p>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Login;


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