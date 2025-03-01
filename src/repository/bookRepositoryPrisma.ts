import { PrismaClient } from '@prisma/client';
import type { Book, PageBook } from '../models/book';

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

export async function getAllBooksWithAuthorPagination(
    keyword: string,
    pageSize: number,
    pageNo: number
) {
    const where = {
        OR: [
            { title: { contains: keyword } },
            { genre: { contains: keyword } },
            { author : { firstName: { contains: keyword } } }
        ]
    }

    const books = await prisma.book.findMany({
        where,
        skip: pageSize * (pageNo-1),
        take: pageSize,
        select: {
            id: true,
            title: true,
            isbn: false,
            genre: true,
            author: {
                select: {
                    firstName:true
                }
            }
        }
    });
    const count = await prisma.book.count({ where });
    return { count, books } as PageBook;
}

export function countBook(){
    return prisma.book.count();
}
