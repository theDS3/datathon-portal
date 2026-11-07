import { Schema, model, models } from "mongoose";
import { randomBytes } from "crypto";

const UserSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["participant", "admin"], default: "participant" },
    qrToken: {
      type: String,
      unique: true,
      default: () => randomBytes(16).toString("hex"),
    },
  },
  { timestamps: true }
);

export const User = models.User || model("User", UserSchema);