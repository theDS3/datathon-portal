"use client";
import { useState } from "react";
import { mockParticipants, Participant } from "@/lib/mock";

export default function Participants() {
  const [rows, setRows] = useState<Participant[]>(mockParticipants);
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const filtered = rows.filter((p) =>
    (p.name + p.email).toLowerCase().includes(query.toLowerCase())
  );

  const add = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: POST /api/participants
    setRows([...rows, { id: String(Date.now()), name, email, mealScanned: false }]);
    setName(""); setEmail("");
  };

  const toggle = (id: string) =>
    // TODO: PATCH /api/participants/[id]
    setRows(rows.map((p) => (p.id === id ? { ...p, mealScanned: !p.mealScanned } : p)));

  return (
    <main className="mx-auto mt-12 max-w-3xl px-4">
      <h1 className="text-2xl font-bold">Participants</h1>

      <form onSubmit={add} className="mt-4 flex gap-2">
        <input className="rounded border p-2" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
        <input className="rounded border p-2" type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className="rounded bg-black px-3 text-white">Add</button>
      </form>

      <input className="mt-4 w-full rounded border p-2" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />

      <table className="mt-4 w-full text-left text-sm">
        <thead><tr className="border-b"><th className="py-2">Name</th><th>Email</th><th>Meal</th><th></th></tr></thead>
        <tbody>
          {filtered.map((p) => (
            <tr key={p.id} className="border-b">
              <td className="py-2">{p.name}</td>
              <td>{p.email}</td>
              <td>{p.mealScanned ? "Scanned" : "Not yet"}</td>
              <td><button className="underline" onClick={() => toggle(p.id)}>Toggle</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}