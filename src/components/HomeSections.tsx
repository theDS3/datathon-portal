import Link from "next/link";
import { sponsors } from "@/lib/content";

export function Hero() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm uppercase tracking-widest">DS3 Datathon 2026</p>
      <h1 className="mt-3 text-5xl font-bold">Build with data. Together.</h1>
      <p className="mt-4 max-w-xl">A short line about the event, the dates, and the location.</p>
      <div className="mt-8 flex gap-3">
        <Link href="/signup" className="rounded bg-black px-5 py-2.5 text-white">Register now</Link>
        <Link href="/showcase" className="rounded border px-5 py-2.5">See past projects</Link>
      </div>
    </section>
  );
}

export function About() {
  const stats = [
    { value: "200+", label: "Participants" },
    { value: "24h", label: "Of hacking" },
    { value: "10+", label: "Sponsors" },
  ];
  return (
    <section id="about" className="mx-auto max-w-4xl px-4 py-20">
      <h2 className="text-3xl font-bold">About</h2>
      <p className="mt-4">Two or three sentences about DS3, what the datathon is, and who it's for.</p>
      <div className="mt-8 grid grid-cols-3 gap-4 text-center">
        {stats.map((s) => (
          <div key={s.label} className="rounded border p-4">
            <p className="text-3xl font-bold">{s.value}</p>
            <p className="text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Sponsors() {
  return (
    <section id="sponsors" className="mx-auto max-w-4xl px-4 py-20">
      <h2 className="text-3xl font-bold">Sponsors</h2>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {sponsors.map((s) => (
          <div key={s.name} className="flex h-24 flex-col items-center justify-center rounded border">
            <p className="font-medium">{s.name}</p>
            <p className="text-xs">{s.tier}</p>
          </div>
        ))}
      </div>
    </section>
  );
}