import { PrismaClient } from '@prisma/client';
import type { Book } from '../models/book';

const prisma = new PrismaClient();

export function getBooksByTitle(title: string): Promise<Book[]> {
    return prisma.book.findMany({
        where: { title },
    });
}

export function getAllBooks():Promise<Book[]> {
    return prisma.book.findMany();
}

export function addBook(newBook:Book):Promise<Book>{
    return prisma.book.create({
        data: {
            title: newBook.title,
            isbn: newBook.isbn,
            genre: newBook.genre,
            authorId: newBook.authorId
        }
    })
}

