-- CreateTable
CREATE TABLE "restaurant" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" INTEGER,
    "updated_by" INTEGER,
    "email" VARCHAR NOT NULL,
    "phone_number" TEXT NOT NULL,
    "name" VARCHAR NOT NULL,
    "address" TEXT NOT NULL,
    "avatar_url" TEXT,

    CONSTRAINT "restaurant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "restaurant_email_key" ON "restaurant"("email");
