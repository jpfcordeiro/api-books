/* --- IMPORTANDO BIBLIOTECAS --- */
import express from "express";
//import mongoose from "mongoose";

/* --- IMPORTANDO CONEXÃO COM O ATLAS --- */
import mongoose from "./config/dbConnection.js";

/* --- IMPORTANDO MODELS --- */
import Book from "./models/books.js";

/* --- IMPORTANDO ROTAS --- */
import bookRoutes from "./routes/bookRoutes.js";

/* --- CONFIGURAÇÕES DO EXPRESS --- */
const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/', bookRoutes);

/* --- INICIANDO CONEXÃO COM O BANCO --- */
//mongoose.connect("mongodb://127.0.0.1:27017/api-bookshelf");

/* --- CONFIGURAÇÃO DE PORTA PARA A API --- */
const port = 8080;
app.listen(port, (error) => {
    if(error) {console.log(error); }
    console.log(`API rodando em http://localhost:${port}.`);
});