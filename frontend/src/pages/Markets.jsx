import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import gsap from 'gsap';

const Markets = () => {
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
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#0a0a0a]">Live Indices</span>
                </div>

                <h1 className="text-7xl md:text-8xl font-black tracking-tighter text-center leading-[0.85] italic mb-10">
                    Real-Time <br />
                    <span className="text-[#4f46e5]">Markets.</span>
                </h1>

                <p className="max-w-xl text-center text-gray-400 font-medium text-xl leading-relaxed mb-20">
                    Track the dynamic performance of mutual fund baskets backing your technology assets.
                </p>

                <div className="w-full bg-[#0a0a0a] rounded-[48px] p-20 text-white flex flex-col items-center shadow-2xl">
                    <div className="text-[10px] font-extrabold uppercase tracking-[0.5em] text-gray-500 mb-6">Market Volatility Index</div>
                    <div className="text-8xl font-black italic tracking-tighter text-[#4f46e5]">1.02% <span className="text-2xl not-italic text-teal-400 font-bold ml-4">↑ High</span></div>
                    <p className="mt-12 text-gray-400 text-sm font-bold uppercase tracking-widest">Calculated across 42 institutional portfolios</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Markets;
