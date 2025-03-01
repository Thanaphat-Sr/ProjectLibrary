import { Book } from './book';
import { Member } from './member';

export interface Borrowing {
    id: number;
    bookId: number;
    memberId: number;
    borrowDate: Date;
    returnDue: Date;
    returnDate?: Date | null;
    book?: Book; 
    member?: Member; 
}