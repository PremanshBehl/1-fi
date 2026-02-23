const mongoose = require('mongoose');

const emiPlanSchema = new mongoose.Schema({
    tenure: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    cashback: { type: Number, required: true },
    monthlyPayment: { type: Number, required: true }
}, {
    timestamps: true
});

module.exports = emiPlanSchema;
