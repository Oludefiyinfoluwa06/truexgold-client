import { useState } from "react";
import AuthCard from "../components/AuthCard";
import Button from "../components/Button";
import { useTruex } from "../contexts/useTruex";
import { useSearchParams } from "react-router-dom";

export default function Register() {
    const [username, setUsername] = useState('');
    
    const { registerUser, error, setError } = useTruex();
    let [searchParams] = useSearchParams();
    
    const handleRegister = async (e) => {
        e.preventDefault();
        const referrer = searchParams.get('referrer');

        await registerUser(username, referrer);
    }

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-400">
            <div className="flex flex-col md:flex-row bg-white md:rounded-lg rounded-none shadow-lg overflow-hidden w-[600px]">
                <AuthCard />
                <div className="p-8 md:w-1/2">
                    <h2 className="text-2xl font-semibold text-center">Register</h2>
                    <form className="mt-8 space-y-6" onSubmit={handleRegister}>
                        {error && <div className='w-full rounded-md p-2 bg-red-300 text-red-800'>{error}</div>}
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                value={username}
                                onChange={e => {
                                    setError(null);
                                    setUsername(e.target.value);
                                }}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-300 text-black"
                            />
                        </div>
                        <Button text='Register' />
                    </form>
                </div>
            </div>
        </div>
    );
}