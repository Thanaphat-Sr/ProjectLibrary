import express, { Request, Response } from 'express'
import * as service from '../services/bookService'
import type { Book } from '../models/book'
import exp from "constants"

const router = express.Router();

router.get("/", async(req, res) => {
    if (req.query.pageSize && req.query.pageNo) {
        const pageSize = parseInt(req.query.pageSize.toString()) || 3;
        const pageNo = parseInt(req.query.pageNo.toString()) || 1;
        const keyword = req.query.keyword as string;
        
        try{
            const result = await service.getAllBooksWithAuthorPagination(keyword, pageSize, pageNo);
        
            if (result.books.length === 0) {
                res.status(404).send("No books found");
                return;
            }
            res.setHeader("x-total-count", result.count.toString());
            res.json(result.books);
        } catch (error) {
            if (pageNo < 1 || pageSize < 1) {
                res.status(400).send("Invalid pageNo or pageSize");
            } else {
                res.status(500).send("Internal Server Error");    
            }
            return;
        } finally {
            console.log(`Request is completed. with pageNo = ${pageNo} and pageSIze=${pageSize}`)
        }
    } else if (req.query.title) {
        const title = req.query.title.toString().toLowerCase();
        const filteredBooks = await service.getBooksByTitle(title);
        res.json(filteredBooks);
    } else {
        const allBooks = await service.getAllBooks();
        res.json(allBooks);
    }
});

router.post("/", async(req,res)=>{
    const newBook: Book = req.body;
    await service.addBook(newBook)
    res.json(newBook);
})

export default router;