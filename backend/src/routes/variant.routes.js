const express = require('express');
const router = express.Router();
const variantController = require('../controllers/variant.controller');

router.get('/:id/emi-plans', variantController.getEMIPlansByVariantId);

module.exports = router;
