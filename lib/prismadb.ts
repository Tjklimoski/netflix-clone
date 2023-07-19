import { PrismaClient } from "@prisma/client";

// Type assignment for global.prisma is handled in global.d.ts

const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV === 'development') global.prisma = prisma

export default prisma;