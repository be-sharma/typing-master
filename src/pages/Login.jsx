import { Link } from "react-router-dom";

function Login() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0b0b] px-5 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-black/30">
        <p className="mb-2 text-xs uppercase tracking-[0.25em] text-zinc-500">Account</p>
        <h1 className="text-3xl font-semibold">Welcome back</h1>
        <p className="mt-3 text-sm text-zinc-500">Sign in to save progress and track your stats.</p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm text-zinc-400">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-zinc-600 focus:border-white/40"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-400">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-zinc-600 focus:border-white/40"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-lg bg-white px-4 py-3 font-medium text-black transition hover:bg-zinc-200"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-zinc-500">
          <Link to="/" className="text-white hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Login;
