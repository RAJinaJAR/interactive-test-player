import React from 'react';

export const ChevronLeftIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
);

export const ChevronRightIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);

export const ShareIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8m-4-6l-4-4m0 0L8 6m4-4v12" />
    </svg>
);

export const ClockIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const TrophyIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 01-4.874-1.956.5.5 0 01-.126-.679l.343-.686a.5.5 0 01.45-.279h13.314a.5.5 0 01.45-.279l.343.686a.5.5 0 01-.126.679A9.75 9.75 0 0116.5 18.75z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75v3.375m0 0h3.375M12 19.125h-3.375M12 19.125V9.75M12 9.75c-1.355 0-2.705-.26-3.92-.741a.563.563 0 00-.58.053l-.343.343a.563.563 0 00-.053.58c.482 1.214.741 2.565.741 3.92m0 0c1.355 0 2.705.26 3.92.741.21.523.018 1.128-.46 1.606l-.343.343a.563.563 0 01-.58.053c-1.214-.482-2.565-.741-3.92-.741m5.42.741c.478-.478.67-1.083.46-1.606-.482-1.214-.741-2.565-.741-3.92m0 0c-1.355 0-2.705.26-3.92.741a.563.563 0 00-.58.053l-.343.343a.563.563 0 00-.053.58c.482 1.214.741 2.565.741 3.92m-5.42-.741c-.478.478-.67-1.083-.46-1.606.482 1.214.741 2.565.741 3.92" />
    </svg>
);
