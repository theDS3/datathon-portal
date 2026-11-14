import { Suspense } from "react";
import { redirect } from "next/navigation";
import ParticipantQR from "@/components/ParticipantQR";
import { getCurrentParticipant } from "@/lib/participant";

async function ParticipantDashboard() {
  const participant = await getCurrentParticipant();
  if (!participant) redirect("/login");

  return (
    <main className="mx-auto mt-12 max-w-md px-4 text-center">
      <h1 className="text-2xl font-bold">Welcome, {participant.name}</h1>
      <p className="mt-2 text-sm">Show this QR code at the meal line.</p>
      <ParticipantQR token={participant.qrToken} />
    </main>
  );
}

export default function Dashboard() {
  return (
    <Suspense fallback={<main className="mx-auto mt-12 max-w-md px-4 text-center">Loading your dashboard...</main>}>
      <ParticipantDashboard />
    </Suspense>
  );
}