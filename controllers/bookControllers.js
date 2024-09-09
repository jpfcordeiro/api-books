import bookService from "../services/bookService.js";
import { ObjectId } from "mongodb";

/* --- Inserir novo livro --- */
const createNewBook = async (req, res) => {
    try {
        const { title, author, yearPublication, description } = req.body;
        const newBook = await bookService.create(title, author, yearPublication, description);
        res.status(201).json({ Success: `Livro '${newBook.title}' cadastrado com sucesso` }); //Cód. Status 201: Create
    } catch (error) {
        console.log(error);
        res.status(500).json({ err: 'Erro interno do servidor' }); //Cód. Status 500: Internal Server Error
    }
}

/* --- Listar todos os livros --- */
const getAllBooks = async (req, res) => {
    try {
        const books = await bookService.getAll();
        res.status(200).json({ books: books }); //Cód. Status 200: OK
    } catch (error) {
        console.log(error);
        res.status(500).json({err: 'Erro interno do servidor.'}); //Cód. Status 500: Internal Server Error
    }
}

/* --- Listar um livro --- */
const getOneBook = async (req, res) => {
    try {
        if(ObjectId.isValid(req.params.id)) {
            const id = req.params.id;
            const book = await bookService.getOne(id);
            if(!book) { res.status(404).json({ Success: 'Livro não encontrado.' }) } //Cód. Status 404: Not Found
            else { res.status(200).json({ book })} //Cód. Status 200: OK
        } else { res.sendStatus(400); } //Cód. Status 400: Bad Request
    } catch (error) {
        console.log(error);
        res.status(500).json({ err: 'Erro interno do servidor.' }); //Cód. Status 500: Internal Server Error
    }
}

/* --- Atualizar informações do livro --- */
const updateBook = async (req, res) => {
    try {
        if(ObjectId.isValid(req.params.id)) {
            const id = req.params.id;
            const { title, author, yearPublication, description } = req.body;
            const existingBook = await bookService.getOne(id);
            if (!existingBook) { return res.status(404).json({ err: 'Livro não encontrado.' }); }
            bookService.update(id, title, author, yearPublication, description);
            res.status(200).json({ Success: `Livro '${existingBook.title}' atualizado com sucesso.` }); //Cód. Status 200: OK
        } else { res.sendStatus(400); } //Cód. Status 400: Bad Request
    } catch (error) {
        console.log(error);
        res.status(500).json({ err: 'Erro interno do servidor.' }); //Cód. Status 500: Internal Server Error
    }
}

/* --- Deletar livro --- */
const deleteBook = async (req, res) => {
    try {
        if(ObjectId.isValid(req.params.id)) {
            const id = req.params.id;
            const existingBook = await bookService.getOne(id);
            if (!existingBook) { return res.status(404).json({ err: 'Livro não encontrado.' }); }
            bookService.delete(id);
            res.status(204).json({ Success: `Livro '${existingBook.title}' deletado com sucesso.` }); //Cód. Status 204: No content
        } else {res.sendStatus(400); } //Cód. Status 400: Bad Request
    } catch (error) {
        console.log(error);
        res.status(500).json({ err: 'Erro interno do servidor.' }); //Cód. Status 500: Internal Server Error
    }
}

export default { createNewBook, getAllBooks, getOneBook, updateBook, deleteBook };