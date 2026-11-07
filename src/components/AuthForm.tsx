"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AuthForm({ mode }: { mode: "login" | "register" }) {
  const router = useRouter();
  const [as, setAs] = useState<"participant" | "admin">("participant");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const update = (k: string, v: string) => setForm({ ...form, [k]: v });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // TODO: fetch(`/api/auth/${mode}`, { method: "POST", ... }) once the DB is connected,
    // then redirect using the role the API returns.
    router.push(mode === "login" && as === "admin" ? "/admin" : "/dashboard");
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

      {error && <p className="text-sm text-red-600">{error}</p>}
      <button className="rounded bg-black p-2 text-white">
        {mode === "login" ? "Sign in" : "Sign up"}
      </button>

      <p className="text-center text-sm">
        {mode === "login" ? (
          <>No account? <Link href="/signup" className="underline">Sign up</Link></>
        ) : (
          <>Already registered? <Link href="/signin" className="underline">Sign in</Link></>
        )}
      </p>
    </form>
  );
}