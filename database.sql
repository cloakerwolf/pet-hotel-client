--database name: pet_hotel

CREATE TABLE "owners" (
	"id" SERIAL PRIMARY KEY,
	"owner_name" TEXT
);

INSERT INTO "owners" ("owner_name") VALUES ('Aaron'),('Alex'),('Chris'),('Allyson'),('David');

CREATE TABLE "pets" (
	"id" SERIAL PRIMARY KEY,
	"owner_id" INT REFERENCES "owners" NOT NULL,
	"pet_name" TEXT NOT NULL,
	"breed" TEXT,
	"color" TEXT,
	"is_checked_in" BOOLEAN DEFAULT false,
	"checked_in_date" DATE
);

ALTER TABLE "public"."pets" ADD COLUMN "url" VARCHAR(300);

INSERT INTO "pets"
    ("owner_id", "pet_name", "breed", "color", "url", "is_checked_in", "checked_in_date")
VALUES
    (1,'Geranimo','Tibetan Mastiff','Orange','https://dogsforeveryone.files.wordpress.com/2014/04/tibetan-mastiff-2.jpg',true,'09/22/2019'),
    (2,'Jeff','Rat','Brown','http://www.animalcontrolsolutions.com/wildlife/images/uploads/brown%20rat.jpg',true,'09/22/2019'),
    (3,'Baba-Yaga','Australian Shepherd','Cookies and Cream','https://3.bp.blogspot.com/-twGVlwVMius/WIgUdjci9CI/AAAAAAAAKhU/AoTWMU1yax4VDFJxAv4I8t6feLEICTYLQCLcB/s1600/Australian-Shepherd-Standard.jpg',true,'09/19/2019'),
    (4,'LaGrie','Russian Blue','Grey','https://www.tescobank.com/assets/website/img/pet-insurance/cats/russian-blue-info-446x320px.jpg',true,'09/25/2019'),
    (5,'Anya','American Shorthair','Black','https://www.askideas.com/media/25/Black-American-Shorthair-Cat-Laying-With-Headup.jpg',true,'09/24/2019');