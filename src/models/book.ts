import { Author } from './author';
import { Borrowing } from './borrowing';

export interface Book {
    id: number;
    isbn: string;
    title: string;
    genre: string;
    authorId: number;
    author?: Author; 
    borrowings?: Borrowing[]; 
}

export interface PageBook {
    count: number;
    books: Book[];
}