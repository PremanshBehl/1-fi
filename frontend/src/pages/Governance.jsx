import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import gsap from 'gsap';

const Governance = () => {
    const contentRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(contentRef.current.children,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "expo.out", delay: 0.5 }
        );
    }, []);

    return (
        <div className="min-h-screen bg-white text-[#0a0a0a]">
            <Navbar />
            <div ref={contentRef} className="max-w-[1240px] mx-auto px-6 pt-48 pb-32">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gray-50 border border-gray-100 rounded-full mb-8">
                    <div className="w-1.5 h-1.5 bg-[#4f46e5] rounded-full" />
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#0a0a0a]">Compliance Framework</span>
                </div>

                <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-[0.85] italic mb-16">
                    Institutional <br />
                    <span className="text-[#4f46e5]">Governance.</span>
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-black italic tracking-tighter">Regulatory Standard v4.0</h3>
                        <p className="text-gray-400 font-medium leading-relaxed">
                            1Fi operations are governed by the Digital Assets Procurement Protocol (DAPP), ensuring all technology-backed financing meets top-tier institutional compliance requirements.
                        </p>
                    </div>
                    <div className="bg-[#f8f9fb] rounded-[48px] p-12 flex items-center justify-center border border-gray-100 italic font-black text-gray-200 text-4xl text-center">
                        SOLIDE <br /> INTEGRITÀ
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Governance;
