import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProduct } from '../hooks/useProduct';
import Navbar from '../components/Navbar';

import { ChevronLeft } from 'lucide-react';

const ProductDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { product, loading, error } = useProduct(slug);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [selectedVariant, setSelectedVariant] = useState(null);

    useEffect(() => {
        if (product) {
            setSelectedPlan(product.emi_plans[0]);
            setSelectedVariant(product.variants[0]);
        }
    }, [product]);

    const getColorHex = (colorName) => {
        const colors = {
            'Titanium Purple': '#34344e',
            'Titanium Orange': '#e36d33',
            'Titanium Silver': '#e2e2e2',
            'Orange': '#e36d33',
            'Blue': '#34344e',
            'Power Gray': '#4a4a4a',
            'Energy Blue': '#007aff',
            'Titanium Gray': '#8e8e93',
            'Titanium Black': '#1c1c1e',
        };
        return colors[colorName] || '#cccccc';
    };

    if (loading) return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="animate-pulse flex flex-col items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full"></div>
                <span className="font-bold text-gray-400 uppercase tracking-widest text-[10px]">Verifying Underwriting</span>
            </div>
        </div>
    );

    if (error || !product) return (
        <div className="flex items-center justify-center min-h-screen bg-white text-gray-500 font-medium">
            Product not found.
        </div>
    );

    const basePrice = product.base_price + (selectedVariant?.price_adjustment || 0);
    const mrp = product.mrp + (selectedVariant?.price_adjustment || 0);
    const discountPercent = Math.round(((mrp - basePrice) / mrp) * 100);

    return (
        <div className="h-screen w-full bg-[#fcfcfc] overflow-hidden flex flex-col">
            <Navbar />

            <div className="flex-1 max-w-7xl mx-auto w-full px-6 flex items-center justify-center pt-10 pb-10">
                <div className="flex flex-col lg:flex-row gap-12 items-start h-full w-full overflow-hidden">

                    {/* Left Column - Product Visualization */}
                    <div className="w-full lg:w-[480px] h-full flex flex-col gap-6 shrink-0">
                        <div className="flex-1 bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm flex flex-col items-center group relative overflow-hidden min-h-0">
                            <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                                <span className="bg-[#00AEEF] text-white text-[9px] font-black px-2.5 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-blue-500/20">Available</span>
                                {discountPercent > 0 && (
                                    <span className="bg-teal-500 text-white text-[9px] font-black px-2.5 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-teal-500/20">-{discountPercent}% OFF</span>
                                )}
                            </div>

                            <div className="flex-1 w-full flex items-center justify-center min-h-0">
                                <img
                                    src={selectedVariant?.image_url || product.image_url}
                                    alt={product.name}
                                    className="max-w-full max-h-full object-contain transition-all duration-700 ease-out group-hover:scale-105"
                                />
                            </div>

                            <div className="w-full pt-6 border-t border-gray-50">
                                <div className="flex justify-between items-end">
                                    <div className="space-y-1">
                                        <p className="text-[#00AEEF] font-black uppercase tracking-[0.2em] text-[9px]">Finish</p>
                                        <h3 className="text-lg font-black text-gray-900 leading-none">{selectedVariant?.color || 'Standard'}</h3>
                                    </div>
                                    <div className="flex gap-2.5">
                                        {product.variants.map((v) => (
                                            <button
                                                key={v.id}
                                                onClick={() => setSelectedVariant(v)}
                                                className={`group relative flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 ${selectedVariant?.id === v.id ? 'border-[#00AEEF] scale-110' : 'border-gray-100 hover:border-gray-200'}`}
                                            >
                                                <div
                                                    className="w-5.5 h-5.5 rounded-full shadow-inner"
                                                    style={{ backgroundColor: getColorHex(v.color) }}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Strategic Content */}
                        <div className="bg-blue-50/50 rounded-[32px] p-6 border border-blue-100/50 shrink-0">
                            <h4 className="text-[10px] font-black text-[#00AEEF] uppercase tracking-[0.2em] mb-2">Protocol Insight</h4>
                            <p className="text-gray-500 text-xs font-medium leading-relaxed">
                                Our institutional protocol partners with manufacturers and AMCs to subsidize interest using portfolio yields.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Underwriting & EMI Plans */}
                    <div className="flex-1 h-full flex flex-col min-w-0">
                        <div className="mb-6 shrink-0">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="w-6 h-[2px] bg-[#00AEEF]"></span>
                                <span className="text-[#00AEEF] font-black uppercase tracking-[0.3em] text-[10px]">Asset Underwriting</span>
                            </div>
                            <h1 className="text-4xl font-black text-gray-900 tracking-tighter leading-tight mb-2">{product.name}</h1>
                            <div className="flex items-center gap-3">
                                <p className="text-3xl font-black text-gray-900">₹{basePrice.toLocaleString('en-IN')}</p>
                                <p className="text-gray-400 line-through text-sm font-bold">₹{mrp.toLocaleString('en-IN')}</p>
                                <span className="bg-green-100 text-green-700 text-[9px] font-black px-2 py-1 rounded">SAVE ₹{(mrp - basePrice).toLocaleString('en-IN')}</span>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar mb-6 min-h-0">
                            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Available Strategic Tenures</h3>
                            <div className="space-y-3">
                                {product.emi_plans.map((plan) => {
                                    const isSelected = selectedPlan?.id === plan.id;
                                    const planMonthlyAmount = Math.round((plan.monthly_amount / product.base_price) * basePrice);
                                    const totalPayable = Math.round((plan.total_amount / product.base_price) * basePrice);

                                    return (
                                        <div key={plan.id} className="relative group">
                                            <button
                                                onClick={() => setSelectedPlan(isSelected ? null : plan)}
                                                className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ${isSelected
                                                    ? 'border-teal-500 bg-teal-50/20'
                                                    : 'border-gray-100 hover:border-gray-200 bg-white'
                                                    }`}
                                            >
                                                <div className="flex justify-between items-center">
                                                    <div className="space-y-1">
                                                        <div className="flex items-center gap-2">
                                                            <span className={`text-2xl font-black transition-colors ${isSelected ? 'text-teal-600' : 'text-gray-900'}`}>
                                                                ₹{planMonthlyAmount.toLocaleString('en-IN')}
                                                            </span>
                                                            <span className="text-gray-400 font-bold text-xs">/ mo</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-xs font-bold">
                                                            <span className="text-gray-500">{plan.tenure_months} months</span>
                                                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                            <span className={plan.interest_rate === 0 ? 'text-teal-600' : 'text-gray-500'}>
                                                                {plan.interest_rate === 0 ? '0% Interest' : `${plan.interest_rate}% Interest`}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? 'bg-teal-500 border-teal-500' : 'border-gray-200 shadow-sm'}`}>
                                                        {isSelected ? (
                                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7" /></svg>
                                                        ) : (
                                                            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M9 5l7 7-7 7" /></svg>
                                                        )}
                                                    </div>
                                                </div>
                                            </button>

                                            {isSelected && (
                                                <div className="mx-2 p-5 bg-white border-x-2 border-b-2 border-teal-500/20 rounded-b-2xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                                                    <div className="grid grid-cols-2 gap-y-3">
                                                        {[
                                                            { label: 'Downpayment', value: '₹0.00' },
                                                            { label: 'Cashback', value: `₹${plan.cashback.toLocaleString('en-IN')}`, color: 'text-green-600' },
                                                            { label: 'Interest', value: `${plan.interest_rate}%` },
                                                            { label: 'Fee', value: '₹0.00' },
                                                        ].map((item) => (
                                                            <div key={item.label}>
                                                                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">{item.label}</p>
                                                                <p className={`text-xs font-black ${item.color || 'text-gray-900'}`}>{item.value}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="pt-3 border-t border-gray-50 flex justify-between items-center">
                                                        <p className="text-[9px] font-black text-gray-900 uppercase tracking-widest">Total Payable</p>
                                                        <p className="text-base font-black text-gray-900">₹{totalPayable.toLocaleString('en-IN')}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="bg-gray-950 rounded-3xl p-6 flex flex-col gap-4 shadow-xl shadow-gray-950/20 border border-white/5 shrink-0">
                            <div className="flex justify-between items-center text-white">
                                <div className="space-y-0.5">
                                    <p className="text-gray-400 text-[9px] font-black uppercase tracking-widest">Est. Settlement</p>
                                    <p className="text-xl font-black">₹{selectedPlan ? Math.round((selectedPlan.monthly_amount / product.base_price) * basePrice).toLocaleString('en-IN') : '--'}</p>
                                </div>
                                <div className="text-right space-y-0.5">
                                    <p className="text-gray-400 text-[9px] font-black uppercase tracking-widest">Downpayment</p>
                                    <p className="text-xl font-black text-[#00AEEF]">₹0.00</p>
                                </div>
                            </div>
                            <button
                                onClick={() => navigate('/checkout')}
                                className="w-full bg-[#00AEEF] text-white py-4.5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#008cc0] hover:scale-[1.01] active:scale-95 transition-all shadow-xl shadow-blue-500/20"
                            >
                                Initiate Underwriting
                            </button>
                            <p className="text-center text-gray-500 text-[9px] font-black uppercase tracking-widest">Secure Bank Grade API Integration</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default ProductDetail;
