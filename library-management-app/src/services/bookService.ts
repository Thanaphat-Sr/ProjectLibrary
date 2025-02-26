import type { Book } from '../models/book';
import * as repo from '../repository/bookRepositoryPrisma';

export function getBooksByTitle(title: string) {
    return repo.getBooksByTitle(title);
}

export function getAllBooks() {
    return repo.getAllBooks();
}

export function addBook(newBook:Book){
    return repo.addBook(newBook);
}

