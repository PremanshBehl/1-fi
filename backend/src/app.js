const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

const corsOptions = {
    origin: function (origin, callback) {
        const allowedOrigins = [
            'https://1-fi-sigma.vercel.app',
            'https://1-fi-gray.vercel.app',
            'http://localhost:5173',
            'http://localhost:5174',
        ];
        // Allow requests with no origin (mobile apps, curl, Render health checks)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

// Routes
const productRoutes = require('./routes/product.routes');

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.json({ message: '1Fi EMI App API is running with PostgreSQL & Prisma.' });
});

app.get('/health', (req, res) => {
    const memoryUsage = process.memoryUsage();
    res.status(200).json({
        status: 'ok',
        uptime: `${Math.floor(process.uptime())}s`,
        environment: process.env.NODE_ENV || 'development',
        timestamp: new Date().toISOString(),
        memory: {
            rss: `${Math.round(memoryUsage.rss / 1024 / 1024)} MB`,
            heapUsed: `${Math.round(memoryUsage.heapUsed / 1024 / 1024)} MB`,
            heapTotal: `${Math.round(memoryUsage.heapTotal / 1024 / 1024)} MB`,
        },
    });
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
