-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "modalitytype" TEXT NOT NULL,
    "modalityPrice" DOUBLE PRECISION NOT NULL,
    "accommodation" TEXT,
    "hostingPrice" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);
