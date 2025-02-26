import { PrismaClient } from '@prisma/client';
import type { Borrowing } from '../models/borrowing';

const prisma = new PrismaClient();

export function getAllBorrowings(): Promise<Borrowing[]> {
    return prisma.borrowing.findMany();
}

export function getBorrowingById(id: number): Promise<Borrowing | null> {
    return prisma.borrowing.findUnique({
        where: { id },
    });
}

export function getBorrowingsByReturnDueDate(returnDue: Date): Promise<Borrowing[]> {
    return prisma.borrowing.findMany({
        where: { returnDue },
    });
}

export function getBorrowingsNotReturned(): Promise<Borrowing[]> {
    return prisma.borrowing.findMany({
        where: { returnDate: null },
    });
}

export function addBorrowing(newBorrowing: Borrowing): Promise<Borrowing> {
    return prisma.borrowing.create({
        data: {
            bookId: newBorrowing.bookId,
            memberId: newBorrowing.memberId,
            borrowDate: newBorrowing.borrowDate,
            returnDue: newBorrowing.returnDue,
            returnDate: newBorrowing.returnDate,
        },
    });
}