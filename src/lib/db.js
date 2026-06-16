import { PrismaClient } from "@prisma/client";

const db =
  globalThis.prima ||
  new PrismaClient({
    log: ["query", "info", "error", "warn"],
  });

if (process.env.NODE_ENV === "development") {
  globalThis.prisma = db;
}

export default db;
