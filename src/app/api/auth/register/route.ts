import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import { createSession } from "@/lib/auth";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  if (!name || !email || !password || password.length < 8) {
    return NextResponse.json(
      { error: "Name, email, and a password of 8+ characters are required." },
      { status: 400 }
    );
  }

  await connectDB();

  if (await User.findOne({ email: email.toLowerCase() })) {
    return NextResponse.json({ error: "Email already registered." }, { status: 409 });
  }

  const user = await User.create({
    name,
    email,
    passwordHash: await bcrypt.hash(password, 10),
    role: "participant", // admins are set manually in the database
  });

  await createSession({ userId: user._id.toString(), role: user.role });
  return NextResponse.json({ ok: true, role: user.role }, { status: 201 });
}