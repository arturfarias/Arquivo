import {author} from "../models/Author.js";

class AuthorController {
    static async listAuthors (req, res) {
        try{
            const authorList = await author.find({});
            res.status(200).json(authorList);
        } catch(error) {
            res.status(500).json({message: `Falha na requisição:  ${error.message}`});
        }
    };

    static async registerAuthor (req, res) {
        try{
            const newAuthor = await author.create(req.body);
            res.status(201).json({message: "Criado com sucesso", author: newAuthor});
        } catch(error) {
            res.status(500).json({message: `Falha ao cadastrar: ${error.message}`});
        }
    };

    static async getAuthor (req, res) {
        const id = req.params.id;
        try{
            const item = await author.findById(id);
            res.status(200).json(item);
        } catch(error) {
            res.status(500).json({message: `Falha na requisição:  ${error.message}`});
        }
    };

    static async updateAuthor (req, res) {
        const id = req.params.id;
        try{
            const item = await author.findByIdAndUpdate(id, req.body);
            res.status(201).json({message: "Criado com sucesso", author: item});
        } catch(error) {
            res.status(500).json({message: `Falha ao atualizar:  ${error.message}`});
        }
    };

    static async deleteAuthor (req, res) {
        const id = req.params.id;
        try{
            const item = await author.findByIdAndDelete(id);
            res.status(200).json({message: "Removido com sucesso", author: item});
        } catch(error) {
            res.status(500).json({message: `Falha ao Remover:  ${error.message}`});
        }
    };
};

export default AuthorController;