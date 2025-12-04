import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    // State to manage form values and error messages
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        setEmailError('');
        setPasswordError('');

        let valid = true;

        if (!email) {
            setEmailError('Email is required');
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Please enter a valid email');
            valid = false;
        }

        if (!password) {
            setPasswordError('Password is required');
            valid = false;
        }
        if (valid) {
            navigate('/');
        }
    };

    return (
        <div className='relative flex flex-col justify-center w-full h-screen lg:flex-row sm:p-0'>
            <div className='flex flex-col flex-1'>
                <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
                    <div>
                        <div className="mb-5 sm:mb-8">
                            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm sm:text-title-md">Sign In</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Enter your email and password to sign in!</p>
                        </div>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="space-y-6">
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800"
                                        name="email"
                                        placeholder='info@gmail.com'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                    Password <span className="text-red-500">*</span>
                                </label>
                                <div>
                                    <input
                                        type="password"
                                        className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800"
                                        name="password"
                                        placeholder='Enter your password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className='inline-flex items-center bg-primary-color justify-center gap-2 rounded-lg font-medium select-none px-4 py-2.5 text-sm text-white shadow-md hover:shadow-lg hover:brightness-110 active:brightness-95 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 active:scale-95 transition-all duration-150 ease-in-out w-full'>
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='bg-[#161950]'></div>
        </div>
    );
};

export default Login;
