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

export async function getAllBooksWithAuthorPagination(
    keyword: string,
    pageSize: number,
    pageNo: number
) {
    const pageBook = await repo.getAllBooksWithAuthorPagination(keyword, pageSize, pageNo);
    return pageBook;
}

export function count(){
    return repo.countBook();
}
