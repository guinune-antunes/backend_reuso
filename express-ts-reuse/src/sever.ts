import express from 'express';
import morgan from 'morgan'; 


import userRoutes from './routes/uuserRoutes';
import productRoutes from './routes/productRoutes';

const app = express();
const PORT = 3000;


app.use(express.json());

app.use(morgan('dev'));

app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} 🚀`);
});