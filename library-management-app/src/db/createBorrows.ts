import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createBorrows() {
    const borrows = [];
    const now = new Date();

    for (let i = 0; i < 30; i++) {
        const borrowDate = new Date(now);
        borrowDate.setDate(now.getDate() - i);

        const returnDue = new Date(borrowDate);
        returnDue.setDate(borrowDate.getDate() + 7);

        const returnDate = Math.random() > 0.5 ? new Date(returnDue) : null;
        if (returnDate) {
            returnDate.setDate(returnDue.getDate() + Math.floor(Math.random() * 7));
        }

        borrows.push(
            { bookId: 1, memberId: 1, borrowDate, returnDue, returnDate },
            { bookId: 2, memberId: 2, borrowDate, returnDue, returnDate },
            { bookId: 3, memberId: 3, borrowDate, returnDue, returnDate },
            { bookId: 4, memberId: 4, borrowDate, returnDue, returnDate },
            { bookId: 5, memberId: 5, borrowDate, returnDue, returnDate }
        );
    }

    for (const borrow of borrows) {
        await prisma.borrowing.create({ data: borrow });
    }
    console.log("Borrow success");
}