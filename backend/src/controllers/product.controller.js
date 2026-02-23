const prisma = require('../config/prisma');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            include: {
                variants: { take: 1 },
                emi_plans: { take: 1 }
            }
        });
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProductBySlug = async (req, res) => {
    const { slug } = req.params;
    try {
        const product = await prisma.product.findUnique({
            where: { slug },
            include: {
                variants: true,
                emi_plans: true
            }
        });
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
