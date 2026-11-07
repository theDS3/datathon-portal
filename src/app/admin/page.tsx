import Link from "next/link";
import { mockParticipants } from "@/lib/mock";

export default function AdminHome() {
  const scanned = mockParticipants.filter((p) => p.mealScanned).length;
  return (
    <main className="mx-auto mt-12 max-w-2xl px-4">
      <h1 className="text-2xl font-bold">Admin</h1>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="rounded border p-4">
          <p className="text-3xl font-bold">{mockParticipants.length}</p>
          <p className="text-sm">Participants</p>
        </div>
        <div className="rounded border p-4">
          <p className="text-3xl font-bold">{scanned}</p>
          <p className="text-sm">Meals scanned</p>
        </div>
      </div>
      <div className="mt-6 flex gap-3">
        <Link href="/admin/participants" className="rounded border px-4 py-2">Manage participants</Link>
        <Link href="/admin/scan" className="rounded bg-black px-4 py-2 text-white">Scan QR</Link>
      </div>
    </main>
  );
}