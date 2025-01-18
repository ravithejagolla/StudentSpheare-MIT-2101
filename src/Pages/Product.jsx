import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Star, Eye } from 'lucide-react';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [sortedProducts, setSortedProducts] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                setProducts(response.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(true);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }


    //Sorting products 
    const handleSortChange = (e) => {
        setSortedProducts(e.target.value)
    }

    const newSortedProducts = products.sort((a, b) => {
        if (sortedProducts === "default") {
            return
        } else if (sortedProducts === "l2h") {
            return a.price - b.price
        } else if (sortedProducts === "h2l") {
            return b.price - a.price
        }
    })


    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">
                        All Products <span className="text-gray-500 text-lg">({products.length} items)</span>
                    </h1>
                    <div className="flex gap-4">
                        <select onChange={handleSortChange} className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="default">Sort by</option>
                            <option value="l2h">Price: Low to High</option>
                            <option value="h2l">Price: High to Low</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {newSortedProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
                        >
                            {/* Product Image */}
                            <div className="relative group p-4 bg-white h-48 flex items-center justify-center">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <button
                                        onClick={() => navigate(`/products/${product.id}`)}
                                        className="bg-white text-gray-800 p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300"
                                    >
                                        <Eye className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-4 flex flex-col flex-grow">
                                <div className="flex-grow">
                                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">
                                        {product.category}
                                    </p>
                                    <h2 className="text-gray-800 font-semibold mb-2 line-clamp-2">
                                        {product.title}
                                    </h2>

                                    {/* Rating */}
                                    <div className="flex items-center mb-2">
                                        {[...Array(5)].map((_, index) => (
                                            <Star
                                                key={index}
                                                className={`w-4 h-4 ${index < Math.floor(product.rating.rate)
                                                    ? 'fill-yellow-400 text-yellow-400'
                                                    : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                        <span className="ml-1 text-sm text-gray-600">
                                            ({product.rating.count})
                                        </span>
                                    </div>
                                </div>

                                {/* Price and View Details Button */}
                                <div className="mt-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xl font-bold text-gray-800">
                                            ${product.price}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => navigate(`/products/${product.id}`)}
                                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center"
                                    >
                                        <Eye className="h-5 w-5 mr-2" />
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product;