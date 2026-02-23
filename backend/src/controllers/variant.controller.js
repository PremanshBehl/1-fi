const Product = require('../models/Product');

exports.getEMIPlansByVariantId = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findOne({ "variants._id": id });
        if (!product) return res.status(404).json({ error: 'Variant not found' });

        const variant = product.variants.id(id);
        res.json(variant.emiPlans);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
