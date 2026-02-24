import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate('/')}
            className="flex items-center cursor-pointer hover:scale-105 transition-transform"
            title="1Fi Protocol Home"
        >
            <div className="bg-[#6B38FB] h-[40px] w-[40px] rounded-[10px] shadow-lg shadow-purple-500/20 flex flex-col items-center justify-center overflow-hidden shrink-0 transform-gpu">
                <svg width="26" height="26" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* 1 Arrow Right Head (Light Purple) */}
                    <path d="M30 25 L43 39" stroke="#c0a6ff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                    {/* 1 Arrow Left Head (White) */}
                    <path d="M36 26 L18 44" stroke="white" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
                    {/* 1 Arrow Stem (White) */}
                    <rect x="23" y="44" width="9" height="34" rx="2" fill="white" />

                    {/* F Stem */}
                    <rect x="49" y="27" width="8" height="51" rx="2" fill="white" />
                    {/* F Top Bar */}
                    <path d="M49 27 h 16 a 6 6 0 0 1 6 6 v 0 a 6 6 0 0 1 -6 6 h -16" fill="white" />
                    {/* F Middle Bar */}
                    <rect x="49" y="52" width="15" height="8" rx="2" fill="white" />

                    {/* i Stem */}
                    <rect x="76" y="51" width="8" height="27" rx="2" fill="white" />
                    {/* i Dot */}
                    <circle cx="80" cy="33" r="5" fill="white" />
                </svg>
            </div>
        </div>
    );
};

export default Logo;
