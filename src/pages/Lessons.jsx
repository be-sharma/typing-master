import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const lessonContent = {
  beginner: {
    title: "Beginner",
    description:
      "Focus on finger placement, slow rhythm, and accuracy with simple key patterns.",
    text: "asdf jkl; asdf jkl; asdf jkl; practice with calm, steady movement and relaxed hands.",
  },
  intermediate: {
    title: "Intermediate",
    description:
      "Improve sentence flow, speed, and confidence on common English words and phrases.",
    text: "The quick brown fox jumps over the lazy dog while your fingers stay smooth and relaxed.",
  },
  advanced: {
    title: "Advanced",
    description:
      "Challenge yourself with longer phrases, technical words, and faster finishes.",
    text: "Precision, rhythm, and consistency are what separate great typists from average ones.",
  },
};

function Lessons() {
  const { level } = useParams();
  const lesson = level ? lessonContent[level.toLowerCase()] : null;

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        {lesson ? (
          <>
            <Link
              to="/lessons"
              className="text-sm text-zinc-500 hover:text-white"
            >
              ← Back to lessons
            </Link>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                Lesson Path
              </p>

              <h1 className="mt-3 text-4xl font-semibold">
                {lesson.title}
              </h1>

              <p className="mt-4 max-w-xl text-zinc-500">
                {lesson.description}
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <p className="text-lg leading-8 text-zinc-200">
                {lesson.text}
              </p>

              <div className="mt-6 flex gap-3">
                <Link
                  to="/"
                  className="rounded-lg border border-white/10 px-5 py-2.5 text-sm hover:bg-white/5"
                >
                  Home
                </Link>

                <Link
                  to="/practice"
                  className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-zinc-200"
                >
                  Start Typing
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <Link
              to="/"
              className="text-sm text-zinc-500 hover:text-white"
            >
              ← Home
            </Link>

            <div className="mb-10 mt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                Training
              </p>

              <h1 className="mt-3 text-4xl font-semibold">
                Learn to type.
              </h1>

              <p className="mt-4 max-w-xl text-zinc-500">
                Build your typing skills step by step with focused lessons,
                real-time feedback and progressive challenges.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {Object.entries(lessonContent).map(([key, item], index) => (
                <div
                  key={key}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/20"
                >
                  <span className="text-xs uppercase tracking-widest text-zinc-500">
                    Level {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2 className="mt-4 text-2xl font-semibold">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {item.description}
                  </p>

                  <Link
                    to={`/lessons/${key}`}
                    className="mt-6 inline-block rounded-lg border border-white/10 px-5 py-2.5 text-sm hover:bg-white hover:text-black"
                  >
                    Start Lesson →
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default Lessons;