import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createBooks() {
    const books = [
        {
            title: 'Dragon Ball',
            isbn: '9781569319208',
            genre: 'Action',
            authorId: 1
        },
        {
            title: 'Bleach',
            isbn: '9781421500764',
            genre: 'Adventure',
            authorId: 2
        },
        {
            title: 'Fullmetal Alchemist',
            isbn: '9781421541958',
            genre: 'Action',
            authorId: 3
        },
        {
            title: 'Tokyo Ghoul',
            isbn: '9781421580364',
            genre: 'Horror',
            authorId: 4
        },
        {
            title: 'Fairy Tail',
            isbn: '9781612622767',
            genre: 'Fantasy',
            authorId: 5
        }
    ];

    for (const book of books) {
        await prisma.book.create({
            data: book
        });
    }
    console.log("Book success")
}