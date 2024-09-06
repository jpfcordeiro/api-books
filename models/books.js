import mongoose from "mongoose";

const descriptionSchema = new mongoose.Schema({
    edition: String,
    publisher: String,
    genre: [String], //Array de objetos
    type: String,
    language: String,
    isbn: String //ISBN-13
});

const bookSchema = new mongoose.Schema({
    title: String,
    author: [String], //Array de objetos
    yearPublication: Number,
    description: [descriptionSchema] //Documento aninhado
});

const Book = mongoose.model('Book', bookSchema);
export default Book;