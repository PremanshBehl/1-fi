import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';

import gsap from 'gsap';
import { CheckCircle } from 'lucide-react';

const Checkout = () => {
    const contentRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(contentRef.current.children,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, stagger: 0.15, ease: "expo.out", delay: 0.2 }
        );
    }, []);

    return (
        <div className="h-screen w-full bg-[#fcfcfc] text-gray-900 overflow-hidden flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-center justify-center">
                <div ref={contentRef} className="max-w-2xl mx-auto px-6 flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-10 shadow-xl shadow-blue-500/10">
                        <div className="w-16 h-16 bg-[#00AEEF] rounded-full flex items-center justify-center">
                            <CheckCircle className="w-8 h-8 text-white" />
                        </div>
                    </div>

                    <div className="space-y-4 mb-8">
                        <span className="text-[#00AEEF] font-black uppercase tracking-[0.3em] text-[10px]">Underwriting Sequence Initiated</span>
                        <h1 className="text-6xl font-black tracking-tighter leading-none">
                            Settlement <br />
                            <span className="text-[#00AEEF]">Status: Pending.</span>
                        </h1>
                    </div>

                    <p className="text-gray-500 font-medium text-lg leading-relaxed mb-12 max-w-lg">
                        Your institutional financing application has been successfully queued. Our automated risk protocol is verifying your mutual fund portfolio status in real-time.
                    </p>

                    <div className="bg-white rounded-[32px] p-10 w-full border border-gray-100 shadow-sm space-y-6">
                        <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                            <span className="text-gray-400">Reference Token</span>
                            <span className="text-gray-900 px-3 py-1 bg-gray-50 rounded italic">#1FI-8829-PRO</span>
                        </div>
                        <div className="h-[1px] bg-gray-100 w-full" />
                        <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                            <span className="text-gray-400">Settlement Status</span>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                                <span className="text-[#00AEEF]">Pending</span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => window.location.href = '/'}
                        className="mt-16 bg-gray-950 text-white px-12 py-5 rounded-full font-black uppercase tracking-[0.3em] text-[11px] hover:bg-[#00AEEF] hover:scale-105 active:scale-95 transition-all duration-500 shadow-2xl shadow-gray-400/20"
                    >
                        Return to Terminal
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
