"use client";

import { FormEvent, useState } from "react";
import { LockKeyhole, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    const response = await fetch("/api/admin/auth", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
    if (response.ok) router.replace("/admin");
    else { const body = await response.json().catch(() => ({})); setError(body.error || "Unable to sign in"); setLoading(false); }
  };

  return <main className="flex min-h-screen items-center justify-center bg-slate-950 px-5 py-10 text-white"><div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur-xl"><div className="mb-8 flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-600 shadow-lg shadow-purple-600/30"><ShieldCheck className="h-6 w-6" /></div><div><p className="font-display text-xl font-black">KK Admin</p><p className="text-xs text-slate-400">Protected operations workspace</p></div></div><h1 className="font-display text-3xl font-black">Sign in securely</h1><p className="mt-2 text-sm leading-relaxed text-slate-400">This area is private. Use your administrator credentials to continue.</p><form onSubmit={submit} className="mt-7 grid gap-4"><label className="grid gap-2 text-sm font-bold">Email<input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-purple-400" placeholder="admin@yourdomain.com" /></label><label className="grid gap-2 text-sm font-bold">Password<div className="relative"><LockKeyhole className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" /><input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 pl-10 text-white outline-none focus:border-purple-400" /></div></label>{error && <p role="alert" className="rounded-xl border border-red-400/20 bg-red-400/10 p-3 text-sm text-red-200">{error}</p>}<button disabled={loading} className="mt-2 rounded-xl bg-purple-600 px-4 py-3 font-bold transition hover:bg-purple-500 disabled:cursor-wait disabled:opacity-60">{loading ? "Verifying…" : "Sign in"}</button></form><p className="mt-6 text-center text-xs text-slate-500">Session expires automatically after 8 hours.</p></div></main>;
}
