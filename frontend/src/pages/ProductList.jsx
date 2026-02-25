import React, { useState, useEffect, useRef } from 'react';
import { getProducts } from '../services/productService';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import CategoryBar from '../components/CategoryBar';
import { Zap, ShieldCheck, Landmark } from 'lucide-react';

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

            </main>

            <Footer />
        </div>
    );
};

export default ProductList;
