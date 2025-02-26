import express, { Request, Response } from 'express'
import { getAllBooks, getBooksByTitle, addBook } from '../services/bookService'
import type { Book } from '../models/book'
import exp from "constants"

const router = express.Router();

router.get("/", async(req, res) => {
    if (req.query.title) {
        const title = req.query.title.toString().toLowerCase();
        const filteredBooks = await getBooksByTitle(title);
        res.json(filteredBooks);
    } else {
        const allBooks = await getAllBooks();
        res.json(allBooks);
    }
});

router.post("/", async(req,res)=>{
    const newBook: Book = req.body;
    await addBook(newBook)
    res.json(newBook);
})

export default router;