import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="bg-[#0A0618] py-24 px-6 mt-20 text-white w-full border-t border-white/5 shadow-[0_-20px_40px_rgba(0,0,0,0.05)] relative z-10 w-full mb-0">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">

                
                <div className="w-full flex justify-between items-start">
                    <div className="flex flex-col max-w-sm">
                        <div className="mb-6">
                            <Logo />
                        </div>
                        <p className="text-[12px] text-gray-400 leading-relaxed font-medium">
                            1Fi is an institutional grade hardware financing protocol. Leverage your diversified portfolio to secure advanced technology at exactly 0% interest.
                        </p>
                    </div>

                    <div className="flex flex-col items-end gap-6 pt-2">
                        <div className="flex gap-6">
                            <button
                                onClick={() => navigate('/')}
                                className="text-[10px] font-black uppercase tracking-[0.15em] text-[#bca1fa] hover:text-white transition-colors"
                            >
                                Documentation
                            </button>
                            <button
                                onClick={() => navigate('/')}
                                className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 hover:text-white transition-colors"
                            >
                                Support
                            </button>
                        </div>
                        <div className="flex items-center gap-3 px-5 py-2.5 bg-white/5 rounded-full border border-white/10 shadow-sm backdrop-blur-sm">
                            <div className="w-1.5 h-1.5 bg-[#00e676] rounded-full shadow-[0_0_8px_rgba(0,230,118,0.6)]"></div>
                            <span className="text-[9px] font-black uppercase tracking-[0.15em] text-gray-300">All Protocols Active</span>
                        </div>
                    </div>
                </div>

            </div>

            
            <div className="max-w-6xl mx-auto mt-20 flex flex-col items-center justify-center pt-8 border-t border-white/5 w-full">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-600">
                    © 2026 1Fi Institutional Protocol. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
