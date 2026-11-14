import Link from "next/link";
import type { ReactNode } from "react";
import { getSession } from "@/lib/auth";
import ParticipantNav from "@/components/ParticipantNav";
import LogoutButton from "@/components/LogoutButton";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#sponsors", label: "Sponsors" },
  { href: "/showcase", label: "Showcase" },
];

function Navigation({ children }: { children: ReactNode }) {
  return (
    <nav className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-4 border-b bg-white/90 px-6 py-3 text-black backdrop-blur">
      <Link href="/" className="font-bold">DS3 Datathon</Link>
      <div className="flex flex-wrap items-center justify-end gap-5 text-sm">{children}</div>
    </nav>
  );
}

function PublicLinks() {
  return links.map((link) => (
    <Link key={link.href} href={link.href} className="hover:underline">{link.label}</Link>
  ));
}

export function NavbarFallback() {
  return (
    <Navigation>
      <PublicLinks />
      <Link href="/login" className="hover:underline">Log in</Link>
      <Link href="/register" className="rounded bg-black px-3 py-1.5 text-white">Register</Link>
    </Navigation>
  );
}

export default async function Navbar() {
  const session = await getSession();

  if (session?.role === "participant") {
    return (
      <Navigation>
        <ParticipantNav />
        <Link href="/dashboard" className="hover:underline">Dashboard</Link>
        <LogoutButton />
      </Navigation>
    );
  }

  return (
    <Navigation>
      <PublicLinks />
      {session?.role === "admin" ? (
        <>
          <Link href="/admin" className="hover:underline">Admin</Link>
          <LogoutButton />
        </>
      ) : (
        <>
          <Link href="/login" className="hover:underline">Log in</Link>
          <Link href="/register" className="rounded bg-black px-3 py-1.5 text-white">Register</Link>
        </>
      )}
    </Navigation>
  );
}