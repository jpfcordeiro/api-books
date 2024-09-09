import Book from "../models/books.js";

class bookService {
    /* --- Método CADASTRAR --- */
    async create(title, author, yearPublication, description) {
        try {
            const newBook = new Book({ title, author, yearPublication, description });
            await newBook.save();
            return newBook;
        } catch (error) { console.log(error); }
    }

    /* --- Método READ (LISTAR TODOS) --- */
    async getAll() {
        try {
            const books = await Book.find();
            return books;
        } catch (error) { console.log(error); }
    }

    /* --- (LISTAR UM) --- */
    async getOne(id) {
        try {
            const book = await Book.findOne({ _id: id });
            return book;
        } catch (error) { console.log(error); }
    }

    /* --- Método UPDATE --- */
    async update(id, title, author, yearPublication, description) {
        try {
            await Book.findByIdAndUpdate(id, { title, author, yearPublication, description });
            console.log(`Alterações no livro id: ${id} feitas com sucesso`);
        } catch (error) { console.log(error); }
    }

    /* --- Método DELETE --- */
    async delete(id) {
        try {
            await Book.findByIdAndDelete(id);
            console.log(`Livro id: ${id} deletado com sucesso.`);
        } catch (error) { console.log(error); }
    }
}

export default new bookService();