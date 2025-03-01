import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createAuthors() {
    const authors = [
        { firstName: 'Masashi', lastName: 'Kishimoto', affiliation: 'Shueisha' },
        { firstName: 'Eiichiro', lastName: 'Oda', affiliation: 'Shueisha' },
        { firstName: 'Hajime', lastName: 'Isayama', affiliation: 'Kodansha' },
        { firstName: 'Tsugumi', lastName: 'Ohba', affiliation: 'Shueisha' },
        { firstName: 'Kohei', lastName: 'Horikoshi', affiliation: 'Shueisha' }
    ];

    for (const author of authors) {
        await prisma.author.create({
            data: author
        });
    }
    console.log("Author success")
}