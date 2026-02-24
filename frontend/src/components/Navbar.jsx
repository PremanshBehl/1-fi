import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, User } from 'lucide-react';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-gray-100 px-6 py-3">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* Logo Branding */}
                <div
                    onClick={() => navigate('/')}
                    className="flex items-center cursor-pointer group"
                >
                    <span className="text-3xl font-black tracking-tighter text-gray-950">1-</span>
                    <span className="text-3xl font-black tracking-tighter text-[#00AEEF]">FI</span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-8">
                    <button className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors">
                        <CreditCard className="w-5 h-5" />
                        Pay EMI
                    </button>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-[#00AEEF] text-white pl-4 pr-6 py-2 rounded-full text-sm font-black flex items-center gap-2 hover:bg-[#008cc0] transition-all shadow-lg shadow-blue-500/20"
                    >
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                        </div>
                        Sign-up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
