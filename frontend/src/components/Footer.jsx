import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="bg-[#132130] text-gray-400 py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-16">

                    {/* Premium Brand Info */}
                    <div className="col-span-2 space-y-8">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-[#00AEEF] text-white rounded-lg flex items-center justify-center font-black text-lg">
                                1
                            </div>
                            <span className="text-2xl font-black text-white tracking-tighter">1Fi</span>
                        </div>
                        <p className="text-sm leading-relaxed max-w-sm font-medium">
                            1Fi is an institutional grade hardware financing protocol. We enable users to leverage their diversified mutual fund portfolios to secure the world's most advanced technology at 0% interest.
                        </p>
                        <div className="flex gap-4">
                            {['Twitter', 'LinkedIn', 'Github'].map((social) => (
                                <button key={social} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#00AEEF] hover:text-white transition-all">
                                    <span className="sr-only">{social}</span>
                                    <div className="w-4 h-4 rounded-full bg-current opacity-30 group-hover:opacity-100 transition-opacity" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div>
                        <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-8">Asset Classes</h4>
                        <ul className="space-y-4">
                            {['Smartphones', 'Laptops', 'Wearables', 'Audio'].map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => navigate('/')}
                                        className="text-sm font-semibold hover:text-[#00AEEF] transition-colors"
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-8">Protocol</h4>
                        <ul className="space-y-4">
                            {['How it Works', 'Underwriting', 'Risk Scoring', 'Governance'].map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => navigate('/support')}
                                        className="text-sm font-semibold hover:text-[#00AEEF] transition-colors"
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-8">Verification</h4>
                        <ul className="space-y-4">
                            {['Bank Grade Security', 'API Integration', 'Portfolio Analysis'].map((item) => (
                                <li key={item}>
                                    <button className="text-sm font-semibold hover:text-[#00AEEF] transition-colors cursor-not-allowed text-left">
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                        Institutional Technology Underwriting Protocol © 2026. All Rights Reserved.
                    </p>
                    <div className="flex gap-8">
                        {['Privacy', 'Compliance', 'Node Status'].map((item) => (
                            <button key={item} className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors">
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
