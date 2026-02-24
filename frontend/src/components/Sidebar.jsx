import React from 'react';
import { ChevronRight, Search } from 'lucide-react';

const Sidebar = () => {
    return (
        <div className="w-[280px] flex-shrink-0 hidden lg:block pr-8 space-y-8 min-h-screen">
            <div>
                <h3 className="text-lg font-bold mb-6">Filters</h3>

                {/* Downpayment Filter */}
                <div className="space-y-4 mb-8">
                    <h4 className="text-sm font-bold text-gray-800">Downpayment (Pay Now)</h4>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300 group-hover:border-[#10b1c1] transition-colors" />
                        <span className="text-sm text-gray-600">₹1,999 Or Less</span>
                    </label>
                </div>

                {/* EMI Tenure Filter */}
                <div className="space-y-4 mb-8">
                    <h4 className="text-sm font-bold text-gray-800">EMI Tenure</h4>
                    {[2, 4, 6].map(m => (
                        <label key={m} className="flex items-center gap-3 cursor-pointer group">
                            <div className="w-4 h-4 rounded-full border-2 border-gray-300 group-hover:border-[#10b1c1] transition-colors" />
                            <span className="text-sm text-gray-600">{m} Months Or More</span>
                        </label>
                    ))}
                </div>

                {/* Price Filter */}
                <div className="space-y-4 mb-8">
                    <h4 className="text-sm font-bold text-gray-800">Price</h4>
                    {[
                        '₹ 5,000 To ₹ 10,000',
                        '₹ 10,000 To ₹ 15,000',
                        '₹ 15,000 To ₹ 30,000',
                        'Above ₹ 30,000'
                    ].map(p => (
                        <label key={p} className="flex items-center gap-3 cursor-pointer group">
                            <div className="w-4 h-4 rounded-full border-2 border-gray-300 group-hover:border-[#10b1c1] transition-colors" />
                            <span className="text-sm text-gray-600">{p}</span>
                        </label>
                    ))}
                    <div className="flex gap-2 items-center mt-4">
                        <input type="text" placeholder="Min" className="w-20 border rounded px-2 py-1 text-xs outline-[#10b1c1]" />
                        <input type="text" placeholder="Max" className="w-20 border rounded px-2 py-1 text-xs outline-[#10b1c1]" />
                        <button className="bg-[#10b1c1] p-1.5 rounded-full text-white">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Categories Filter */}
                <div className="space-y-4 mb-8">
                    <h4 className="text-sm font-bold text-gray-800">Categories</h4>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" checked readOnly className="w-4 h-4 rounded accent-[#10b1c1]" />
                        <span className="text-sm font-bold text-[#10b1c1]">Smart Phones</span>
                    </label>
                </div>

                {/* Brand Filter */}
                <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center">
                        <h4 className="text-sm font-bold text-gray-800 uppercase">Brand</h4>
                        <Search className="w-4 h-4 text-gray-400" />
                    </div>
                    {['REDMI', 'REALME', 'ONEPLUS', 'APPLE', 'SAMSUNG'].map(brand => (
                        <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 rounded accent-[#10b1c1]" />
                            <span className="text-sm text-gray-600 uppercase">{brand}</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
