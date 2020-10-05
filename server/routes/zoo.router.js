const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

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