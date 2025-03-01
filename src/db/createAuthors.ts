import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createAuthors() {
    const authors = [
        { firstName: 'Akira', lastName: 'Toriyama', affiliation: 'Shueisha' },
        { firstName: 'Tite', lastName: 'Kubo', affiliation: 'Shueisha' },
        { firstName: 'Hiromu', lastName: 'Arakawa', affiliation: 'Square Enix' },
        { firstName: 'Sui', lastName: 'Ishida', affiliation: 'Shueisha' },
        { firstName: 'Hiro', lastName: 'Mashima', affiliation: 'Kodansha' }
    ];

    for (const author of authors) {
        await prisma.author.create({
            data: author
        });
    }
    console.log("Author success")
}