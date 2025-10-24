"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const uuserRoutes_1 = __importDefault(require("./routes/uuserRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.use('/users', uuserRoutes_1.default);
app.use('/products', productRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT} 🚀`);
});
