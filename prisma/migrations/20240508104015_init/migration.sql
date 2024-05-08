-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "carts" (
    "cid" BIGSERIAL NOT NULL,
    "id" TEXT NOT NULL,
    "pid" INTEGER NOT NULL,
    "pcolor" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "carts_pkey" PRIMARY KEY ("cid")
);

-- CreateTable
CREATE TABLE "products" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "imageid" INTEGER NOT NULL,
    "manufact" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");
