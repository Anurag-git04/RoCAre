const Product = require("../models/Product");

// Get all products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Get single product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Search products
exports.searchProducts = async (req, res) => {
    try {
        const query = req.query.q;
        const products = await Product.find({ name: new RegExp(query, "i") });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
