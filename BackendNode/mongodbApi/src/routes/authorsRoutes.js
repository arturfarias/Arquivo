import express from "express";
import AuthorController from "../controllers/authorController.js";

const routes = express.Router();

routes.get("/authors", AuthorController.listAuthors);
routes.post("/author", AuthorController.registerAuthor);
routes.get("/author/:id", AuthorController.getAuthor);
routes.put("/author/:id", AuthorController.updateAuthor);
routes.delete("/author/:id", AuthorController.deleteAuthor);
routes.delete("/author/:id", AuthorController.deleteAuthor);

export default routes;