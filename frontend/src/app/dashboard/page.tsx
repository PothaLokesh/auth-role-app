"use client";
import { useEffect, useState } from "react";
import { api, setAuthToken } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return router.push("/login");

    setAuthToken(token);

    api.get("/auth/me").then(res => {
      setUser(res.data.user);
    }).catch(() => {
      router.push("/login");
    });
  }, []);

  if (!user) return <p className="text-white">Loading...</p>;

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center pt-16 gap-3">
      <h1 className="text-3xl font-bold">
        Welcome, {user.name} ({user.role})
      </h1>
      <button
        className="bg-red-600 px-4 py-2 rounded"
        onClick={() => {
          localStorage.removeItem("token");
          setAuthToken(undefined);
          router.push("/login");
        }}>
        Logout
      </button>
    </div>
  );
}
