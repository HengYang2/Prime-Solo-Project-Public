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

// Creates a new client card for the user in the database:
router.post('/', rejectUnauthenticated, (req, res) => {

  console.log("HEY IM IN THE CLIENT CAARDS POST ROUTTTTEEEERRR!");
  console.log("userid:", req.user.id);
  console.log("initials:", req.body.client_initials);
  console.log("startdate:", req.body.start_date);
  console.log("enddate:", req.body.end_date);
  console.log("isStillSubbed:", req.body.is_still_subscribed);
  console.log("clientNote:", req.body.client_note);
  console.log("cardColor:", req.body.card_color);

  const clientCard = req.body;
  const userId = req.user.id;

  //If 

  const sqlValues = [userId, clientCard.client_initials, clientCard.start_date,
                     clientCard.end_date, clientCard.is_still_subscribed, 
                     clientCard.client_note, clientCard.card_color];


  const sqlText = `INSERT INTO "user_clients"
                   ("user_id", "client_initials", "start_date", "end_date",
                    "is_still_subscribed", "client_note", "card_color")
                   VALUES
                   ($1, $2, $3, $4, $5, $6, $7);`
                   
  pool.query(sqlText, sqlValues)
      .then((result) => {
          res.sendStatus(200);
      })
      .catch((err) => {
      console.log('Error trying to post client card:', err);
      res.sendStatus(500);
      });
});

module.exports = router;
