# 1Fi EMI App - Full Stack Developer Assignment

A full-stack web application that displays products (smartphones) with multiple EMI plans backed by mutual funds, designed to match the premium aesthetics of Snapmint.

## Tech Stack
- **Frontend**: React (Vite), Tailwind CSS, React Router, Lucide React, Axios.
- **Backend**: Node.js, Express, Mongoose (MongoDB).
- **Database**: MongoDB (Local).

## Features
- **Product Listing**: Browse through a curated list of smartphones.
- **Product Details**: View specific product information, images, and pricing.
- **Variant Selection**: Switch between different storage and color variants.
- **Dynamic EMI Plans**: View various EMI tenures with interest rates and cashback information.
- **Responsive UI**: Premium design optimized for both mobile and desktop.

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- MongoDB running locally on `localhost:27017`

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Seed the database with sample products:
   ```bash
   node src/scripts/seed.js
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```
   The backend will run on `http://localhost:5001`.

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`.

## API Endpoints
- `GET /api/products`: Fetch all products (with first variant only).
- `GET /api/products/:id`: Fetch full product details including all variants and EMI plans.
- `GET /api/variants/:id/emi-plans`: Fetch specific EMI plans for a variant.

## Database Schema

### Product
- `name`: String
- `description`: String
- `variants`: Array of Variant objects

### Variant
- `name`: String
- `storage`: String
- `color`: String
- `mrp`: Number
- `price`: Number
- `imageUrl`: String
- `emiPlans`: Array of EMI Plan objects

### EMI Plan
- `tenure`: Number (months)
- `interestRate`: Number (%)
- `cashback`: Number (Amount)
- `monthlyPayment`: Number (Amount)
