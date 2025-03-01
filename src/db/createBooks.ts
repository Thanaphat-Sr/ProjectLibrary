import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createBooks() {
    const books = [
        {
            title: 'Naruto',
            isbn: '9781421539898',
            genre: 'Action',
            authorId: 1
        },
        {
            title: 'One Piece',
            isbn: '9781421536255',
            genre: 'Adventure',
            authorId: 2
        },
        {
            title: 'Attack on Titan',
            isbn: '9781612620244',
            genre: 'Action',
            authorId: 3
        },
        {
            title: 'Death Note',
            isbn: '9781421539645',
            genre: 'Thriller',
            authorId: 4
        },
        {
            title: 'My Hero Academia',
            isbn: '9781421582696',
            genre: 'Action',
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