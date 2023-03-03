// route example

import { Router } from 'express';
const router = Router();

router.get('/', async (req, res, next) => {
    res.status(200).send('Привет, родной!')
});

export default router;
