import express from "express";
import  bookController from "../controller/bookController.js";
import {verifyToken} from "../middlewares/verify_token.js";

const bookRouter = express.Router();

// Add Book
bookRouter.post("/addbook", verifyToken, bookController.addBook);

// Get All Books
bookRouter.get("/getBooks", verifyToken, bookController.getAllBooks);

// Get Book By ID
bookRouter.get("/:bookId", verifyToken, bookController.getBookById);

// Update Book
bookRouter.put("/:bookId", verifyToken, bookController.updateBook);

// Delete Book
bookRouter.delete("/deleteBook/:bookId", verifyToken, bookController.deleteBook);

export default bookRouter;