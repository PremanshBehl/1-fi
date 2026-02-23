const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Routes
const productRoutes = require('./routes/product.routes');

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('1Fi EMI App API is running with PostgreSQL & Prisma...');
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
