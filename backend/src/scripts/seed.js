const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/Product');
const connectDB = require('../config/db');

dotenv.config();

const seed = async () => {
    try {
        await connectDB();

        // Clear existing data
        await Product.deleteMany({});

        console.log('Old data cleared.');

        const sampleProducts = [
            {
                name: 'iPhone 17 Pro',
                description: 'The latest iPhone with incredible features.',
                variants: [
                    {
                        name: 'iPhone 17 Pro 256GB Orange',
                        storage: '256GB',
                        color: 'Orange',
                        mrp: 134900,
                        price: 127400,
                        imageUrl: 'https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?q=80&w=2070&auto=format&fit=crop',
                        emiPlans: [
                            { tenure: 3, monthlyPayment: 44967, interestRate: 0, cashback: 7500 },
                            { tenure: 6, monthlyPayment: 22483, interestRate: 0, cashback: 7500 },
                            { tenure: 12, monthlyPayment: 11242, interestRate: 0, cashback: 7500 },
                            { tenure: 24, monthlyPayment: 5621, interestRate: 0, cashback: 7500 },
                            { tenure: 36, monthlyPayment: 4297, interestRate: 10.5, cashback: 7500 },
                            { tenure: 48, monthlyPayment: 3385, interestRate: 10.5, cashback: 7500 },
                            { tenure: 60, monthlyPayment: 2842, interestRate: 10.5, cashback: 7500 }
                        ]
                    },
                    {
                        name: 'iPhone 17 Pro 512GB Blue',
                        storage: '512GB',
                        color: 'Blue',
                        mrp: 154900,
                        price: 147400,
                        imageUrl: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=2059&auto=format&fit=crop',
                        emiPlans: [
                            { tenure: 6, monthlyPayment: 24567, interestRate: 0, cashback: 5000 },
                            { tenure: 12, monthlyPayment: 12283, interestRate: 0, cashback: 5000 },
                            { tenure: 24, monthlyPayment: 6142, interestRate: 10.5, cashback: 5000 }
                        ]
                    }
                ]
            },
            {
                name: 'Samsung S24 Ultra',
                description: 'The ultimate Android experience with Galaxy AI.',
                variants: [
                    {
                        name: 'Samsung S24 Ultra 256GB Titanium Gray',
                        storage: '256GB',
                        color: 'Titanium Gray',
                        mrp: 129999,
                        price: 119999,
                        imageUrl: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=2072&auto=format&fit=crop',
                        emiPlans: [
                            { tenure: 6, monthlyPayment: 20000, interestRate: 0, cashback: 3000 },
                            { tenure: 12, monthlyPayment: 10000, interestRate: 0, cashback: 3000 }
                        ]
                    },
                    {
                        name: 'Samsung S24 Ultra 512GB Titanium Black',
                        storage: '512GB',
                        color: 'Titanium Black',
                        mrp: 139999,
                        price: 129999,
                        imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=2070&auto=format&fit=crop',
                        emiPlans: [
                            { tenure: 6, monthlyPayment: 21667, interestRate: 0, cashback: 4000 },
                            { tenure: 12, monthlyPayment: 10833, interestRate: 0, cashback: 4000 }
                        ]
                    }
                ]
            },
            {
                name: 'Google Pixel 9 Pro',
                description: 'The most advanced Pixel yet, with Gemini AI.',
                variants: [
                    {
                        name: 'Google Pixel 9 Pro 128GB Obsidian',
                        storage: '128GB',
                        color: 'Obsidian',
                        mrp: 109999,
                        price: 99999,
                        imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2027&auto=format&fit=crop',
                        emiPlans: [
                            { tenure: 6, monthlyPayment: 16667, interestRate: 0, cashback: 2000 },
                            { tenure: 12, monthlyPayment: 8333, interestRate: 0, cashback: 2000 }
                        ]
                    },
                    {
                        name: 'Google Pixel 9 Pro 256GB Porcelain',
                        storage: '256GB',
                        color: 'Porcelain',
                        mrp: 119999,
                        price: 109999,
                        imageUrl: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=2081&auto=format&fit=crop',
                        emiPlans: [
                            { tenure: 6, monthlyPayment: 18333, interestRate: 0, cashback: 3000 },
                            { tenure: 12, monthlyPayment: 9167, interestRate: 0, cashback: 3000 }
                        ]
                    }
                ]
            }
        ];

        await Product.insertMany(sampleProducts);
        console.log('MongoDB Seeded successfully!');
        process.exit();
    } catch (error) {
        console.error('Error seeding MongoDB:', error);
        process.exit(1);
    }
};

seed();
