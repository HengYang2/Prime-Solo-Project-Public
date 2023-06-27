-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

--Creating tables:
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "email" VARCHAR (250) UNIQUE NOT NULL
);


CREATE TABLE "user_clients" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user"(id) ON DELETE CASCADE,
    "client_initials" VARCHAR (4) NOT NULL,
    "start_date" DATE NOT NULL DEFAULT CURRENT_DATE,
    "end_date" DATE DEFAULT CURRENT_DATE,
    "is_still_subscribed" BOOLEAN DEFAULT TRUE,
    "client_note" VARCHAR (200) NOT NULL,
    "card_color" VARCHAR NOT NULL,
    "is_card_disabled" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "client_posts" (
    "id" SERIAL PRIMARY KEY,
    "client_id" INTEGER REFERENCES "user_clients"(id) ON DELETE CASCADE,
    "date" DATE NOT NULL,
    "hours_worked" INTEGER NOT NULL,
    "miles_driven" INTEGER NOT NULL,
    "task_details" VARCHAR (500) NOT NULL
);


--Inserting Test Data:
-- INSERT INTO "user"
-- ("username", "password", "email")
-- VALUES
-- ('Joe', '123', 'joe@gmail.com'); -- This wont work because password isnt encrypted.

----
-- INSERT INTO "user_clients"
-- ("user_id", "client_initials", "start_date", "client_note", "card_color")
-- VALUES
-- ('1', 'BK', '2023/04/10', 'This client is nice.', 'blue');

-- INSERT INTO "user_clients"
-- ("user_id", "client_initials", "start_date", "end_date", "is_still_subscribed", "client_note", "card_color")
-- VALUES
-- ('1', 'AB', '2002/07/20', '2023/01/01', 'FALSE', 'This client is nice.', 'red');
----


-- INSERT INTO "client_posts"
-- ("client_id", "date", "hours_worked", "miles_driven", "task_details")
-- VALUES
-- ('1', '2022/06/15', '5', '15', 'Drove to Andover.');
