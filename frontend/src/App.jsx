import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Markets from './pages/Markets';
import Support from './pages/Support';
import Governance from './pages/Governance';
import Checkout from './pages/Checkout';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/products/:slug" element={<ProductDetail />} />
                <Route path="/markets" element={<Markets />} />
                <Route path="/support" element={<Support />} />
                <Route path="/governance" element={<Governance />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </Router>
    );
};

export default App;
