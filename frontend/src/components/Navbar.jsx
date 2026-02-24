import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-3">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* Logo Branding */}
                <Logo />

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/')}
                        className="w-10 h-10 bg-gray-50 text-gray-900 rounded-full flex items-center justify-center hover:bg-[#6B38FB] hover:text-white transition-all border border-gray-200 shadow-sm"
                    >
                        <User className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
