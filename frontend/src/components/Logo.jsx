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
            <img
                src="/1fi-logo.svg"
                alt="1Fi Logo"
                className="h-[40px] w-[40px] rounded-[10px] shadow-lg shadow-purple-500/20"
            />
        </div>
    );
};

export default Logo;
