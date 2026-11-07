import Link from "next/link";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#sponsors", label: "Sponsors" },
  { href: "/showcase", label: "Showcase" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between border-b bg-white/90 px-6 py-3 text-black backdrop-blur">
      <Link href="/" className="font-bold">DS3 Datathon</Link>
      <div className="flex items-center gap-5 text-sm">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="hover:underline">{l.label}</Link>
        ))}
        <Link href="/login" className="hover:underline">Log in</Link>
        <Link href="/register" className="rounded bg-black px-3 py-1.5 text-white">Register</Link>
      </div>
    </nav>
  );
}