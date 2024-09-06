import express from "express";
import bookControllers from "../controllers/bookControllers.js";

const bookRoutes = express.Router();

/* --- ENDPOINTS --- */
/* 1º Endpoint: Cadastrar um novo livro */
bookRoutes.post("/book", bookControllers.createNewBook);

/* 2º Endpoint: Listar todos os livros */
bookRoutes.get("/books", bookControllers.getAllBooks);

/* 3º Endpoint: Listar um livro */
bookRoutes.get("/book/:id", bookControllers.getOneBook);

/* 4º Endpoint: Atualizar um livro */
bookRoutes.put("/book/:id", bookControllers.updateBook);

/* 5º Endpoint: Deletar um livro */
bookRoutes.delete("/book/:id", bookControllers.deleteBook);

export default bookRoutes;