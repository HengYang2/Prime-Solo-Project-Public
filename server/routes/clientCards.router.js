//GET route that checks the database's 'user_clients' table to find the requested clients
//for a given user:

const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const router = express.Router();


// Handles Axios request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {

    console.log("HEY IM IN THE CLIENT CAARDS GET ROUTTTTEEEERRR!");
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
  // console.log("userid:", req.user.id);
  // console.log("initials:", req.body.client_initials);
  // console.log("startdate:", req.body.start_date);
  // console.log("enddate:", req.body.end_date);
  // console.log("isStillSubbed:", req.body.is_still_subscribed);
  // console.log("clientNote:", req.body.client_note);
  // console.log("cardColor:", req.body.card_color);

  const clientCard = req.body;
  const userId = req.user.id;

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


//Delete an existing client card from the user in the database:
router.delete(`/:id`, rejectUnauthenticated, (req, res) => {

  console.log("HEY IM IN THE CLIENT CAARDS DELETE ROUTTTTEEEERRR!");

  const clientCardId = req.params.id;
  const userId = req.user.id;

  console.log('REQ PARAMS:', clientCardId);

  const sqlValues = [clientCardId, userId];

  const sqlText = `DELETE FROM "user_clients"
                   WHERE id=$1 AND user_id=$2;`
                   
  pool.query(sqlText, sqlValues)
      .then((result) => {
          res.sendStatus(200);
      })
      .catch((err) => {
      console.log('Error trying to delete client card:', err);
      res.sendStatus(500);
      });
});


//Update an existing client card from the user in the database:
router.put(`/:id`, rejectUnauthenticated, (req, res) => {

  console.log("HEY IM IN THE CLIENT CAARDS PUT ROUTTTTEEEERRR!");

  const clientCardId = req.params.id;
  const userId = req.user.id;
  const updatedClientCard = req.body;

  console.log('REQ PARAMS:', clientCardId);

  const sqlValues = [updatedClientCard.client_initials, updatedClientCard.start_date, updatedClientCard.end_date, updatedClientCard.is_still_subscribed, updatedClientCard.client_note, updatedClientCard.card_color, clientCardId, userId];

  const sqlText = `UPDATE "user_clients"
                    SET client_initials=$1, start_date=$2, end_date=$3, is_still_subscribed=$4, client_note=$5, card_color=$6 
                    WHERE id=$7 AND user_id=$8;`
                   
  pool.query(sqlText, sqlValues)
      .then((result) => {
          res.sendStatus(200);
      })
      .catch((err) => {
      console.log('Error trying to delete client card:', err);
      res.sendStatus(500);
      });
});





router.get('/posts/:id', rejectUnauthenticated, (req, res) => {

  console.log("HEY IM IN THE CLIENT CAARDS /posts/:id ROUTTTTEEEERRR!");

  const client_id = req.params.id
  const sqlValues = [client_id]
  const sqlText = `SELECT * FROM "client_posts"
                   WHERE client_id=$1
                   ORDER BY "date" DESC;`
                   
  pool.query(sqlText, sqlValues)
      .then((result) => {
          let postList = [];

          for (let post of result.rows) {
            postList.push(post);
          }

          console.log('RESULT.ROWS of get request -->', result.rows);
          res.send(postList);
      })
      .catch((err) => {
      console.log('Error trying to get client cards:', err);
      res.sendStatus(500);
      });
});


//Creates a new post for the client:
router.post('/posts', rejectUnauthenticated, (req, res) => {

  console.log("HEY IM IN THE CLIENT CAARDS POST/POSTSSS ROUTTTTEEEERRR!");
  console.log("REQ.BODY VALUE --> ", req.body);

  const postData = req.body;
  // const userId = req.user.id;

  const sqlValues = [postData.client_id, postData.date, postData.hours_worked, postData.miles_driven, postData.task_details];

  const sqlText = `INSERT INTO "client_posts"
                   ("client_id", "date", "hours_worked", "miles_driven",
                    "task_details")
                   VALUES
                   ($1, $2, $3, $4, $5);`
                   
  pool.query(sqlText, sqlValues)
      .then((result) => {
          res.sendStatus(200);
      })
      .catch((err) => {
      console.log('Error trying to post post:', err);
      res.sendStatus(500);
      });
});



module.exports = router;
