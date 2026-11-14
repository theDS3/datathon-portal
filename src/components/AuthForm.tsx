"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AuthForm({ mode }: { mode: "login" | "register" }) {
  const router = useRouter();
  const [as, setAs] = useState<"participant" | "admin">("participant");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const update = (k: string, v: string) => setForm({ ...form, [k]: v });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const response = await fetch(`/api/auth/${mode}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mode === "register" ? form : { email: form.email, password: form.password }),
      });
      const data = (await response.json().catch(() => null)) as
        | { error?: string; role?: "participant" | "admin" }
        | null;

      if (!response.ok) {
        setError(data?.error ?? "Unable to continue. Please try again.");
        return;
      }
      if (data?.role !== "participant" && data?.role !== "admin") {
        setError("The server returned an invalid response. Please try again.");
        return;
      }

      router.replace(data.role === "admin" ? "/admin" : "/dashboard");
      router.refresh();
    } catch {
      setError("Unable to connect. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={submit} className="mx-auto mt-16 flex max-w-sm flex-col gap-3 px-4">
      <h1 className="text-2xl font-bold">{mode === "login" ? "Sign in" : "Create your account"}</h1>

      {mode === "login" && (
        <div className="flex rounded border p-1 text-sm">
          {(["participant", "admin"] as const).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setAs(r)}
              className={`flex-1 rounded py-1.5 capitalize ${as === r ? "bg-black text-white" : ""}`}
            >
              {r}
            </button>
          ))}
        </div>
      )}

      {mode === "register" && (
        <input className="rounded border p-2" placeholder="Full name" required
          value={form.name} onChange={(e) => update("name", e.target.value)} />
      )}
      <input className="rounded border p-2" type="email" placeholder="Email" required
        value={form.email} onChange={(e) => update("email", e.target.value)} />
      <input className="rounded border p-2" type="password" placeholder="Password" minLength={8} required
        value={form.password} onChange={(e) => update("password", e.target.value)} />

      {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
      <button disabled={submitting} className="rounded bg-black p-2 text-white disabled:opacity-60">
        {submitting ? "Please wait..." : mode === "login" ? "Sign in" : "Sign up"}
      </button>

      <p className="text-center text-sm">
        {mode === "login" ? (
          <>No account? <Link href="/register" className="underline">Sign up</Link></>
        ) : (
          <>Already registered? <Link href="/login" className="underline">Sign in</Link></>
        )}
      </p>
    </form>
  );
}