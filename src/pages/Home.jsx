import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import TypingPreview from "../components/TypingPreview";

function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <Navbar />

      {/* Hero Section */}
<section className="flex min-h-[85vh] flex-col items-center justify-center px-5 text-center">
        <p className="mb-6 text-xs tracking-[0.25em] text-zinc-500">
          ⌨️ MASTER YOUR KEYBOARD
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-9xl">
          Type Faster.
          <br />
          <span className="text-zinc-500">
            Think Faster.
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
          Improve your typing speed, accuracy and confidence
          through focused practice and real-time feedback.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            to="/practice"
            className="rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
          >
            Start Typing
          </Link>

          <button className="rounded-lg border border-zinc-700 px-6 py-3 transition hover:border-zinc-500">
            Explore Lessons
          </button>
        </div>

      </section>

      {/* Typing Preview */}
      <section className="px-5 pb-20 pt-0">
        <div className="mx-auto max-w-5xl">
          <TypingPreview />
        </div>
      </section>

    </main>
  );
}

export default Home;