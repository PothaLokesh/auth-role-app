"use client";
import { useState, FormEvent } from "react";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "User" });
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      await api.post("/auth/signup", form);
      router.push("/login");
    } catch (err: any) {
      setError(err?.response?.data?.message || "Signup failed.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <form className="bg-slate-800 p-6 rounded space-y-3 w-80" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold text-center">Sign Up</h2>
        {error && <p className="text-red-400">{error}</p>}

        <input className="w-full p-2 rounded bg-slate-700" placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })} />

        <input className="w-full p-2 rounded bg-slate-700" placeholder="Email" type="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })} />

        <input className="w-full p-2 rounded bg-slate-700" type="password" placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })} />

        <select className="w-full p-2 rounded bg-slate-700"
          onChange={(e) => setForm({ ...form, role: e.target.value })}>
          <option>User</option>
          <option>Admin</option>
        </select>

        <button className="w-full bg-blue-600 p-2 rounded">Create Account</button>
      </form>
    </div>
  );
}
