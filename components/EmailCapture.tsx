import React, { useState } from 'react';

interface EmailCaptureProps {
    onEmailSubmit: (email: string) => void;
}

export const EmailCapture: React.FC<EmailCaptureProps> = ({ onEmailSubmit }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onEmailSubmit(email);
    };

    return (
        <div className="w-full max-w-lg text-center bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700">
            <h2 className="text-3xl font-bold text-gray-100 mb-3">Join the Leaderboard!</h2>
            <p className="text-gray-400 mb-6">
                Enter your email to see how you rank against others on this test. This is optional.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow"
                    aria-label="Your email for the leaderboard"
                />
                <button
                    type="submit"
                    className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-purple-500"
                >
                    Start Test & Submit Score
                </button>
            </form>
             <button
                onClick={() => onEmailSubmit('')}
                className="w-full mt-3 px-6 py-2 text-gray-400 hover:text-white hover:bg-gray-700/50 font-medium rounded-md transition-colors"
            >
                Start Test without Submitting
            </button>
        </div>
    );
};
