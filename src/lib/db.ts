import mongoose from "mongoose";

declare global {
  var mongooseCache:
    | { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null }
    | undefined;
}

const cached = global.mongooseCache ?? { conn: null, promise: null };
global.mongooseCache = cached;

export async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("Define MONGODB_URI in .env.local");

  if (cached.conn) return cached.conn;
  cached.promise ??= mongoose.connect(uri);
  cached.conn = await cached.promise;
  return cached.conn;
}