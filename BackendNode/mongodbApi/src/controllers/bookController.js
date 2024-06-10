import { author } from "../models/Author.js";
import book from "../models/Book.js";

class BookController {
    static async listBooks (req, res) {
        try{
            const booksList = await book.find({});
            res.status(200).json(booksList);
        } catch(error) {
            res.status(500).json({message: `Falha na requisição:  ${error.message}`});
        }
    };

    static async registerBook (req, res) {
        const newBook = req.body;

        try{
            const authorItem = await author.findById(newBook.author);
            const completeBook = await {...newBook, author:{...authorItem._doc} };
            const createdBook = await book.create(completeBook);

            res.status(201).json({message: "Criado com sucesso", book: createdBook});
        } catch(error) {
            res.status(500).json({message: `Falha ao cadastrar: ${error.message}`});
        }
    };

    static async getBook (req, res) {
        const id = req.params.id;
        try{
            const item = await book.findById(id);
            res.status(200).json(item);
        } catch(error) {
            res.status(500).json({message: `Falha na requisição:  ${error.message}`});
        }
    };

    static async updateBook (req, res) {
        const id = req.params.id;
        try{
            const item = await book.findByIdAndUpdate(id, req.body);
            res.status(201).json({message: "Criado com sucesso", book: item});
        } catch(error) {
            res.status(500).json({message: `Falha ao atualizar:  ${error.message}`});
        }
    };

    static async deleteBook (req, res) {
        const id = req.params.id;
        try{
            const item = await book.findByIdAndDelete(id);
            res.status(200).json({message: "Removido com sucesso", book: item});
        } catch(error) {
            res.status(500).json({message: `Falha ao Remover:  ${error.message}`});
        }
    };

    static async listBooksByPublisher (req, res) {
        const publisher = req.query.publisher;
        try{
            const booksByPublisher = await book.find({publisher:publisher});
            res.status(200).json(booksByPublisher);
        } catch(error) {
            res.status(500).json({message: `Falha na requisição:  ${error.message}`});
        }
    };
};

export default BookController;