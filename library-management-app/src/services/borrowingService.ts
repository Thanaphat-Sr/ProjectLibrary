import { getAllBorrowings, getBorrowingById, getBorrowingsByReturnDueDate, getBorrowingsNotReturned, addBorrowing } from '../repository/borrowingRepositoryPrisma';
import type { Borrowing } from '../models/borrowing';

export async function fetchAllBorrowings(): Promise<Borrowing[]> {
    return await getAllBorrowings();
}

export async function fetchBorrowingById(id: number): Promise<Borrowing | null> {
    return await getBorrowingById(id);
}

export async function fetchBorrowingsByReturnDueDate(returnDue: Date): Promise<Borrowing[]> {
    return await getBorrowingsByReturnDueDate(returnDue);
}

export async function fetchBorrowingsNotReturned(): Promise<Borrowing[]> {
    return await getBorrowingsNotReturned();
}

export async function createBorrowing(newBorrowing: Borrowing): Promise<Borrowing> {
    return await addBorrowing(newBorrowing);
}