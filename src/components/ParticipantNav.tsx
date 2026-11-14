"use client";

import Link from "next/link";
import { useState } from "react";

const homeLinks = [
  { href: "/#about", label: "About Us" },
  { href: "/#sponsors", label: "Sponsors" },
  { href: "/#contact", label: "Contact" },
];

const resourceLinks = [
  { href: "/showcase#gallery", label: "Pictures" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/showcase#projects", label: "Project Showcase" },
];

function NavMenu({
  label,
  links,
  open,
  onToggle,
  onClose,
}: {
  label: string;
  links: { href: string; label: string }[];
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <details open={open} className="relative">
      <summary
        className="cursor-pointer list-none hover:underline"
        onClick={(event) => {
          event.preventDefault();
          onToggle();
        }}
      >
        {label}
      </summary>
      <div className="absolute left-0 top-full z-20 mt-2 w-48 rounded border bg-white p-2 text-black shadow-md">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="block rounded px-3 py-2 hover:bg-gray-100"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </details>
  );
}

export default function ParticipantNav() {
  const [openMenu, setOpenMenu] = useState<"home" | "resources" | null>(null);

  return (
    <>
      <NavMenu
        label="Home"
        links={homeLinks}
        open={openMenu === "home"}
        onToggle={() => setOpenMenu((current) => current === "home" ? null : "home")}
        onClose={() => setOpenMenu(null)}
      />
      <NavMenu
        label="Resources/Content"
        links={resourceLinks}
        open={openMenu === "resources"}
        onToggle={() => setOpenMenu((current) => current === "resources" ? null : "resources")}
        onClose={() => setOpenMenu(null)}
      />
      <Link href="/information" onClick={() => setOpenMenu(null)} className="hover:underline">
        View Information
      </Link>
    </>
  );
}
