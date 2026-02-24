import { useState, useEffect } from 'react';
import { getProductBySlug } from '../services/productService';

export const useProduct = (slug) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!slug) return;

        const fetch = async () => {
            setLoading(true);
            try {
                const data = await getProductBySlug(slug);
                setProduct(data);
                setError(null);
            } catch (err) {
                console.error("Error fetching product", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetch();
    }, [slug]);

    return { product, loading, error };
};
