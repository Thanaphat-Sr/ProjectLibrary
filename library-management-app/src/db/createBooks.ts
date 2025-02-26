import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createBooks() {
    const books = [
        {
            title: 'The Great Gatsby',
            isbn: '9780743273565',
            genre: 'Fiction',
            authorId: 1
        },
        {
            title: 'To Kill a Mockingbird',
            isbn: '9780061120084',
            genre: 'Fiction',
            authorId: 2
        },
        {
            title: '1984',
            isbn: '9780451524935',
            genre: 'Dystopian',
            authorId: 3
        },
        {
            title: 'Moby Dick',
            isbn: '9781503280786',
            genre: 'Adventure',
            authorId: 4
        },
        {
            title: 'Pride and Prejudice',
            isbn: '9781503290563',
            genre: 'Romance',
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