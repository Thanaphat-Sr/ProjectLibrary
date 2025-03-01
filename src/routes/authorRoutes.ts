import { Router } from 'express';
import { fetchAllAuthors, fetchAuthorById, createAuthor } from '../services/authorService';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const authors = await fetchAllAuthors();
        res.json(authors);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const author = await fetchAuthorById(Number(req.params.id));
        if (author) {
            res.json(author);
        } else {
            res.status(404).json({ error: 'Author not found' });
        }
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newAuthor = await createAuthor(req.body);
        res.status(201).json(newAuthor);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

export default router;