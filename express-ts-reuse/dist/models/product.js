"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModel = void 0;
// Simula um banco de dados de produtos
const products = [
    { id: 1, name: "Notebook Gamer", price: 7500.00 },
    { id: 2, name: "Mouse Óptico", price: 120.50 },
    { id: 3, name: "Teclado Mecânico", price: 450.00 },
];
// Exporta o "banco de dados" de produtos
exports.productModel = {
    findAll: () => products,
    findById: (id) => products.find(p => p.id === id),
};
