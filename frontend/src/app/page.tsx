import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Role Based Auth App</h1>

      <div className="flex gap-4">
        <Link href="/signup" className="bg-blue-600 px-4 py-2 rounded">
          Sign Up
        </Link>
        <Link href="/login" className="bg-green-600 px-4 py-2 rounded">
          Login
        </Link>
      </div>
    </main>
  );
}
