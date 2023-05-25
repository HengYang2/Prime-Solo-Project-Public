//GET route that checks the database's 'user_clients' table to find the requested clients
//for a given user:

const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  
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

module.exports = router;
