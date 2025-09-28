import React from 'react';
import { LeaderboardEntry } from '../types';
import { TrophyIcon } from './icons';

interface LeaderboardProps {
  data: LeaderboardEntry[] | null;
  isLoading: boolean;
  error: string | null;
  currentUserEmail: string | null;
}

const maskEmail = (email: string) => {
    if (!email || !email.includes('@')) return 'Anonymous';
    const [name, domain] = email.split('@');
    if (name.length <= 3) {
        return `${name[0]}***@${domain}`;
    }
    return `${name.substring(0, 3)}***@${domain}`;
};

const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
};

export const Leaderboard: React.FC<LeaderboardProps> = ({ data, isLoading, error, currentUserEmail }) => {
    if (isLoading) {
        return (
            <div className="w-full p-6 bg-gray-800 rounded-lg text-center text-gray-300">
                Loading Leaderboard...
            </div>
        );
    }
    
    if (error) {
        return (
             <div className="w-full p-6 bg-gray-800 rounded-lg text-center text-red-400">
                Error: {error}
            </div>
        );
    }

    if (!data || data.length === 0) {
        return (
             <div className="w-full p-6 bg-gray-800 rounded-lg text-center text-gray-400">
                You're the first to take this test! Your score will appear on the leaderboard.
            </div>
        );
    }
    
    return (
        <div className="w-full p-4 sm:p-6 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 shadow-lg">
            <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                <TrophyIcon className="h-6 w-6" />
                Leaderboard
            </h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="text-xs text-gray-400 uppercase border-b border-gray-600">
                        <tr>
                            <th scope="col" className="px-3 py-3 text-center">Rank</th>
                            <th scope="col" className="px-3 py-3">Player</th>
                            <th scope="col" className="px-3 py-3 text-right">Score</th>
                            <th scope="col" className="px-3 py-3 text-right">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((entry, index) => {
                            const isCurrentUser = currentUserEmail && entry.email.toLowerCase() === currentUserEmail.toLowerCase();
                            return (
                                <tr key={index} className={`border-b border-gray-700 ${isCurrentUser ? 'bg-purple-900/40' : ''}`}>
                                    <td className="px-3 py-3 font-medium text-center">{entry.rank}</td>
                                    <td className="px-3 py-3 font-semibold">{maskEmail(entry.email)}</td>
                                    <td className="px-3 py-3 text-right">{entry.score} / {entry.totalPossible}</td>
                                    <td className="px-3 py-3 text-right font-mono">{formatTime(entry.elapsedTime)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
