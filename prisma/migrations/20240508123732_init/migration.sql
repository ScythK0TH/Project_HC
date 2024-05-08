-- CreateTable
CREATE TABLE "history" (
    "id" SERIAL NOT NULL,
    "uid" TEXT NOT NULL,
    "pid" INTEGER NOT NULL,
    "pcolor" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "BuyAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "history_pkey" PRIMARY KEY ("id")
);
