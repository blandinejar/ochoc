DROP TABLE IF EXISTS "user", "brand", "product", "tag", "product_has_tag";


-- TABLE USER

CREATE TABLE IF NOT EXISTS "user" (
    "id" SERIAL PRIMARY KEY,
    "lastname" TEXT,
    "firstname" TEXT,
    "email" TEXT,
    "password" TEXT
);

-- TABLE MARQUES

CREATE TABLE IF NOT EXISTS "brand" (
    "id" SERIAL PRIMARY KEY,
    "brand_name" TEXT
);

-- TABLE PRODUITS

CREATE TABLE IF NOT EXISTS "product" (
    "id" SERIAL PRIMARY KEY,
    "product_name" TEXT,
    "weight" INT,
    "price" INT,
    "brand_id" INTEGER REFERENCES "brand" ("id")
);

--  TABLE TAGS

CREATE TABLE IF NOT EXISTS "tag" (
    "id" SERIAL PRIMARY KEY,
    "tag_name" TEXT,
    "product_id" INTEGER REFERENCES "product" ("id")
);

CREATE TABLE IF NOT EXISTS "product_has_tag" (
  "product_id" INTEGER REFERENCES "product"("id"),
  "tag_id" INTEGER REFERENCES "tag" ("id"),
  PRIMARY KEY ("product_id", "tag_id")
);