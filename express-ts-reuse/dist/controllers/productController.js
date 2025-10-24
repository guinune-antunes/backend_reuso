"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_1 = require("../models/product");
let products = [
    { id: 1, name: "Notebook Gamer", price: 7500.00 },
    { id: 2, name: "Mouse Óptico", price: 120.50 },
    { id: 3, name: "Teclado Mecânico", price: 450.00 },
];
exports.productController = {
    getAllProducts: (req, res) => {
        const products = product_1.productModel.findAll();
        res.json(products);
    },
    getProductById: (req, res) => {
        const id = parseInt(req.params.id, 10);
        const product = product_1.productModel.findById(id);
        if (product) {
            res.json(product);
        }
        else {
            res.status(404).json({ message: "Produto não encontrado" });
        }
    },
};
