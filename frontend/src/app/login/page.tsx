"use client";
import { useState, FormEvent } from "react";
import { api, setAuthToken } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      setAuthToken(res.data.token);
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed.");
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-6 rounded w-80 space-y-3">
        <h2 className="text-xl font-bold text-center">Login</h2>
        {error && <p className="text-red-400">{error}</p>}

        <input className="w-full p-2 bg-slate-700 rounded" type="email" placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })} />

        <input className="w-full p-2 bg-slate-700 rounded" type="password" placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })} />

        <button className="w-full bg-green-600 py-2 rounded">Login</button>
      </form>
    </div>
  );
}
