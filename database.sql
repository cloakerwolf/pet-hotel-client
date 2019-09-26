
    --database name: pet_hotel

CREATE TABLE "owners"
(
    "id" SERIAL PRIMARY KEY,
    "owner_name" TEXT NOT NULL
);

CREATE TABLE "pets"
(
    "id" SERIAL PRIMARY KEY,
    "owner_id" INT REFERENCES "owners" NOT NULL,
    "pet_name" TEXT NOT NULL,
    "breed" TEXT,
    "color" TEXT,
    "is_checked_in" BOOLEAN DEFAULT false,
    "checked_in_date" DATE
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
    ("owner_id", "pet_name", "breed", "color", "is_checked_in", "checked_in_date")
VALUES
    (1, 'Geranimo', 'Tibetan Mastiff', 'Orange', true, '09/22/2019'),
    (2, 'Jeff', 'Rat', 'Brown', true, '09/22/2019'),
    (4, 'Baba-Yaga', 'Australian Shepherd', 'Cookies and Cream', true, '09/19/2019'),
    (3, 'LaGrie', 'Russian Blue', 'Grey', true, '09/25/2019'),
    (5, 'Anya', 'American Shorthair', 'Black', true, '09/24/2019');