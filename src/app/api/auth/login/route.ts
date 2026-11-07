import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import { createSession } from "@/lib/auth";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  await connectDB();

  const user = await User.findOne({ email: String(email).toLowerCase() });
  const valid = user && (await bcrypt.compare(password, user.passwordHash));

  if (!valid) {
    return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  }

  await createSession({ userId: user._id.toString(), role: user.role });
  return NextResponse.json({ ok: true, role: user.role });
}