import React from 'react';

const categories = [
    'Mobiles',
    'Electronics',
    'TV, AC & Appliances',
    'Kitchen & Home',
    'Health & Wellness',
    'Fashion',
    'Baby & Kids',
    'Sports & Fitness'
];

const CategoryBar = ({ activeCategory, setActiveCategory }) => {
    return (
        <div className="sticky top-[65px] left-0 right-0 z-40 bg-white border-b border-gray-100 py-4 overflow-x-auto scrollbar-hide">
            <div className="max-w-7xl mx-auto px-6 flex justify-center items-center gap-12 min-w-max">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-[13px] font-semibold transition-all cursor-pointer whitespace-nowrap relative py-1 ${activeCategory === cat
                            ? 'text-[#00AEEF] font-bold'
                            : 'text-gray-500 hover:text-gray-900'
                            }`}
                    >
                        {cat}
                        {activeCategory === cat && (
                            <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-[#00AEEF]"></div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryBar;
