const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.post('/', (req, res) => {
    // Can't connect class_id to the class selected. Table displays NULL
    const insertAnimalQuery = `INSERT INTO "species" ("species_name", "class_id") VALUES ($1, $2) RETURNING "id";`;
    pool.query(insertAnimalQuery, [req.body.species_name, req.body.class_id]).then(result => {
        res.sendStatus(201);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

router.get('/', (req, res) => {
    queryString = `SELECT "species"."species_name", "class"."class_name" FROM "species" 
                  JOIN "class" ON "species"."class_id" = "class"."id";`;
    pool.query(queryString).then(result => {
        res.send(result.rows);
    }).catch(err => {
        console.error('Error in GET:', err);
        res.sendStatus(500);
    });
});

module.exports = router;