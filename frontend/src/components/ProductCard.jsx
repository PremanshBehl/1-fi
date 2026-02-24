import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const emiAmount = Math.round(product.base_price / 12);

    return (
        <div
            onClick={() => navigate(`/products/${product.slug}`)}
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group flex flex-col h-full"
        >
            <div className="h-64 bg-gray-50 flex items-center justify-center p-8 border-b border-gray-100 relative overflow-hidden">
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                    <span className="bg-yellow-400 text-black text-[10px] font-black px-2 py-1 rounded-sm uppercase tracking-tighter shadow-sm animate-pulse-subtle">0% EMI</span>
                    {product.mrp > product.base_price && (
                        <span className="bg-teal-500 text-white text-[10px] font-black px-2 py-1 rounded-sm uppercase tracking-tighter shadow-sm">
                            {Math.round(((product.mrp - product.base_price) / product.mrp) * 100)}% OFF
                        </span>
                    )}
                </div>
                <img
                    src={product.image_url}
                    alt={product.name}
                    className="h-full w-full object-contain group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
            </div>

            <div className="p-6 flex flex-col flex-1 gap-2">
                <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-extrabold text-[#6B38FB] uppercase tracking-[0.2em]">{product.variants?.[0]?.color || 'In Stock'}</span>
                    <h3 className="text-xl font-black text-gray-900 leading-tight group-hover:text-[#6B38FB] transition-colors">{product.name}</h3>
                </div>

                <div className="mt-auto">
                    <div className="py-4 px-5 bg-teal-50/50 rounded-xl border border-teal-100/50 flex flex-col items-center justify-center mb-4 group-hover:bg-teal-50 transition-colors duration-300">
                        <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest mb-1">Monthly EMI</span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-black text-teal-600">
                                ₹{emiAmount.toLocaleString()}
                            </span>
                            <span className="text-teal-600/70 font-bold text-sm">/ mo</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-end bg-gray-50/50 p-4 rounded-xl border border-gray-100/50">
                        <div className="flex flex-col">
                            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Total Price</span>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-black text-gray-700">
                                    ₹{product.base_price.toLocaleString()}
                                </span>
                                {product.mrp > product.base_price && (
                                    <span className="text-[10px] text-gray-400 line-through font-medium">
                                        ₹{product.mrp.toLocaleString()}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-[#6B38FB] group-hover:text-white group-hover:translate-x-1 transition-all shadow-sm text-gray-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
