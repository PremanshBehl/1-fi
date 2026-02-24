import axios from 'axios';

const API_BASE_URL = (import.meta.env.VITE_API_URL || '') + '/api/products';

export const getProducts = async () => {
    const response = await axios.get(API_BASE_URL);
    return response.data;
};

export const getProductBySlug = async (slug) => {
    const response = await axios.get(`${API_BASE_URL}/${slug}`);
    return response.data;
};
