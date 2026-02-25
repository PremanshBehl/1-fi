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
                src="https://media.licdn.com/dms/image/v2/D560BAQFtVS5YUXESOQ/company-logo_200_200/B56ZxSK1egH8AI-/0/1770905098770/1fi_logo?e=2147483647&v=beta&t=BmgbudAxwGSO-9BdWL10VM7V7kLOQe2He5DB9YA0sLw"
                alt="1Fi Logo"
                className="h-[40px] w-[40px] rounded-[10px] shadow-lg shadow-purple-500/20 object-cover"
            />
        </div>
    );
};

export default Logo;
