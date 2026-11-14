"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const logout = async () => {
    setPending(true);
    setError("");
    try {
      const response = await fetch("/api/auth/logout", { method: "POST" });
      if (!response.ok) {
        setError("Logout failed");
        return;
      }
      router.replace("/login");
      router.refresh();
    } catch {
      setError("Logout failed");
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      <button type="button" onClick={logout} disabled={pending} className="hover:underline disabled:opacity-60">
        {pending ? "Logging out..." : "Log out"}
      </button>
      {error && <span role="alert" className="text-xs text-red-600">{error}</span>}
    </>
  );
}
