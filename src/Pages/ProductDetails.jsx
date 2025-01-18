import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import Loading from '../Components/Common/Loading';

const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await res.json();
                setProduct(data);
                setLoading(false);
            } catch (error) {
                console.log(error.message);
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl"><Loading /></div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl">Product not found</div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Product Image Section */}
                <div className="flex justify-center items-center bg-white rounded-lg p-4">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-96 object-contain"
                    />
                </div>

                {/* Product Info Section */}
                <div className="flex flex-col space-y-4">
                    <div>
                        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="flex items-center">
                                {[...Array(5)].map((_, index) => (
                                    <Star
                                        key={index}
                                        className={`w-5 h-5 ${index < Math.floor(product.rating.rate)
                                                ? 'fill-yellow-400 text-yellow-400'
                                                : 'text-gray-300'
                                            }`}
                                    />
                                ))}
                                <span className="ml-2 text-sm text-gray-600">
                                    ({product.rating.count} reviews)
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="text-3xl font-bold text-blue-600">
                        ₹{product.price}
                    </div>

                    <div className="border-t border-b py-4">
                        <p className="text-gray-700">
                            {product.description}
                        </p>
                    </div>

                    <div className="flex space-x-4">
                        <button className="flex-1 h-12 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center justify-center">
                            <ShoppingCart className="mr-2 h-5 w-5" />
                            Add to Cart
                        </button>
                        <button className="w-12 h-12 p-2 border border-gray-300 rounded-md hover:bg-gray-100">
                            <Heart className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <div className="text-sm">
                            <div className="flex justify-between py-2">
                                <span className="font-medium">Category:</span>
                                <span className="text-gray-600 capitalize">{product.category}</span>
                            </div>
                            <div className="flex justify-between py-2">
                                <span className="font-medium">Product ID:</span>
                                <span className="text-gray-600">{product.id}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;