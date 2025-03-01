import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createAuthors() {
    const authors = [
        { firstName: 'F. Scott', lastName: 'Fitzgerald', affiliation: 'Independent' },
        { firstName: 'Harper', lastName: 'Lee', affiliation: 'Independent' },
        { firstName: 'George', lastName: 'Orwell', affiliation: 'Independent' },
        { firstName: 'Herman', lastName: 'Melville', affiliation: 'Independent' },
        { firstName: 'Jane', lastName: 'Austen', affiliation: 'Independent' }
    ];

    for (const author of authors) {
        await prisma.author.create({
            data: author
        });
    }
    console.log("Author success")
}