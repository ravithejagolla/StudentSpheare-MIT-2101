
import { Product } from "../models/productSchema.js";


export const createProduct = async (req, res) => {
    const { name, description, price, category } = req.body;

    const products=new Product({
        name,
        description,
        price,
        category
    })
    await products.save()
    res.status(201).json({
        msg:"Product saved successfully",
        products
    });
}
export const getProduct= async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (err) {
      res.status(404).json({ error: 'Product not found' });
    }
  }

  
export const products= async (req, res) => {
    const { category } = req.query;
  
    let filter = {};
    if (category) filter.category = category;
  
    try {
      const products = await Product.find(filter); 
      res.json(products);
    } catch (err) {
      res.status(500).json({ error: 'Internal Server error' });
    }
  }
  