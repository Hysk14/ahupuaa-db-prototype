-- CreateTable
CREATE TABLE "SoilComposition" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "patchId" INTEGER NOT NULL,
    "sampledAt" DATETIME NOT NULL,
    "TEC" REAL NOT NULL,
    "pH" REAL NOT NULL,
    "Sulfur" REAL NOT NULL,
    "Phosphorus" REAL NOT NULL,
    "OlsenP" INTEGER NOT NULL,
    "Calcium" REAL NOT NULL,
    "Magnesium" REAL NOT NULL,
    "Potassium" REAL NOT NULL,
    "Sodium" REAL NOT NULL,
    "Boron" REAL NOT NULL,
    "Iron" REAL NOT NULL,
    "Manganese" REAL NOT NULL,
    "Copper" REAL NOT NULL,
    "Zinc" REAL NOT NULL,
    "Aluminum" REAL NOT NULL,
    "TotalCarbonPCT" REAL NOT NULL,
    CONSTRAINT "SoilComposition_patchId_fkey" FOREIGN KEY ("patchId") REFERENCES "Patch" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "SoilComposition_patchId_key" ON "SoilComposition"("patchId");
