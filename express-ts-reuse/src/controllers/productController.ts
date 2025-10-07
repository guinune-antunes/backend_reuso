import { Request, Response } from 'express';
import { Product, productModel } from '../models/product';

let products: Product[] = [
    { id: 1, name: "Notebook Gamer", price: 7500.00 },
    { id: 2, name: "Mouse Óptico", price: 120.50 },
    { id: 3, name: "Teclado Mecânico", price: 450.00 },
];

export const productController = {
  getAllProducts: (req: Request, res: Response) => {
    const products = productModel.findAll();
    res.json(products);
  },

  getProductById: (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const product = productModel.findById(id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Produto não encontrado" });
    }
  },
};