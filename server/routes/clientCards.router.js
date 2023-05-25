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

    console.log("HEY IM IN THE CLIENT CAARDS ROUTTTTEEEERRR!");
    const userId = req.user.id;
    const sqlValues = [userId]
    const sqlText = `SELECT * FROM "user_clients"
                     WHERE user_id = $1;`
                     
    pool.query(sqlText, sqlValues)
        .then((result) => {
            let arrayOfClientCards = [];

            for (let clientCard of result.rows) {
              arrayOfClientCards.push(clientCard);
            }

            console.log(result.rows);
            res.send(arrayOfClientCards);
        })
        .catch((err) => {
        console.log('Error trying to get client cards:', err);
        res.sendStatus(500);
        });
});

module.exports = router;
