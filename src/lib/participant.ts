import { getSession } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";

export type CurrentParticipant = {
  id: string;
  name: string;
  qrToken: string;
};

export async function getCurrentParticipant(): Promise<CurrentParticipant | null> {
  "use cache: private";

  const session = await getSession();
  if (session?.role !== "participant") return null;

  await connectDB();
  const user = await User.findById(session.userId).select("name role qrToken").lean();
  if (!user || user.role !== "participant") return null;

  return {
    id: user._id.toString(),
    name: user.name,
    qrToken: user.qrToken,
  };
}
