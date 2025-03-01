import { getAllAuthors, getAuthorById, addAuthor } from '../repository/authorRepositoryPrisma';
import type { Author } from '../models/author';

export async function fetchAllAuthors(): Promise<Author[]> {
    return await getAllAuthors();
}

export async function fetchAuthorById(id: number): Promise<Author | null> {
    return await getAuthorById(id);
}

export async function createAuthor(newAuthor: Author): Promise<Author> {
    return await addAuthor(newAuthor);
}