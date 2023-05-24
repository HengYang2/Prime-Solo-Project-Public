const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

//GET route that checks the database's 'user_clients' table to find the requested clients
//for a given user:
router.get('/clientCards', rejectUnauthenticated, (req, res) => {

    const userId = user.id;
    const sqlValues = [userId]
    const sqlText = `SELECT * FROM "user_clients"
                     WHERE user_id = $1;`

    pool.query(sqlText, sqlValues)
        .then((result) => {
            console.log(result.rows);
            res.send(result.rows[0]);
        })
        .catch((err) => {
        console.log('Error trying to get client cards:', err);
        res.sendStatus(500);
        });
});