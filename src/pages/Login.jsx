import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please enter both email and password.");
      setSuccessMessage("");
      return;
    }

    setError("");
    setSuccessMessage(`Signed in as ${formData.email}.`);
    console.log("Login submitted:", formData);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0b0b] px-5 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-black/30">
        <p className="mb-2 text-xs uppercase tracking-[0.25em] text-zinc-500">
          Account
        </p>
        <h1 className="text-3xl font-semibold">Welcome back</h1>
        <p className="mt-3 text-sm text-zinc-500">
          Sign in to save progress and track your stats.
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-zinc-400">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-zinc-600 focus:border-white/40"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm text-zinc-400">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-zinc-600 focus:border-white/40"
            />
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}
          {successMessage && (
            <p className="text-sm text-emerald-400">{successMessage}</p>
          )}

          <button
            type="submit"
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
