import { Router } from 'express';
import { fetchAllMembers, fetchMemberById, fetchMemberByName, createMember } from '../services/memberService';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const members = await fetchAllMembers();
        res.json(members);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const member = await fetchMemberById(Number(req.params.id));
        if (member) {
            res.json(member);
        } else {
            res.status(404).json({ error: 'Member not found' });
        }
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.get('/name/:name', async (req, res) => {
    try {
        const members = await fetchMemberByName(req.params.name);
        res.json(members);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newMember = await createMember(req.body);
        res.status(201).json(newMember);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

export default router;