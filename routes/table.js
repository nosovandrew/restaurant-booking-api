// more complex route example (interacting with database)
// here we have pose req for creating new table

import { Router } from 'express';
const router = Router();

import { Table } from '../db/models/table.js';

router.post('/', async (req, res, next) => {
    const { capacity } = req.body; // get capacity from body

    try {
        // create new table object (via mongoose schema)
        const table = new Table({
            capacity,
        });

        // save new table in database
        const savedTable = await table.save();

        // if new table not saved -> throw error
        if (!savedTable) {
            throw {
                message: 'Error saving new table in database!',
                status: 500,
            };
        }

        // return success result
        res.status(200).send(savedTable);
    } catch (err) {
        // errors handled in this section
        if (err.status && err.message) {
            res.status(err.status).send({
                message: err.message,
            });
        } else {
            console.error(err);
        }
    }
});

export default router;
