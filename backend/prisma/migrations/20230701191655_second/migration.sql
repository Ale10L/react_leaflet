-- CreateTable
CREATE TABLE "Poligono" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "zone" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Coordenada" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lat" DECIMAL NOT NULL,
    "lon" DECIMAL NOT NULL,
    "poligonoId" INTEGER NOT NULL,
    CONSTRAINT "Coordenada_poligonoId_fkey" FOREIGN KEY ("poligonoId") REFERENCES "Poligono" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Poligono_name_key" ON "Poligono"("name");
