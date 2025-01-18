
import {Schema,model} from 'mongoose'


const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['electronics', 'clothing', 'home-appliances', 'books', 'toys', 'other'], 
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
  brand: {
    type: String,
    trim: true,
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = model('product', productSchema);

export {Product}
