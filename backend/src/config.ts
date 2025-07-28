import dotenv from 'dotenv';

dotenv.config();

// Throw error if required env vars are missing in production
if (!process.env.JWT_SECRET && process.env.NODE_ENV === 'production') {
  throw new Error('JWT_SECRET is required in production');
}

export const JWT_SECRETE = process.env.JWT_SECRET || "dev_secret_only";
export const MONGO_DB_URL = process.env.MONGO_DB_URL || "mongodb://localhost:27017/saveit";