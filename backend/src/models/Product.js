const mongoose = require('mongoose');
const emiPlanSchema = require('./EMIPlan');

const variantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    storage: { type: String, required: true },
    color: { type: String, required: true },
    mrp: { type: Number, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    emiPlans: [emiPlanSchema]
}, {
    timestamps: true
});

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    variants: [variantSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
