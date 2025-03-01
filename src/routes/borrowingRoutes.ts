import { Router } from 'express';
import { fetchAllBorrowings, fetchBorrowingById, fetchBorrowingsByReturnDueDate, fetchBorrowingsNotReturned, createBorrowing } from '../services/borrowingService';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const borrowings = await fetchAllBorrowings();
        res.json(borrowings);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const borrowing = await fetchBorrowingById(Number(req.params.id));
        if (borrowing) {
            res.json(borrowing);
        } else {
            res.status(404).json({ error: 'Borrowing not found' });
        }
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.get('/return-due/:date', async (req, res) => {
    try {
        const returnDue = new Date(req.params.date);
        const borrowings = await fetchBorrowingsByReturnDueDate(returnDue);
        res.json(borrowings);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.get('/not-returned', async (req, res) => {
    try {
        const borrowings = await fetchBorrowingsNotReturned();
        res.json(borrowings);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newBorrowing = await createBorrowing(req.body);
        res.status(201).json(newBorrowing);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

export default router;