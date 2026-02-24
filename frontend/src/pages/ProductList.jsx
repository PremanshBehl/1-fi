import React, { useState, useEffect, useRef } from 'react';
import { getProducts } from '../services/productService';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import CategoryBar from '../components/CategoryBar';
import { Shield, Lock, Landmark, Zap, ShieldCheck, TrendingUp, History } from 'lucide-react';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState('Mobiles');
    const [loading, setLoading] = useState(true);
    const revealRefs = useRef([]);
    const productGridRef = useRef(null);

    const scrollToCatalogue = () => {
        productGridRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const fetch = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (err) {
                console.error("Error fetching products", err);
            } finally {
                setLoading(false);
            }
        };
        fetch();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            },
            { threshold: 0.1 }
        );

        revealRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, [loading, activeCategory]);

    const addToRefs = (el) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-white text-sm">
                <div className="animate-pulse flex flex-col items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full"></div>
                    <span className="font-bold text-gray-400 uppercase tracking-widest text-[10px]">Loading 1Fi Hub</span>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#fcfcfc]">
            <Navbar />
            <CategoryBar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

            <main className="pb-24">
                {/* Modern Hero Section with Trust Badges */}
                <div className="relative h-[700px] w-full overflow-hidden bg-[#132130]">
                    <img
                        src="/images/hero.png"
                        alt="Hero"
                        className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#132130] via-[#132130]/80 to-transparent"></div>
                    <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center gap-10">
                        <div className="space-y-6 reveal" ref={addToRefs}>
                            <span className="text-[#6B38FB] font-black uppercase tracking-[0.4em] text-[11px] bg-purple-500/10 px-3 py-1 rounded w-fit backdrop-blur-sm border border-purple-500/20">Institutional Grade Financing</span>
                            <h1 className="text-7xl font-black text-white leading-[0.9] tracking-tighter max-w-3xl">
                                The Future of <br />
                                <span className="text-[#6B38FB]">Hardware Assets.</span>
                            </h1>
                            <p className="text-gray-300 text-xl max-w-xl font-medium leading-relaxed">
                                Own premium technology with zero-interest institutional financing backed by your diversified mutual fund holdings.
                            </p>
                            <div className="flex flex-wrap gap-6 items-center pt-4">
                                <button
                                    onClick={scrollToCatalogue}
                                    className="bg-[#6B38FB] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#4F23C0] transition-all duration-300 shadow-xl shadow-purple-500/20 active:scale-95"
                                >
                                    Explore Catalogue
                                </button>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-x-12 gap-y-6 pt-10 border-t border-white/10 reveal" ref={addToRefs}>
                            {[
                                { label: '0% Interest', sub: 'Institutional Terms', icon: Zap },
                                { label: 'Bank-Grade', sub: 'Underwriting', icon: ShieldCheck },
                                { label: 'Mutual Fund', sub: 'Backed Security', icon: Landmark }
                            ].map((badge, idx) => (
                                <div key={badge.label} className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#6B38FB] group-hover:bg-[#6B38FB] group-hover:text-white transition-all duration-300">
                                        <badge.icon className="w-5 h-5" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-white font-black text-sm uppercase tracking-widest leading-none mb-1">{badge.label}</span>
                                        <span className="text-gray-500 font-bold text-[10px] uppercase tracking-wider">{badge.sub}</span>
                                    </div>
                                    {idx !== 2 && <div className="hidden lg:block w-px h-8 bg-white/10 ml-8"></div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content Section based on Category */}
                <div
                    ref={(el) => {
                        productGridRef.current = el;
                        addToRefs(el);
                    }}
                    className="bg-[#f8fafc] py-32 reveal"
                >
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex justify-between items-end mb-16">
                            <div>
                                <h2 className="text-4xl font-black text-gray-900 tracking-tight">{activeCategory}</h2>
                                <p className="text-gray-500 font-medium mt-2">
                                    {activeCategory === 'Mobiles'
                                        ? "Verified hardware for high-performance individual & enterprise use."
                                        : `Available assets for ${activeCategory} will be listed below.`}
                                </p>
                            </div>
                        </div>

                        {activeCategory === 'Mobiles' ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
                                {products.map((product) => (
                                    <div key={product.id}>
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-[40px] p-24 border border-gray-100 shadow-sm flex flex-col items-center text-center space-y-8">
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-black text-gray-900">Asset Listing Pending</h3>
                                    <p className="text-gray-500 font-medium">
                                        Our risk protocol is currently vetting premium hardware partners for <span className="text-gray-900 font-bold">{activeCategory}</span>. <br />
                                        Institutional-grade assets for this sector will be available for underwriting shortly.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setActiveCategory('Mobiles')}
                                    className="bg-[#6B38FB] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#4F23C0] transition-all shadow-xl shadow-purple-500/20 active:scale-95"
                                >
                                    Explore Active Terminals
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* How 0% EMI Is Possible Section */}
                <section className="bg-gray-50/50 py-32 border-b border-gray-100 reveal" ref={addToRefs}>
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <span className="text-[#6B38FB] font-black uppercase tracking-[0.3em] text-[10px]">Underwriting Protocol</span>
                                    <h2 className="text-5xl font-black text-gray-900 tracking-tighter leading-[1.1]">
                                        How 0% EMI <br />
                                        <span className="text-[#6B38FB]">Is Possible.</span>
                                    </h2>
                                </div>
                                <p className="text-gray-500 text-lg font-medium leading-relaxed">
                                    Traditional financing relies on high-interest risk premiums. 1Fi leverages your existing **mutual fund holdings as collateral**, eliminating traditional credit risk and enabling zero-interest institutional terms.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        { title: 'Portfolio-Backed Guarantees', desc: 'Your assets stay invested and continue earning while securing your technology purchase.', icon: TrendingUp },
                                        { title: 'Institutional Underwriting', desc: 'Direct partnerships with leading AMCs allow us to offer rates unavailable to retail consumers.', icon: Landmark },
                                        { title: 'Market-Linked Security', desc: 'Our protocol monitors portfolio health in real-time, maintaining a secure LTV ratio.', icon: ShieldCheck }
                                    ].map((item) => (
                                        <div key={item.title} className="flex gap-5">
                                            <div className="w-12 h-12 shrink-0 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-[#6B38FB] shadow-sm">
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-gray-900 uppercase text-xs tracking-widest mb-1">{item.title}</h4>
                                                <p className="text-gray-500 text-sm font-medium">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-[#6B38FB]/5 blur-3xl rounded-full"></div>
                                <div className="relative bg-white rounded-[40px] p-12 border border-purple-100 shadow-2xl">
                                    <div className="flex flex-col gap-8">
                                        <div className="flex items-center justify-between border-b border-gray-50 pb-8">
                                            <div>
                                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">Guaranteed By</p>
                                                <p className="text-xl font-black text-gray-900">Institutional Protocol</p>
                                            </div>
                                            <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center text-[#6B38FB] animate-pulse-subtle">
                                                <ShieldCheck className="w-10 h-10" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-8">
                                            <div className="space-y-1">
                                                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Interest Rate</p>
                                                <p className="text-3xl font-black text-teal-600">0.00%</p>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Verification</p>
                                                <p className="text-xs font-black text-gray-900 bg-gray-100 px-3 py-1 rounded w-fit">INSTANT API</p>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                                                <Lock className="w-3 h-3" /> Secure Underwriting active
                                            </p>
                                            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full w-3/4 bg-[#6B38FB] rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="bg-white py-32 border-b border-gray-100 reveal" ref={addToRefs}>
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20 space-y-4">
                            <span className="text-[#6B38FB] font-black uppercase tracking-[0.3em] text-[10px]">Strategic Flow</span>
                            <h2 className="text-5xl font-black text-gray-900 tracking-tighter">The Protocol Workflow</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                            {[
                                { step: '01', title: 'Asset Selection', desc: 'Secure high-performance hardware assets from our verified catalogue.' },
                                { step: '02', title: 'EMI Selection', desc: 'Customize your repayment velocity with flexible monthly tenures.' },
                                { step: '03', title: 'MF Staking', desc: 'Our smart protocol verifies and stakes your MF holdings as collateral.' },
                                { step: '04', title: 'Instant Delivery', desc: 'Take possession of your assets while your wealth continues to compound.' }
                            ].map((s) => (
                                <div key={s.step} className="space-y-4 group">
                                    <span className="text-5xl font-black text-gray-100 group-hover:text-purple-50 transition-colors duration-300">{s.step}</span>
                                    <h4 className="text-xl font-black text-gray-900 group-hover:text-[#6B38FB] transition-colors duration-300">{s.title}</h4>
                                    <p className="text-gray-500 font-medium leading-relaxed">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trust & Security Section */}
                <section className="py-32 bg-white reveal" ref={addToRefs}>
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-[#6B38FB] font-black uppercase tracking-[0.3em] text-[10px]">Security Framework</span>
                            <h2 className="text-5xl font-black text-gray-900 tracking-tighter mt-4 leading-tight">
                                Bank Grade <br />
                                <span className="text-[#6B38FB]">API Verification.</span>
                            </h2>
                            <p className="text-gray-500 text-lg font-medium mt-8 leading-relaxed">
                                Our platform integrates directly with major depositories (CDSL/NSDL) and AMCs via secure API protocols. Your data is encrypted using military-grade AES-256 standards.
                            </p>
                            <div className="grid grid-cols-2 gap-8 mt-12">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-gray-900">
                                        <Zap className="w-4 h-4 text-[#6B38FB]" />
                                        <h5 className="font-black uppercase text-[11px] tracking-widest">Real-time Pulse</h5>
                                    </div>
                                    <p className="text-gray-500 text-xs font-medium leading-relaxed">Market-linked monitoring ensures baseline portfolio health hourly.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-gray-900">
                                        <Lock className="w-4 h-4 text-[#6B38FB]" />
                                        <h5 className="font-black uppercase text-[11px] tracking-widest">End-to-End Encryption</h5>
                                    </div>
                                    <p className="text-gray-500 text-xs font-medium leading-relaxed">Zero-knowledge data transfer protocols for maximum user privacy.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-[40px] p-10 border border-purple-100 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6">
                                <Shield className="w-24 h-24 text-purple-500/5 rotate-12" />
                            </div>
                            <div className="w-full max-w-sm space-y-5 relative z-10">
                                {[
                                    { label: 'Portfolio Link', status: 'VERIFIED' },
                                    { label: 'AMC Data Sync', status: 'ENCRYPTED' },
                                    { label: 'LTV Verification', status: 'SECURE' }
                                ].map((row, idx) => (
                                    <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5 group hover:border-[#6B38FB]/30 transition-colors duration-300">
                                        <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-[#6B38FB] group-hover:bg-[#6B38FB] group-hover:text-white transition-all duration-300">
                                            <ShieldCheck className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1 space-y-1.5">
                                            <div className="h-1.5 w-24 bg-gray-100 rounded"></div>
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{row.label}</div>
                                        </div>
                                        <div className={`font-black text-[9px] px-2 py-1 rounded bg-green-50 text-green-600 animate-pulse-subtle`}>{row.status}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ProductList;
