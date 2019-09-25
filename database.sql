--database name is "pet_hotel"

CREATE TABLE "owners"
(
    "id" SERIAL PRIMARY KEY,
    "owner_name" VARCHAR(80) NOT NULL
);
CREATE TABLE "pets"
(
    "id" SERIAL PRIMARY KEY,
    "owner_id" INT REFERENCES "owners",
    "pet_name" VARCHAR(75) NOT NULL,
    "breed" VARCHAR(70) NOT NULL,
    "color" VARCHAR(50) NOT NULL,
    "status" BOOLEAN DEFAULT false,
    "date" DATE
);

INSERT INTO "owners"
    ("owner_name")
VALUES
    ('Aaron'),
    ('Alex'),
    ('Allyson'),
    ('Chris'),
    ('David');

INSERT INTO "pets"
    ("owner_id", "pet_name", "breed", "color", "status", "date")
VALUES
    (1, 'Geranimo', 'Tibetan Mastiff', 'Orange', true, '09/22/2019'),
    (2, 'Jeff', 'Rat', 'Brown', true, '09/22/2019'),
    (3, 'Baba-Yaga', 'Australian Shepherd', 'Cookies and Cream', true, '09/19/2019');