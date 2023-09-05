-- CreateTable
CREATE TABLE "Search" (
    "id" SERIAL NOT NULL,
    "searchword" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Search_pkey" PRIMARY KEY ("id")
);
