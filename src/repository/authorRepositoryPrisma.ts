import { PrismaClient } from '@prisma/client';
import type { Author } from '../models/author';

const prisma = new PrismaClient();

export function getAllAuthors(): Promise<Author[]> {
    return prisma.author.findMany();
}

export function getAuthorById(id: number): Promise<Author | null> {
    return prisma.author.findUnique({
        where: { id },
    });
}

export function addAuthor(newAuthor: Author): Promise<Author> {
    return prisma.author.create({
        data: {
            firstName: newAuthor.firstName,
            lastName: newAuthor.lastName,
            affiliation: newAuthor.affiliation,
        },
    });
}