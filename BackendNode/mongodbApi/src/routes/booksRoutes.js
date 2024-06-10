import express from "express";
import BookController from "../controllers/bookController.js";

const routes = express.Router();

routes.get("/books", BookController.listBooks);
routes.post("/book", BookController.registerBook);
routes.get("/books/search", BookController.listBooksByPublisher);
routes.get("/book/:id", BookController.getBook);
routes.put("/book/:id", BookController.updateBook);
routes.delete("/book/:id", BookController.deleteBook);

export default routes;