import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { User, ArrowLeft } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isHome = location.pathname === '/';

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-3">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                <div className="flex items-center gap-6">
                    <Logo />

                    {!isHome && (
                        <div className="flex items-center gap-2 border-l border-gray-200 pl-6 h-8">
                            <button
                                onClick={() => navigate(-1)}
                                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-gray-900 transition-colors"
                            >
                                <ArrowLeft className="w-3.5 h-3.5" />
                                Return
                            </button>
                        </div>
                    )}
                </div>

                
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/')}
                        className="w-10 h-10 bg-gray-50 text-gray-900 rounded-full flex items-center justify-center hover:bg-[#6B38FB] hover:text-white transition-all border border-gray-200 shadow-sm group"
                        title="User Profile"
                    >
                        <User className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
