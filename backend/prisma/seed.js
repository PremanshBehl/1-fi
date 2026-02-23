const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    // Clear existing data
    await prisma.eMIPlan.deleteMany({});
    await prisma.variant.deleteMany({});
    await prisma.product.deleteMany({});

    console.log('Old data cleared.');

    // 1. iPhone 17 Pro
    const iphone = await prisma.product.create({
        data: {
            name: 'iPhone 17 Pro',
            slug: 'iphone-17-pro',
            description: 'The latest iPhone with incredible features.',
            base_price: 127400,
            mrp: 134900,
            image_url: '/images/iphone-silver.png',
            variants: {
                create: [
                    { color: 'Titanium Purple', storage: '256GB', price_adjustment: 0, image_url: '/images/iphone-purple.png' },
                    { color: 'Titanium Orange', storage: '256GB', price_adjustment: 0, image_url: '/images/iphone-orange.png' },
                    { color: 'Titanium Silver', storage: '256GB', price_adjustment: 0, image_url: '/images/iphone-silver.png' },
                ],
            },
            emi_plans: {
                create: [
                    { tenure_months: 3, monthly_amount: 44966.67, interest_rate: 0, downpayment: 0, cashback: 7500, total_amount: 134900 },
                    { tenure_months: 6, monthly_amount: 22483.33, interest_rate: 0, downpayment: 0, cashback: 7500, total_amount: 134900 },
                    { tenure_months: 12, monthly_amount: 11241.67, interest_rate: 0, downpayment: 0, cashback: 7500, total_amount: 134900 },
                    { tenure_months: 36, monthly_amount: 4653.64, interest_rate: 10.5, downpayment: 0, cashback: 0, total_amount: 167531 },
                ],
            },
        },
    });

    // 2. Samsung S24 Ultra
    const samsung = await prisma.product.create({
        data: {
            name: 'Samsung S24 Ultra',
            slug: 'samsung-s24-ultra',
            description: 'The ultimate Android experience with Galaxy AI.',
            base_price: 119999,
            mrp: 129999,
            image_url: '/images/s24-gray.png',
            variants: {
                create: [
                    { color: 'Titanium Gray', storage: '256GB', price_adjustment: 0, image_url: '/images/s24-gray.png' },
                    { color: 'Titanium Black', storage: '512GB', price_adjustment: 10000, image_url: '/images/s24-black.png' },
                ],
            },
            emi_plans: {
                create: [
                    { tenure_months: 6, monthly_amount: 19999.83, interest_rate: 0, downpayment: 0, cashback: 3000, total_amount: 119999 },
                    { tenure_months: 12, monthly_amount: 9999.92, interest_rate: 0, downpayment: 0, cashback: 3000, total_amount: 119999 },
                    { tenure_months: 24, monthly_amount: 6049.96, interest_rate: 10.5, downpayment: 0, cashback: 0, total_amount: 145199 },
                ],
            },
        },
    });

    // 3. Realme P4 Power
    const realme = await prisma.product.create({
        data: {
            name: 'Realme P4 Power',
            slug: 'realme-p4-power',
            description: 'Power meets style with the Realme P4.',
            base_price: 24999,
            mrp: 29999,
            image_url: '/images/realme-blue.png',
            variants: {
                create: [
                    { color: 'Power Gray', storage: '128GB', price_adjustment: 0, image_url: '/images/realme-gray.png' },
                    { color: 'Energy Blue', storage: '256GB', price_adjustment: 5000, image_url: '/images/realme-blue.png' },
                ],
            },
            emi_plans: {
                create: [
                    { tenure_months: 3, monthly_amount: 8333, interest_rate: 0, downpayment: 0, cashback: 1000, total_amount: 24999 },
                    { tenure_months: 6, monthly_amount: 4166.5, interest_rate: 0, downpayment: 0, cashback: 1000, total_amount: 24999 },
                    { tenure_months: 9, monthly_amount: 2996.44, interest_rate: 10.5, downpayment: 0, cashback: 0, total_amount: 26968 },
                ],
            },
        },
    });

    console.log('PostgreSQL Seeded successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
