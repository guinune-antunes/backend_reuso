// Define a interface do Produto
export interface Product {
  id: number;
  name: string;
  price: number;
}

// Simula um banco de dados de produtos
const products: Product[] = [
  { id: 1, name: "Notebook Gamer", price: 7500.00 },
  { id: 2, name: "Mouse Óptico", price: 120.50 },
  { id: 3, name: "Teclado Mecânico", price: 450.00 },
];

// Exporta o "banco de dados" de produtos
export const productModel = {
  findAll: (): Product[] => products,
  findById: (id: number): Product | undefined => products.find(p => p.id === id),
};