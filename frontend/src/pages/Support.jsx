import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import gsap from 'gsap';

const Support = () => {
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
            <div ref={contentRef} className="max-w-[1240px] mx-auto px-6 pt-48 pb-32 flex flex-col items-center">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gray-50 border border-gray-100 rounded-full mb-8">
                    <div className="w-1.5 h-1.5 bg-[#4f46e5] rounded-full" />
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#0a0a0a]">Assistance Protocol</span>
                </div>

                <h1 className="text-7xl md:text-8xl font-black tracking-tighter text-center leading-[0.85] italic mb-10">
                    Concierge <br />
                    <span className="text-[#4f46e5]">Support.</span>
                </h1>

                <p className="max-w-xl text-center text-gray-400 font-medium text-xl leading-relaxed mb-20">
                    Our dedicated institutional support team is available 24/7 to assist with your portfolio requirements.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {[
                        { title: 'Global Priority', description: 'Immediate settlement assistance for high-value portfolios.' },
                        { title: 'Digital Assets', description: 'Specialized support for hardware procurement and security.' },
                        { title: 'Governance', description: 'Legal and regulatory compliance guidance for financing.' }
                    ].map((item, i) => (
                        <div key={i} className="bg-white border border-gray-50 p-10 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.01)] hover:shadow-2xl transition-all duration-500">
                            <h3 className="text-xl font-black mb-4 italic tracking-tighter">{item.title}</h3>
                            <p className="text-sm font-medium text-gray-400 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Support;
